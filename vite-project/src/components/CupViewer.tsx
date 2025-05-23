import React, { useEffect, useRef } from "react";
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

interface CupViewerProps {
    selectedColor: string;
    selectedMaterial: string;
    selectedSize: string;
    selectedType: string;
    uploadedImage: string | null;
    customText: string;
}

const CupViewer: React.FC<CupViewerProps> = ({
    selectedColor,
    selectedMaterial,
    selectedSize,
    selectedType,
    uploadedImage,
    customText,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sceneRef = useRef<Scene | null>(null);
    const engineRef = useRef<Engine | null>(null);
    const cupMaterialRef = useRef<StandardMaterial | null>(null);
    const meshesRef = useRef<any[]>([]);
    const isMouseOverCanvasRef = useRef<boolean>(false);
    const uploadedTextureRef = useRef<Texture | null>(null);

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

    // Inizializzazione della scena e caricamento del modello
    useEffect(() => {
        if (!canvasRef.current) return;

        // Configurazione engine con antialiasing migliorato
        const engine = new Engine(canvasRef.current, true, {
            antialias: true,
            stencil: true,
            preserveDrawingBuffer: false,
            powerPreference: "high-performance",
        });

        const scene = new Scene(engine);
        engineRef.current = engine;
        sceneRef.current = scene;

        // AGGIUNTA SFONDO CHIARO - Opzione 1: Colore di clear semplice
        scene.clearColor = new Color4(0.95, 0.95, 0.95, 1); // Grigio molto chiaro

        // OPZIONE ALTERNATIVA 2: Sfondo bianco puro
        // scene.clearColor = new Color3(1, 1, 1); // Bianco puro

        // OPZIONE ALTERNATIVA 3: Sfondo con leggera sfumatura azzurra (sky-like)
        // scene.clearColor = new Color3(0.9, 0.95, 1.0); // Azzurro molto tenue

        // Camera con impostazioni simili a BabylonScene3
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

        // Illuminazione identica a BabylonScene3
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7; // Stesso valore di BabylonScene3

        // Creazione del materiale StandardMaterial (come BabylonScene3)
        const cupMaterial = new StandardMaterial("cup_material", scene);

        // Configurazione iniziale del materiale
        const hexColor = colorMap[selectedColor] || "#808080";
        const babylonColor = Color3.FromHexString(hexColor);
        const isShiny = selectedMaterial === "Lucido";

        cupMaterial.diffuseColor = babylonColor;
        cupMaterial.specularColor = Color3.White();
        cupMaterial.alphaMode = Material.MATERIAL_OPAQUE;

        // Configurazione lucido/opaco come in BabylonScene3
        if (isShiny) {
            cupMaterial.specularPower = 64; // High specular
            cupMaterial.specularColor = Color3.White();
        } else {
            cupMaterial.specularPower = 1; // Low specular
            cupMaterial.specularColor = Color3.Black();
        }

        cupMaterialRef.current = cupMaterial;

        console.log("Materiale Standard creato:", {
            diffuseColor: babylonColor,
            specularPower: cupMaterial.specularPower,
            isShiny,
        });

        // Carica il modello GLB
        SceneLoader.ImportMesh(
            "",
            "/models/",
            `${selectedType}.glb`,
            scene,
            (meshes) => {
                console.log(
                    "Modello caricato, meshes:",
                    meshes.map((m) => m.name)
                );
                meshesRef.current = meshes;

                // Applica il materiale come in BabylonScene3
                const cupMesh = meshes.find((mesh) => mesh.name === "coffee_cup");
                if (cupMesh) {
                    cupMesh.material = cupMaterial;
                    console.log("Materiale applicato al mesh principale");
                } else {
                    // Fallback: applica a tutti i mesh
                    meshes.forEach((mesh) => {
                        if (mesh.material) {
                            mesh.material = cupMaterial;
                        }
                    });
                }

                // Centra il modello (logica identica a BabylonScene3)
                if (meshes.length > 0) {
                    const boundingInfo = meshes[0].getHierarchyBoundingVectors();
                    const center = boundingInfo.min.add(boundingInfo.max).scale(0.5);

                    // Trova il mesh principale per centrare
                    const mainMesh = cupMesh || meshes[0];
                    if (mainMesh) {
                        mainMesh.position.subtractInPlace(center);
                        mainMesh.rotation.y = Math.PI; // Stessa rotazione di BabylonScene3
                    }

                    // Applica la scala iniziale
                    const scale = sizeMap[selectedSize] || 1.0;
                    meshes.forEach((mesh) => {
                        if (mesh.parent === null) {
                            mesh.scaling = new Vector3(scale, scale, scale);
                        }
                    });

                    // Camera adjustment come in BabylonScene3
                    const radius =
                        boundingInfo.max.subtract(boundingInfo.min).length() / 2;
                    camera.radius = radius * 3;
                    camera.target = Vector3.Zero();
                }

                console.log(
                    "Modello tazza caricato e configurato con StandardMaterial."
                );
            },
            (progress) => {
                console.log("Caricamento in corso...", progress);
            },
            (error) => {
                console.error("Errore nel caricamento del modello:", error);
                // Mostra un messaggio di errore all'utente
                alert(`Errore nel caricamento del modello ${selectedType}.glb. Verifica che il file esista nella cartella public/models/`);
            }
        );

        // Loop di rendering
        engine.runRenderLoop(() => {
            scene.render();
        });

        // Gestione del ridimensionamento
        const handleResize = () => engine.resize();
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            engine.dispose();
        };
    }, [selectedType]);
    const canvas = canvasRef.current;

    const handleMouseEnter = () => {
        isMouseOverCanvasRef.current = true;
    };

    const handleMouseLeave = () => {
        isMouseOverCanvasRef.current = false;
    };

    const handleWheel = (event: WheelEvent) => {
        if (isMouseOverCanvasRef.current) {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    if (canvas) {
        canvas.addEventListener('mouseenter', handleMouseEnter);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('wheel', handleWheel, { passive: false });
    }

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
        // Qui potresti caricare modelli diversi in base al tipo
        // Per ora manteniamo il modello fisso tazza_1.glb
    }, [selectedType]);

    // Aggiornamento del materiale quando cambiano colore, finitura o immagine
    useEffect(() => {
        const scene = sceneRef.current;
        const cupMaterial = cupMaterialRef.current;

        if (!scene || !cupMaterial) return;

        console.log("useEffect [color, material, image] attivato");

        updateCupMaterial(scene, cupMaterial, selectedColor, selectedMaterial, uploadedImage, colorMap, uploadedTextureRef);
    }, [selectedColor, selectedMaterial, uploadedImage, sceneRef.current, cupMaterialRef.current]);

    // Funzione per aggiornare il materiale (gestisce sia colore che texture)
    const updateCupMaterial = (scene: Scene, material: StandardMaterial | null, color: string, materialType: string, imageUrl: string | null, colorMap: { [key: string]: string }, textureRef: React.MutableRefObject<Texture | null>) => {
        if (!material) return;

        console.log("[updateCupMaterial] Aggiornamento materiale:", { color, materialType, imageUrl });

        // Rimuovi la texture precedente se presente
        if (textureRef.current) {
            textureRef.current.dispose();
            textureRef.current = null;
            material.diffuseTexture = null;
            console.log("[updateCupMaterial] Texture precedente rimossa.");
        }

        if (imageUrl) {
            // Se c'è un'immagine caricata, crea una texture
            const texture = new Texture(imageUrl, scene, false, true, Texture.LINEAR_LINEAR_MIPLINEAR);
            texture.vScale = -1; // Specchia verticalmente se necessario
            material.diffuseTexture = texture;
            material.diffuseColor = Color3.White(); // Imposta il colore base a bianco quando usi una texture
            material.alphaMode = Material.MATERIAL_ALPHATEST; // O ALPHABLEND a seconda della texture
            textureRef.current = texture;
            console.log("[updateCupMaterial] Applicata texture da immagine.");

        } else {
            // Se non c'è immagine, applica il colore e la finitura selezionati
            const hexColor = colorMap.hasOwnProperty(color) ? colorMap[color] : color;
            let babylonColor: Color3;
            try {
                babylonColor = Color3.FromHexString(hexColor);
            } catch (e) {
                console.error("[updateCupMaterial] Errore nella conversione del colore esadecimale:", hexColor, e);
                babylonColor = Color3.White(); // Fallback a bianco
            }

            const isShiny = materialType === "Lucido";
            material.diffuseColor = babylonColor;
            material.specularColor = isShiny ? Color3.White() : Color3.Black();
            material.specularPower = isShiny ? 64 : 1;
            material.alphaMode = Material.MATERIAL_OPAQUE; // Torna opaco se non c'è texture
            console.log("[updateCupMaterial] Applicato colore e finitura Standard.");
        }

        // Forza l'aggiornamento del materiale
        material.markDirty(true); // Passa true per forzare l'aggiornamento completo
        console.log("[updateCupMaterial] Materiale marcato come dirty.");
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
        <div className="relative w-full h-full border-2 rounded-lg">
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