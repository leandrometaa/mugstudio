import React, { useEffect, useRef } from "react";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { PBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import { Color3 } from "@babylonjs/core/Maths/math.color";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";


interface CupViewerProps {
    selectedColor: string;
    selectedMaterial: string;
    selectedSize: string;
    selectedType: string;
}

const CupViewer: React.FC<CupViewerProps> = ({
    selectedColor,
    selectedMaterial,
    selectedSize,
    selectedType,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sceneRef = useRef<Scene | null>(null);
    const engineRef = useRef<Engine | null>(null);
    const materialsRef = useRef<{
        handleMaterial: PBRMaterial | null;
        baseMaterial: PBRMaterial | null;
        cylinderMaterial: PBRMaterial | null;
    }>({
        handleMaterial: null,
        baseMaterial: null,
        cylinderMaterial: null,
    });
    const meshesRef = useRef<{
        cup: any;
        handle: any;
        base: any;
    }>({
        cup: null,
        handle: null,
        base: null,
    });

    // Mappa i colori dall'interfaccia ai valori esadecimali
    const colorMap: { [key: string]: string } = {
        'Bianco': '#FFFFFF',
        'Nero': '#000000',
        'Grigio': '#6B7280',
        'Beige': '#FEF3C7',
        'Rosso': '#EF4444',
        'Blu': '#2563EB',
        'Verde': '#16A34A',
        'Rosa': '#F9A8D4',
        'Azzurro': '#67E8F9',
        'Verde Chiaro': '#86EFAC'
    };

    // Mappa le dimensioni ai fattori di scala
    const sizeMap: { [key: string]: number } = {
        'Piccola': 0.7,
        'Media': 0.85,
        'Grande': 1.0
    };

    // Inizializzazione della scena
    useEffect(() => {
        if (!canvasRef.current) return;

        const engine = new Engine(canvasRef.current, true);
        const scene = new Scene(engine);
        engineRef.current = engine;
        sceneRef.current = scene;

        // Camera
        const camera = new ArcRotateCamera(
            "camera",
            Math.PI / 2,
            Math.PI / 3,
            8,
            Vector3.Zero(),
            scene
        );
        camera.lowerRadiusLimit = 6;
        camera.upperRadiusLimit = 12;
        camera.lowerBetaLimit = Math.PI / 6;
        camera.upperBetaLimit = Math.PI / 2;
        camera.attachControl(canvasRef.current, true);

        // Luce
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.8;

        // Creazione dei materiali PBR
        const handleMaterial = new PBRMaterial("handleMaterial", scene);
        const baseMaterial = new PBRMaterial("baseMaterial", scene);
        const cylinderMaterial = new PBRMaterial("cylinderMaterial", scene);

        // Configurazione base dei materiali
        [handleMaterial, baseMaterial, cylinderMaterial].forEach(material => {
            material.baseColor = Color3.White();
            material.metallicFactor = 0.0;
            material.roughnessFactor = 0.5;
        });

        materialsRef.current = {
            handleMaterial,
            baseMaterial,
            cylinderMaterial,
        };

        // Creazione delle geometrie semplici (invece di caricare il modello)
        // Corpo principale della tazza (cilindro)
        const cup = MeshBuilder.CreateCylinder("cup", {
            height: 3,
            diameterTop: 2.5,
            diameterBottom: 2,
            tessellation: 32
        }, scene);
        cup.position.y = 0;
        cup.material = cylinderMaterial;

        // Manico della tazza (toro)
        const handle = MeshBuilder.CreateTorus("handle", {
            diameter: 1.5,
            thickness: 0.2,
            tessellation: 16
        }, scene);
        handle.position.x = 1.8;
        handle.position.y = 0.5;
        handle.rotation.z = Math.PI / 2;
        handle.material = handleMaterial;

        // Base della tazza (cilindro piatto)
        const base = MeshBuilder.CreateCylinder("base", {
            height: 0.2,
            diameter: 2,
            tessellation: 32
        }, scene);
        base.position.y = -1.6;
        base.material = baseMaterial;

        meshesRef.current = { cup, handle, base };

        // Applica la scala iniziale
        const scale = sizeMap[selectedSize] || 1.0;
        [cup, handle, base].forEach(mesh => {
            mesh.scaling = new Vector3(scale, scale, scale);
        });

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
    }, []);

    // Aggiornamento dei materiali quando cambiano le props
    useEffect(() => {
        const { handleMaterial, baseMaterial, cylinderMaterial } = materialsRef.current;

        if (!handleMaterial || !baseMaterial || !cylinderMaterial) return;

        console.log("Aggiornamento colore:", selectedColor); // Debug

        const hexColor = colorMap[selectedColor] || '#FFFFFF';
        const babylonColor = Color3.FromHexString(hexColor);
        const isShiny = selectedMaterial === 'Lucido';

        console.log("Colore hex:", hexColor, "Babylon color:", babylonColor); // Debug

        // Configurazione del materiale del manico
        handleMaterial.baseColor = babylonColor.clone();
        handleMaterial.metallicFactor = isShiny ? 0.8 : 0.1;
        handleMaterial.roughnessFactor = isShiny ? 0.1 : 0.9;

        // Configurazione del materiale della base
        baseMaterial.baseColor = babylonColor.clone();
        baseMaterial.metallicFactor = isShiny ? 0.6 : 0.05;
        baseMaterial.roughnessFactor = isShiny ? 0.2 : 0.95;

        // Configurazione del materiale del corpo
        cylinderMaterial.baseColor = babylonColor.clone();
        cylinderMaterial.metallicFactor = isShiny ? 0.7 : 0.08;
        cylinderMaterial.roughnessFactor = isShiny ? 0.15 : 0.92;

        // Forza il refresh dei materiali
        handleMaterial.markDirty();
        baseMaterial.markDirty();
        cylinderMaterial.markDirty();

    }, [selectedColor, selectedMaterial]);

    // Aggiornamento della scala quando cambia la dimensione
    useEffect(() => {
        const { cup, handle, base } = meshesRef.current;

        if (!cup || !handle || !base) return;

        const scale = sizeMap[selectedSize] || 1.0;
        [cup, handle, base].forEach(mesh => {
            mesh.scaling = new Vector3(scale, scale, scale);
        });
    }, [selectedSize]);

    useEffect(() => {
        console.log(`Tipo di tazza cambiato a: ${selectedType}`);

        // Cambia la forma della tazza in base al tipo
        const { cup, handle, base } = meshesRef.current;
        if (!cup || !handle || !base || !sceneRef.current) return;

        // Rimuovi le mesh esistenti
        cup.dispose();
        handle.dispose();
        base.dispose();

        // Crea nuove forme in base al tipo selezionato
        let newCup, newHandle, newBase;
        const scene = sceneRef.current;
        const { handleMaterial, baseMaterial, cylinderMaterial } = materialsRef.current;
        const scale = sizeMap[selectedSize] || 1.0;

        switch (selectedType) {
            case 'Classica':
                // Forma classica - cilindro semplice
                newCup = MeshBuilder.CreateCylinder("cup", {
                    height: 3,
                    diameterTop: 2.5,
                    diameterBottom: 2,
                    tessellation: 32
                }, scene);
                newHandle = MeshBuilder.CreateTorus("handle", {
                    diameter: 1.5,
                    thickness: 0.2,
                    tessellation: 16
                }, scene);
                newHandle.position.x = 1.8;
                newHandle.position.y = 0.5;
                newHandle.rotation.z = Math.PI / 2;
                break;

            case 'Moderna':
                // Forma moderna - più squadrata
                newCup = MeshBuilder.CreateCylinder("cup", {
                    height: 2.8,
                    diameterTop: 2.8,
                    diameterBottom: 2.8,
                    tessellation: 8
                }, scene);
                newHandle = MeshBuilder.CreateBox("handle", {
                    width: 0.3,
                    height: 1.5,
                    depth: 0.3
                }, scene);
                newHandle.position.x = 1.7;
                newHandle.position.y = 0.3;
                break;

            case 'Vintage':
                // Forma vintage - più arrotondata
                newCup = MeshBuilder.CreateCylinder("cup", {
                    height: 3.2,
                    diameterTop: 2.2,
                    diameterBottom: 2.8,
                    tessellation: 32
                }, scene);
                newHandle = MeshBuilder.CreateTorus("handle", {
                    diameter: 1.2,
                    thickness: 0.25,
                    tessellation: 12
                }, scene);
                newHandle.position.x = 1.6;
                newHandle.position.y = 0.6;
                newHandle.rotation.z = Math.PI / 2;
                break;

            case 'Elegante':
                // Forma elegante - più alta e stretta
                newCup = MeshBuilder.CreateCylinder("cup", {
                    height: 3.5,
                    diameterTop: 2,
                    diameterBottom: 1.8,
                    tessellation: 32
                }, scene);
                newHandle = MeshBuilder.CreateTorus("handle", {
                    diameter: 1,
                    thickness: 0.15,
                    tessellation: 20
                }, scene);
                newHandle.position.x = 1.4;
                newHandle.position.y = 0.8;
                newHandle.rotation.z = Math.PI / 2;
                break;

            case 'Sportiva':
                // Forma sportiva - più robusta
                newCup = MeshBuilder.CreateCylinder("cup", {
                    height: 2.5,
                    diameterTop: 3,
                    diameterBottom: 2.5,
                    tessellation: 16
                }, scene);
                newHandle = MeshBuilder.CreateBox("handle", {
                    width: 0.4,
                    height: 1.2,
                    depth: 0.4
                }, scene);
                newHandle.position.x = 1.9;
                newHandle.position.y = 0.2;
                break;

            default:
                // Default alla classica
                newCup = MeshBuilder.CreateCylinder("cup", {
                    height: 3,
                    diameterTop: 2.5,
                    diameterBottom: 2,
                    tessellation: 32
                }, scene);
                newHandle = MeshBuilder.CreateTorus("handle", {
                    diameter: 1.5,
                    thickness: 0.2,
                    tessellation: 16
                }, scene);
                newHandle.position.x = 1.8;
                newHandle.position.y = 0.5;
                newHandle.rotation.z = Math.PI / 2;
        }

        // Base sempre uguale
        newBase = MeshBuilder.CreateCylinder("base", {
            height: 0.2,
            diameter: 2,
            tessellation: 32
        }, scene);
        newBase.position.y = -1.6;

        // Applica materiali
        newCup.material = cylinderMaterial;
        newHandle.material = handleMaterial;
        newBase.material = baseMaterial;

        // Applica scala
        [newCup, newHandle, newBase].forEach(mesh => {
            mesh.scaling = new Vector3(scale, scale, scale);
        });

        // Aggiorna i riferimenti
        meshesRef.current = {
            cup: newCup,
            handle: newHandle,
            base: newBase
        };
    }, [selectedType]);

    return (
        <div className="relative w-full h-full">
            <canvas
                ref={canvasRef}
                className="w-full h-full rounded-lg"
                style={{
                    display: 'block',
                    maxHeight: '400px',
                    backgroundColor: 'transparent'
                }}
            />
        </div>
    );
};

export default CupViewer;