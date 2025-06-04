import React, { useEffect, useRef, useState } from "react";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { Material } from "@babylonjs/core/Materials/material";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import "@babylonjs/loaders/glTF";
import { Layer } from "@babylonjs/core";

interface CupViewerProps {
    selectedColor: string;
    selectedMaterial: string;
    selectedSize: string;
    selectedType: string;
    uploadedImage: string | null;
    imageSize: number;
    selectedTexture: string | null;
}

const CupViewer: React.FC<CupViewerProps> = ({
    selectedColor,
    selectedMaterial,
    selectedSize,
    selectedType,
    uploadedImage,
    imageSize,
    selectedTexture,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sceneRef = useRef<Scene | null>(null);
    const engineRef = useRef<Engine | null>(null);
    const cupMaterialRef = useRef<StandardMaterial | null>(null);
    const meshesRef = useRef<any[]>([]);
    const uploadedTextureRef = useRef<Texture | null>(null);
    const [borderAnimated, setBorderAnimated] = useState(false);

    // Mappa i colori dall'interfaccia ai valori esadecimali (più colori per maggiore varietà)
    const colorMap: { [key: string]: string } = {
        Bianco: "#FFFFFF",
        Nero: "#000000",
        Grigio: "#808080",
        Beige: "#F5F5DC",
        Rosso: "#DC143C",
        Blu: "#4169E1",
        Verde: "#228B22",
        Rosa: "#FF69B4",
        Azzurro: "#87CEEB",
        "Verde Chiaro": "#90EE90",
        Arancione: "#FF8C00",
        Viola: "#9370DB",
        Giallo: "#FFD700",
        Marrone: "#8B4513",
        Turchese: "#40E0D0",
    };

    // Mappa le dimensioni ai fattori di scala
    const sizeMap: { [key: string]: number } = {
        Piccola: 0.85,
        Media: 1,
        Grande: 1.25,
    };
    useEffect(() => {
        if (!canvasRef.current) return;

        const engine = new Engine(canvasRef.current, true, {
            antialias: true,
            stencil: true,
            preserveDrawingBuffer: false,
            powerPreference: "high-performance",
        });

        const scene = new Scene(engine);
        engineRef.current = engine;
        sceneRef.current = scene;

        // Imposta colore di sfondo
        scene.clearColor = new Color4(0.95, 0.95, 0.95, 1);

        // ✅ Aggiungi solo una volta il background
        const background = new Layer("bg", "images/sfondoBlur.jpg", scene, true);
        background.isBackground = true;
        background.texture!.level = 0;

        // Aggiungi camera e luci
        const camera = new ArcRotateCamera(
            "camera",
            0,
            Math.PI / 3,
            15,
            Vector3.Zero(),
            scene
        );
        camera.attachControl(canvasRef.current, true);
        camera.lowerRadiusLimit = 8;
        camera.upperRadiusLimit = 8;

        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;

        new HemisphericLight(
            "light2",
            new Vector3(0, -1, 0),
            scene
        ).intensity = 0.5;
        new HemisphericLight(
            "light3",
            new Vector3(10, 0, 0),
            scene
        ).intensity = 0.3;
        new HemisphericLight(
            "light4",
            new Vector3(-10, 0, 0),
            scene
        ).intensity = 0.3;

        engine.runRenderLoop(() => scene.render());

        const handleResize = () => engine.resize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            engine.dispose();
        };
    }, []);

    // Inizializzazione della scena e caricamento del modello
    useEffect(() => {
        const scene = sceneRef.current;
        if (!scene) return;

        // Rimuovi eventuali mesh precedenti
        meshesRef.current.forEach((mesh) => mesh.dispose());
        meshesRef.current = [];

        // Crea il nuovo materiale e carica il modello
        const hexColor = colorMap[selectedColor] || "#808080";
        const babylonColor = Color3.FromHexString(hexColor);
        const isShiny = selectedMaterial === "Lucido";

        const cupMaterial = new StandardMaterial("cup_material", scene);
        cupMaterial.diffuseColor = babylonColor;
        cupMaterial.specularColor = isShiny ? Color3.White() : Color3.Black();
        cupMaterial.specularPower = isShiny ? 64 : 1;
        cupMaterial.alphaMode = Material.MATERIAL_OPAQUE;
        cupMaterialRef.current = cupMaterial;

        SceneLoader.ImportMesh(
            "",
            "models/",
            `${selectedType}.glb`,
            scene,
            (meshes) => {
                meshesRef.current = meshes;

                const cupMesh = meshes.find((mesh) => mesh.name === "coffee_cup");
                if (cupMesh) {
                    cupMesh.material = cupMaterial;
                } else {
                    meshes.forEach((mesh) => (mesh.material = cupMaterial));
                }

                if (meshes.length > 0) {
                    const boundingInfo = meshes[0].getHierarchyBoundingVectors();
                    const center = boundingInfo.min.add(boundingInfo.max).scale(0.5);
                    const mainMesh = cupMesh || meshes[0];
                    if (mainMesh) {
                        mainMesh.position.subtractInPlace(center);
                        mainMesh.rotation.y = Math.PI;
                    }

                    const scale = sizeMap[selectedSize] || 1.0;
                    meshes.forEach((mesh) => {
                        if (mesh.parent === null) {
                            mesh.scaling = new Vector3(scale, scale, scale);
                        }
                    });

                    const radius =
                        boundingInfo.max.subtract(boundingInfo.min).length() / 2;
                    const camera = scene.activeCamera as ArcRotateCamera;
                    if (camera) {
                        camera.radius = radius * 3;
                        camera.target = Vector3.Zero();
                    }
                }
            },
            undefined,
            (error) => {
                console.error("Errore nel caricamento:", error);
            }
        );
    }, [selectedType, selectedColor, selectedMaterial]);

    // Aggiornamento del materiale quando cambiano colore o finitura
    useEffect(() => {
        const cupMaterial = cupMaterialRef.current;

        if (!cupMaterial) return;

        console.log(
            "Aggiornamento colore/materiale:",
            selectedColor,
            selectedMaterial
        );

        const hexColor = colorMap[selectedColor] || "#808080";
        const babylonColor = Color3.FromHexString(hexColor);
        const isShiny = selectedMaterial === "Lucido";

        console.log("Applicando colore:", hexColor, "Lucido:", isShiny);

        // Aggiorna il colore
        cupMaterial.diffuseColor = babylonColor;

        // Aggiorna la finitura esattamente come in BabylonScene3
        if (isShiny) {
            cupMaterial.specularPower = 64; // High specular
            cupMaterial.specularColor = Color3.White();
        } else {
            cupMaterial.specularPower = 1; // Low specular
            cupMaterial.specularColor = Color3.Black();
        }

        console.log("Materiale aggiornato:", {
            diffuseColor: babylonColor,
            specularPower: cupMaterial.specularPower,
            specularColor: cupMaterial.specularColor,
        });
    }, [selectedColor, selectedMaterial]);

    // Aggiornamento della scala quando cambia la dimensione
    useEffect(() => {
        const meshes = meshesRef.current;

        if (meshes.length === 0) return;

        console.log("Aggiornamento dimensione:", selectedSize);

        const scale = sizeMap[selectedSize] || 1.0;
        meshes.forEach((mesh) => {
            if (mesh.parent === null) {
                mesh.scaling = new Vector3(scale, scale, scale);
            }
        });
    }, [selectedSize]);

    // Effetto per il tipo di tazza (placeholder per futuro sviluppo)
    useEffect(() => {
        console.log(`Tipo di tazza selezionato: ${selectedType}`);

        setBorderAnimated(true);
        const timeout = setTimeout(() => setBorderAnimated(false), 300); // durata animazione 500ms

        return () => clearTimeout(timeout);
    }, [selectedType]);

    // Aggiornamento del materiale quando cambiano colore, finitura o immagine
    useEffect(() => {
        const scene = sceneRef.current;
        const cupMaterial = cupMaterialRef.current;

        if (!scene || !cupMaterial) return;

        console.log("[material update] attivato");

        updateCupMaterial(
            scene,
            cupMaterial,
            selectedColor,
            selectedMaterial,
            uploadedImage,
            selectedTexture,
            colorMap,
            uploadedTextureRef
        );
    }, [
        selectedColor,
        selectedMaterial,
        uploadedImage,
        imageSize,
        selectedTexture,
        selectedType,
    ]);

    // Funzione per aggiornare il materiale (gestisce sia colore che texture)
    const updateCupMaterial = (
        scene: Scene,
        material: StandardMaterial | null,
        color: string,
        materialType: string,
        imageUrl: string | null,
        textureUrl: string | null,
        colorMap: { [key: string]: string },
        textureRef: React.MutableRefObject<Texture | null>
    ) => {
        if (!material) return;

        console.log("[updateCupMaterial] Aggiornamento materiale:", {
            color,
            materialType,
            imageUrl,
            imageSize,
            textureUrl,
        });

        // Rimuovi la texture precedente se presente
        if (textureRef.current) {
            textureRef.current.dispose();
            textureRef.current = null;
            material.diffuseTexture = null;
        }

        if (imageUrl) {
            // Se c'è un'immagine caricata, crea una texture
            const texture = new Texture(
                `/mugstudio/${imageUrl}`,
                scene,
                false,
                true,
                Texture.LINEAR_LINEAR_MIPLINEAR
            );
            texture.vScale = -imageSize;
            texture.uScale = imageSize;
            texture.wAng = -Math.PI;
            material.diffuseTexture = texture;
            material.diffuseColor = Color3.White();
            material.alphaMode = Material.MATERIAL_ALPHATEST;
            textureRef.current = texture;
            console.log(
                "[updateCupMaterial] Applicata texture da immagine con scala:",
                imageSize
            );
        } else if (textureUrl) {
            // Se è selezionata una texture predefinita
            const texture = new Texture(
                `/images/textures/${textureUrl}`,
                scene,
                false,
                true,
                Texture.LINEAR_LINEAR_MIPLINEAR
            );
            texture.vScale = -1;
            texture.uScale = 1;
            material.diffuseTexture = texture;
            material.diffuseColor = Color3.White();
            material.alphaMode = Material.MATERIAL_ALPHATEST;
            textureRef.current = texture;
            console.log(
                "[updateCupMaterial] Applicata texture predefinita:",
                textureUrl
            );
        } else {
            // Se non ci sono texture, applica il colore
            const hexColor = colorMap.hasOwnProperty(color) ? colorMap[color] : color;
            let babylonColor: Color3;
            try {
                babylonColor = Color3.FromHexString(hexColor);
            } catch (e) {
                console.error(
                    "[updateCupMaterial] Errore nella conversione del colore esadecimale:",
                    hexColor,
                    e
                );
                babylonColor = Color3.White();
            }

            const isShiny = materialType === "Lucido";
            material.diffuseColor = babylonColor;
            material.specularColor = isShiny ? Color3.White() : Color3.Black();
            material.specularPower = isShiny ? 64 : 1;
            material.alphaMode = Material.MATERIAL_OPAQUE;
        }

        material.markDirty(true);
    };

    // Cleanup per la texture caricata quando il componente si smonta
    useEffect(() => {
        return () => {
            if (uploadedTextureRef.current) {
                uploadedTextureRef.current.dispose();
                uploadedTextureRef.current = null;
                console.log("Cleanup: Texture caricata disposta.");
            }
        };
    }, []); // Esegue solo al mount/unmount

    return (
        <div
            className={`relative w-full h-full rounded-lg transition-all duration-500 ${borderAnimated ? "shadow-glow" : ""
                }`}
            style={{
                border: `2px solid ${borderAnimated ? "#D6A77A" : "#ccc"}`,
                transform: `scale(${borderAnimated ? 1.01 : 1})`,
            }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full rounded-lg"
                style={{
                    display: "block",
                    maxHeight: "600px",
                    backgroundColor: "transparent",
                }}
            />
        </div>
    );
};

export default CupViewer;
