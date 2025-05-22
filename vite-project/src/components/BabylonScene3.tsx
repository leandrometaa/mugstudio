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

const BabylonScene3: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

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
        panel.width = "200px";
        panel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
        panel.paddingTop = "20px";
        panel.paddingRight = "20px";
        advancedTexture.addControl(panel);

        // Add title
        const title = new GUI.TextBlock();
        title.text = "Modifica Tazza";
        title.height = "30px";
        title.color = "white";
        title.fontSize = 20;
        panel.addControl(title);

        // Function to create color picker
        function createColorPicker(name: string, defaultColor: string) {
            const colorPicker = new GUI.ColorPicker();
            colorPicker.width = "100px";
            colorPicker.height = "100px";
            colorPicker.value = Color3.FromHexString(defaultColor);

            const label = new GUI.TextBlock();
            label.text = name;
            label.height = "30px";
            label.color = "white";

            panel.addControl(label);
            panel.addControl(colorPicker);

            return colorPicker;
        };

        // Function to create a slider with label (keeping in case needed later)
        function createSlider(name: string, min: number, max: number, defaultValue: number) {
            const slider = new GUI.Slider("slider");
            slider.minimum = min;
            slider.maximum = max;
            slider.value = defaultValue;
            slider.height = "20px";
            slider.width = "150px";
            slider.color = "white";

            const label = new GUI.TextBlock();
            label.text = name;
            label.height = "30px";
            label.color = "white";

            panel.addControl(label);
            panel.addControl(slider);

            return slider;
        }

        // Create color picker for the cup
        const cupColorPicker = createColorPicker("Colore Base", "#808080");

        // Create Lucida/Opaca toggle
        const glossinessPanel = new GUI.StackPanel();
        glossinessPanel.isVertical = false; // Arrange horizontally
        glossinessPanel.height = "30px";
        panel.addControl(glossinessPanel);

        const glossinessLabel = new GUI.TextBlock();
        glossinessLabel.text = "Lucida / Opaca:";
        glossinessLabel.width = "120px";
        glossinessLabel.color = "white";
        glossinessPanel.addControl(glossinessLabel);

        const glossinessCheckbox = new GUI.Checkbox();
        glossinessCheckbox.width = "20px";
        glossinessCheckbox.height = "20px";
        glossinessCheckbox.isChecked = true; // Start as Lucida
        glossinessCheckbox.color = "white";
        glossinessCheckbox.background = "grey";
        glossinessPanel.addControl(glossinessCheckbox);

        // Create a material for the cup
        const cupMaterial = new StandardMaterial("cup_material", scene);
        cupMaterial.diffuseColor = Color3.FromHexString("#808080");
        cupMaterial.specularColor = Color3.White(); // Default specular color for plastic/ceramic

        // Set initial glossiness based on checkbox state
        if (glossinessCheckbox.isChecked) {
            cupMaterial.specularPower = 64; // High specular for Lucida
        } else {
            cupMaterial.specularPower = 1; // Low specular for Opaca
        }

        // Add color change observer
        cupColorPicker.onValueChangedObservable.add((color) => {
            cupMaterial.diffuseColor = new Color3(color.r, color.g, color.b);
            // When color changes, remove any texture
            if (cupMaterial.diffuseTexture) {
                cupMaterial.diffuseTexture.dispose();
                cupMaterial.diffuseTexture = null;
            }
        });

        // Add glossiness checkbox observer
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
                        // Create a Babylon.js texture from the data URL
                        const texture = new Texture(reader.result as string, scene);
                        // Apply the texture to the cup material
                        cupMaterial.diffuseTexture = texture;
                        // Set diffuse color to white to show the texture clearly
                        cupMaterial.diffuseColor = Color3.White();
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
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Styled file input button */}
            <label htmlFor="file-upload" style={{
                position: 'absolute',
                top: '300px', // Adjusted position to be below the GUI panel
                right: '20px', // Keep aligned to the right
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