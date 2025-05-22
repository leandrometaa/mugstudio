import React, { useEffect, useRef } from "react";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import "@babylonjs/loaders/glTF";
import * as GUI from "@babylonjs/gui";
import { Color3 } from "@babylonjs/core/Maths/math.color";
import { VertexBuffer } from "@babylonjs/core/Buffers/buffer";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { Material } from "@babylonjs/core/Materials/material";
import { DynamicTexture } from "@babylonjs/core/Materials/Textures/dynamicTexture";

const BabylonScene3: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dynamicTextureRef = useRef<DynamicTexture | null>(null);
    const textColorRef = useRef<Color3>(Color3.White()); // Ref to store text color
    const textInputRef = useRef<GUI.InputText | null>(null); // Ref to store text input control

    useEffect(() => {
        if (!canvasRef.current) return;

        const engine = new Engine(canvasRef.current, true);
        const scene = new Scene(engine);

        // Create camera
        const camera = new ArcRotateCamera(
            "camera",
            0,
            Math.PI / 3,
            10,
            Vector3.Zero(),
            scene
        );
        camera.attachControl(canvasRef.current, true);
        camera.lowerBetaLimit = 0;
        camera.upperBetaLimit = Math.PI / 2;
        camera.lowerRadiusLimit = 2;
        camera.upperRadiusLimit = 30;

        // Create light
        const light = new HemisphericLight(
            "light",
            new Vector3(0, 1, 0),
            scene
        );
        light.intensity = 0.7;

        // Create GUI
        const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

        // Create control panel
        const panel = new GUI.StackPanel();
        panel.width = "220px"; // Slightly wider panel
        panel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
        panel.paddingTop = "20px";
        panel.paddingRight = "20px";
        panel.paddingLeft = "10px"; // Added padding left
        panel.paddingBottom = "10px"; // Added padding bottom
        panel.background = "#333333"; // Dark background for the panel
        panel.alpha = 0.8; // Slightly transparent background
        advancedTexture.addControl(panel);

        // Add title
        const title = new GUI.TextBlock();
        title.text = "Modifica Tazza";
        title.height = "30px";
        title.color = "white";
        title.fontSize = 22; // Slightly larger font
        title.paddingBottom = "10px"; // Padding below title
        panel.addControl(title);

        // Function to create color picker
        function createColorPicker(name: string, defaultColor: string, onColorChange: (color: Color3) => void) { // Added onColorChange callback
            const container = new GUI.StackPanel(); // Container for label and picker
            container.height = "130px"; // Fixed height for color picker section
            container.paddingBottom = "10px";
            panel.addControl(container);

            const label = new GUI.TextBlock();
            label.text = name;
            label.height = "20px"; // Adjusted label height
            label.color = "white";
            label.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            container.addControl(label);

            const colorPicker = new GUI.ColorPicker();
            colorPicker.width = "100%"; // Make picker take full width of container
            colorPicker.height = "100px";
            colorPicker.value = Color3.FromHexString(defaultColor);
            // Added styling for the color picker itself (inner appearance is fixed by Babylon.js)
            // colorPicker.thickness = 1; // Example border thickness (inner control)
            // colorPicker.background = "white"; // Example background (inner control)
            container.addControl(colorPicker);

            // Add observer for color change
            colorPicker.onValueChangedObservable.add(onColorChange);

            return colorPicker;
        };

        // Function to create a slider with label
        function createSlider(name: string, min: number, max: number, defaultValue: number) {
            const container = new GUI.StackPanel(); // Container for label and slider
            container.height = "40px"; // Fixed height for slider section
            container.paddingBottom = "10px";
            panel.addControl(container);

            const label = new GUI.TextBlock();
            label.text = name;
            label.height = "20px";
            label.color = "white";
            label.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            container.addControl(label);

            const slider = new GUI.Slider("slider");
            slider.minimum = min;
            slider.maximum = max;
            slider.value = defaultValue;
            slider.height = "20px";
            slider.width = "100%"; // Make slider take full width of container
            slider.color = "#007bff"; // Slider thumb color
            slider.background = "#666666"; // Slider background track color
            slider.thumbWidth = 15; // Adjust thumb size
            container.addControl(slider);

            return slider;
        }

        // Create color picker for the cup base color
        const cupColorPicker = createColorPicker("Colore Base", "#808080", (color) => {
            // Se c'è del testo applicato, ricrea la texture con il nuovo colore di base
            if (dynamicTextureRef.current && textInputRef.current && textInputRef.current.text && cupMaterial.diffuseTexture === dynamicTextureRef.current) {
                // Ridisegna il testo con il nuovo colore di base
                drawTextOnTexture(textInputRef.current.text, color, textColorRef.current, textPositionSlider.value);
            } else {
                // Se non c'è testo, applica semplicemente il colore
                cupMaterial.diffuseColor = color;

                // Se c'è una texture di immagine (non di testo), rimuovila per mostrare il colore
                if (cupMaterial.diffuseTexture && !(cupMaterial.diffuseTexture instanceof DynamicTexture)) {
                    cupMaterial.diffuseTexture.dispose();
                    cupMaterial.diffuseTexture = null;
                }

                // Se c'è una texture dinamica ma nessun testo, rimuovila
                if (dynamicTextureRef.current && (!textInputRef.current || !textInputRef.current.text)) {
                    dynamicTextureRef.current.dispose();
                    dynamicTextureRef.current = null;
                    cupMaterial.diffuseTexture = null;
                }
            }
            cupMaterial.alphaMode = Material.MATERIAL_OPAQUE;
        });

        // Create color picker for the text color
        const textColorPicker = createColorPicker("Colore Testo", "#FFFFFF", (color) => {
            textColorRef.current = color; // Update text color ref
            // If text is currently applied, redraw the texture with the new text color
            if (dynamicTextureRef.current && cupMaterial.diffuseTexture === dynamicTextureRef.current && textInputRef.current && textInputRef.current.text) {
                const baseColor = cupColorPicker.value; // Get current base color
                drawTextOnTexture(textInputRef.current.text, baseColor, color, textPositionSlider.value);
            }
        });

        // Create Lucida/Opaca toggle
        const glossinessPanel = new GUI.StackPanel();
        glossinessPanel.isVertical = false; // Arrange horizontally
        glossinessPanel.height = "30px";
        glossinessPanel.paddingBottom = "10px"; // Padding below toggle
        panel.addControl(glossinessPanel);

        const glossinessLabel = new GUI.TextBlock();
        glossinessLabel.text = "Lucida / Opaca:";
        glossinessLabel.width = "120px";
        glossinessLabel.color = "white";
        glossinessLabel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        glossinessPanel.addControl(glossinessLabel);

        const glossinessCheckbox = new GUI.Checkbox();
        glossinessCheckbox.width = "20px";
        glossinessCheckbox.height = "20px";
        glossinessCheckbox.isChecked = true; // Start as Lucida
        glossinessCheckbox.color = "#007bff"; // Checkmark color
        glossinessCheckbox.background = "white"; // Checkbox background
        glossinessCheckbox.thickness = 1; // Checkbox border thickness
        glossinessPanel.addControl(glossinessCheckbox);

        // Create Text Input
        const textInput = new GUI.InputText();
        textInput.width = "95%"; // Adjusted width
        textInput.maxWidth = "95%"; // Adjusted max width
        textInput.height = "30px";
        textInput.color = "white";
        textInput.background = "#666666"; // Darker background
        textInput.placeholderText = "Inserisci testo qui...";
        textInput.placeholderColor = "#cccccc";
        textInput.paddingBottom = "5px"; // Padding below input
        panel.addControl(textInput);
        textInputRef.current = textInput; // Store ref to text input

        // Create Apply Button
        const applyTextButton = new GUI.Button();
        applyTextButton.width = "95%"; // Adjusted width
        applyTextButton.height = "40px";
        applyTextButton.color = "white";
        applyTextButton.background = "#007bff";
        if (applyTextButton.textBlock) { // Check if textBlock exists
            applyTextButton.textBlock.text = "Applica Testo";
            applyTextButton.textBlock.fontSize = 18; // Slightly larger font
        }
        applyTextButton.paddingBottom = "10px"; // Padding below button
        panel.addControl(applyTextButton);

        // Create slider for text vertical position
        const textPositionSlider = createSlider("Posizione Testo", 0.3, 0.8, 0.5); // Range and default as suggested

        // Add shininess checkbox observer
        glossinessCheckbox.onIsCheckedChangedObservable.add((isChecked) => {
            if (isChecked) {
                // Lucida
                cupMaterial.specularPower = 64; // High specular
                cupMaterial.specularColor = Color3.White(); // White specular highlights
            } else {
                // Opaca
                cupMaterial.specularPower = 1; // Low specular
                cupMaterial.specularColor = Color3.Black(); // Black specular to minimize highlights further
            }
        });

        // Add observer for text position slider
        textPositionSlider.onValueChangedObservable.add((value) => {
            // If text is currently applied, redraw the texture with the new position
            if (dynamicTextureRef.current && cupMaterial.diffuseTexture === dynamicTextureRef.current && textInputRef.current && textInputRef.current.text) {
                const text = textInputRef.current.text;
                const baseColor = cupColorPicker.value;
                const textColor = textColorRef.current;
                drawTextOnTexture(text, baseColor, textColor, value); // Pass the new y position value
            }
        });

        // Function to draw text on the dynamic texture
        function drawTextOnTexture(text: string, baseColor: Color3, textColor: Color3, yPositionRatio: number) {
            const textureSize = 1024;

            // Create or get existing dynamic texture
            if (!dynamicTextureRef.current) {
                // hasAlpha=false per evitare problemi di trasparenza
                dynamicTextureRef.current = new DynamicTexture("dynamic_text_texture", textureSize, scene, false, Texture.LINEAR_LINEAR_MIPLINEAR);
            }

            const dynamicTexture = dynamicTextureRef.current;
            const ctx = dynamicTexture.getContext();
            const textContext = ctx as any;

            // Mantieni il colore di base della tazza
            const baseColorHex = `rgb(${Math.round(baseColor.r * 255)}, ${Math.round(baseColor.g * 255)}, ${Math.round(baseColor.b * 255)})`;

            // Riempi l'intera texture con il colore base della tazza
            ctx.fillStyle = baseColorHex;
            ctx.fillRect(0, 0, textureSize, textureSize);

            // CORREZIONE TESTO SPECCHIATO: Flip del canvas context
            ctx.save(); // Salva lo stato corrente del context
            ctx.scale(1, -1); // Flippa verticalmente il context
            ctx.translate(0, -textureSize); // Trasla per compensare il flip

            // Imposta le proprietà del testo
            const fontSize = 120;
            textContext.font = `bold ${fontSize}px Arial`;

            // Usa il colore del testo selezionato
            const textColorHex = `rgb(${Math.round(textColor.r * 255)}, ${Math.round(textColor.g * 255)}, ${Math.round(textColor.b * 255)})`;
            textContext.fillStyle = textColorHex;

            // Colore del bordo (commented out to remove stroke)
            // const brightness = (textColor.r * 0.299 + textColor.g * 0.587 + textColor.b * 0.114);
            // textContext.strokeStyle = brightness > 0.5 ? "black" : "white";
            textContext.lineWidth = 0; // Set line width to 0 to disable stroke
            textContext.textAlign = "center";
            textContext.textBaseline = "middle";

            // Posizionamento verticale basato sullo slider
            const x = textureSize / 2; // Centro orizzontale
            const y = textureSize * yPositionRatio; // Posizione verticale dal parametro

            // Disegna il testo (removed strokeText)
            // textContext.strokeText(text, x, y);
            textContext.fillText(text, x, y);

            ctx.restore(); // Ripristina lo stato del context

            // Aggiorna la texture
            dynamicTexture.update();

            // Applica la texture al materialedella tazza
            cupMaterial.diffuseTexture = dynamicTexture;

            // Mantieni il colore di base invece di impostarlo a bianco
            cupMaterial.diffuseColor = baseColor;

            // Usa MATERIAL_OPAQUE per l'alpha mode
            cupMaterial.alphaMode = Material.MATERIAL_OPAQUE;

            // NON impostare vScale = -1 perché ora abbiamo corretto il flip nel context
            dynamicTexture.vScale = 1;
        }

        // Create a material for the cup
        const cupMaterial = new StandardMaterial("cup_material", scene);
        cupMaterial.diffuseColor = Color3.FromHexString("#808080");
        cupMaterial.specularColor = Color3.White(); // Default specular color for plastic/ceramic
        cupMaterial.alphaMode = Material.MATERIAL_OPAQUE; // Start as opaque

        // Set initial glossiness based on checkbox state
        if (glossinessCheckbox.isChecked) {
            cupMaterial.specularPower = 64; // High specular
        } else {
            cupMaterial.specularPower = 1; // Low specular
        }

        // Handle Apply Text button click
        applyTextButton.onPointerUpObservable.add(() => {
            const text = textInputRef.current ? textInputRef.current.text.trim() : ""; // Use ref and trim

            if (!text) {
                // Se il testo è vuoto, rimuovi la texture e torna al colore base
                if (cupMaterial.diffuseTexture) {
                    cupMaterial.diffuseTexture.dispose();
                    cupMaterial.diffuseTexture = null;
                }
                if (dynamicTextureRef.current) {
                    dynamicTextureRef.current.dispose();
                    dynamicTextureRef.current = null;
                }
                // Ripristina il colore base
                const currentColor = cupColorPicker.value;
                cupMaterial.diffuseColor = currentColor;
                cupMaterial.alphaMode = Material.MATERIAL_OPAQUE;
                return;
            }

            // Disegna il testo con il colore base corrente e il colore del testo selezionato, usando la posizione dello slider
            const baseColor = cupColorPicker.value;
            const yPosition = textPositionSlider.value; // Get position from slider
            drawTextOnTexture(text, baseColor, textColorRef.current, yPosition); // Pass y position
        });

        // Load the model
        SceneLoader.ImportMesh(
            "",
            "/models/",
            "tazza_1.glb",
            scene,
            (meshes) => {
                // Center the model
                const boundingInfo = meshes[0].getHierarchyBoundingVectors();
                const center = boundingInfo.min.add(boundingInfo.max).scale(0.5);

                // Find the main cup mesh and apply our material
                const cupMesh = meshes.find(mesh => mesh.name === "coffee_cup");
                if (cupMesh) {
                    cupMesh.position.subtractInPlace(center);
                    cupMesh.rotation.y = Math.PI; // Keep the rotation
                    cupMesh.material = cupMaterial; // Apply our material
                }

                // Adjust camera to fit the model
                const radius = boundingInfo.max.subtract(boundingInfo.min).length() / 2;
                camera.radius = radius * 3;
                camera.target = Vector3.Zero();
            }
        );

        // Handle file input change
        const handleFileChange = (event: Event) => {
            const fileInput = event.target as HTMLInputElement;
            const file = fileInput.files?.[0];

            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (reader.result) {
                        // Dispose dynamic texture if it exists
                        if (dynamicTextureRef.current) {
                            dynamicTextureRef.current.dispose();
                            dynamicTextureRef.current = null;
                        }
                        // Create a Babylon.js texture from the data URL
                        const texture = new Texture(reader.result as string, scene);
                        // Apply the texture to the cup material
                        cupMaterial.diffuseTexture = texture;
                        // Set diffuse color to white to show the texture clearly
                        cupMaterial.diffuseColor = Color3.White();
                        // Ensure alpha mode is correct for texture with alpha (assuming image might have alpha)
                        cupMaterial.alphaMode = Material.MATERIAL_ALPHATEST;
                        // Clear the file input value to allow selecting the same file again
                        if (fileInputRef.current) fileInputRef.current.value = '';
                    }
                };
                reader.readAsDataURL(file);
            }
        };

        // Attach file input event listener
        const currentFileInput = fileInputRef.current;
        if (currentFileInput) {
            currentFileInput.addEventListener('change', handleFileChange);
        }

        // Run the render loop
        engine.runRenderLoop(() => {
            scene.render();
        });

        // Handle window resize
        const handleResize = () => {
            engine.resize();
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            engine.dispose();
            if (currentFileInput) {
                currentFileInput.removeEventListener('change', handleFileChange);
            }
            // Dispose dynamic texture on cleanup if it exists
            if (dynamicTextureRef.current) {
                dynamicTextureRef.current.dispose();
                dynamicTextureRef.current = null;
            }
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Styled file input button */}
            <label htmlFor="file-upload" style={{
                position: 'absolute',
                top: '520px', // Adjusted position to be below the GUI panel
                right: '20px', // Align to the right
                zIndex: 100,
                display: 'inline-block',
                padding: '10px 15px',
                backgroundColor: '#007bff',
                color: 'white',
                cursor: 'pointer',
                borderRadius: '5px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                transition: 'background-color 0.3s ease'
            }}>
                Carica Immagine
            </label>
            <input
                id="file-upload"
                type="file"
                ref={fileInputRef}
                style={{
                    display: 'none' // Hide the actual file input
                }}
            />

            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    outline: "none",
                }}
            />
        </div>
    );
};

export default BabylonScene3; 