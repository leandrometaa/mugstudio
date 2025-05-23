import type {
  MugColor,
  MugDimension,
  MugMaterial,
  MugType,
} from '@/types/types.ts';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Engine } from '@babylonjs/core/Engines/engine';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import { Material } from '@babylonjs/core/Materials/material';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Scene } from '@babylonjs/core/scene';
import '@babylonjs/loaders/glTF';
import React, { useEffect, useRef } from 'react';

interface CupViewerProps {
  selectedMugColor: MugColor | null;
  selectedMugMaterial: MugMaterial | null;
  selectedMugDimension: MugDimension | null;
  selectedMugType: MugType | null;
}

const CupViewer: React.FC<CupViewerProps> = ({
  selectedMugColor,
  selectedMugMaterial,
  selectedMugDimension,
  selectedMugType,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const cupMaterialRef = useRef<StandardMaterial | null>(null);
  const meshesRef = useRef<any[]>([]);

  // Mappa i colori dall'interfaccia ai valori esadecimali (più colori per maggiore varietà)
  const colorMap: { [key: string]: string } = {
    'Bianco': '#FFFFFF',
    'Nero': '#000000',
    'Grigio': '#808080',
    'Beige': '#F5F5DC',
    'Rosso': '#DC143C',
    'Blu': '#4169E1',
    'Verde': '#228B22',
    'Rosa': '#FF69B4',
    'Azzurro': '#87CEEB',
    'Verde Chiaro': '#90EE90',
    'Arancione': '#FF8C00',
    'Viola': '#9370DB',
    'Giallo': '#FFD700',
    'Marrone': '#8B4513',
    'Turchese': '#40E0D0',
  };

  // Mappa le dimensioni ai fattori di scala
  const sizeMap: { [key: string]: number } = {
    Piccola: 0.7,
    Media: 0.85,
    Grande: 1.0,
  };

  // Inizializzazione della scena e caricamento del modello
  useEffect(() => {
    if (!canvasRef.current) return;

    // Configurazione engine con antialiasing migliorato
    const engine = new Engine(canvasRef.current, true, {
      antialias: true,
      stencil: true,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
    });

    const scene = new Scene(engine);
    scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
    engineRef.current = engine;
    sceneRef.current = scene;

    // Camera con impostazioni simili a BabylonScene3
    const camera = new ArcRotateCamera(
      'camera',
      0,
      Math.PI / 3,
      10,
      Vector3.Zero(),
      scene,
    );
    camera.attachControl(canvasRef.current, true);
    camera.lowerBetaLimit = 0;
    camera.upperBetaLimit = Math.PI / 2;
    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 30;

    // Illuminazione identica a BabylonScene3
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
    light.intensity = 0.7; // Stesso valore di BabylonScene3

    // Creazione del materiale StandardMaterial (come BabylonScene3)
    const cupMaterial = new StandardMaterial('cup_material', scene);

    // Configurazione iniziale del materiale
    const hexColor = selectedMugColor?.code || '#808080';
    const babylonColor = Color3.FromHexString(hexColor);
    const isShiny = selectedMugMaterial?.code === 'glossy';

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

    console.log('Materiale Standard creato:', {
      diffuseColor: babylonColor,
      specularPower: cupMaterial.specularPower,
      isShiny,
    });

    // Carica il modello GLB
    SceneLoader.ImportMesh(
      '',
      '/models/',
      `${selectedMugType?.model}.glb`,
      scene,
      (meshes) => {
        console.log(
          'Modello caricato, meshes:',
          meshes.map((m) => m.name),
        );
        meshesRef.current = meshes;

        // Applica il materiale come in BabylonScene3
        const cupMesh = meshes.find((mesh) => mesh.name === 'coffee_cup');
        if (cupMesh) {
          cupMesh.material = cupMaterial;
          console.log('Materiale applicato al mesh principale');
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
          const scale = selectedMugDimension?.scale || 1.0;
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
          'Modello tazza caricato e configurato con StandardMaterial.',
        );
      },
      (progress) => {
        console.log('Caricamento in corso...', progress);
      },
      (error) => {
        console.error('Errore nel caricamento del modello:', error);
      },
    );

    // Loop di rendering
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Gestione del ridimensionamento
    const handleResize = () => engine.resize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      engine.dispose();
    };
  }, [
    selectedMugColor?.code,
    selectedMugDimension?.scale,
    selectedMugMaterial?.code,
    selectedMugType,
  ]);

  // Aggiornamento del materiale quando cambiano colore o finitura
  useEffect(() => {
    const cupMaterial = cupMaterialRef.current;

    if (!cupMaterial) return;

    console.log(
      'Aggiornamento colore/materiale:',
      selectedMugColor,
      selectedMugMaterial,
    );

    const hexColor = selectedMugColor?.code || '#808080';
    const babylonColor = Color3.FromHexString(hexColor);
    const isShiny = selectedMugMaterial?.code === 'glossy';

    console.log('Applicando colore:', hexColor, 'Lucido:', isShiny);

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

    console.log('Materiale aggiornato:', {
      diffuseColor: babylonColor,
      specularPower: cupMaterial.specularPower,
      specularColor: cupMaterial.specularColor,
    });
  }, [selectedMugColor, selectedMugMaterial]);

  // Aggiornamento della scala quando cambia la dimensione
  useEffect(() => {
    const meshes = meshesRef.current;

    if (meshes.length === 0) return;

    console.log('Aggiornamento dimensione:', selectedMugDimension);

    const scale = selectedMugDimension?.scale || 1.0;
    meshes.forEach((mesh) => {
      if (mesh.parent === null) {
        mesh.scaling = new Vector3(scale, scale, scale);
      }
    });
  }, [selectedMugDimension]);

  // Effetto per il tipo di tazza (placeholder per futuro sviluppo)
  useEffect(() => {
    console.log(`Tipo di tazza selezionato: ${selectedMugType}`);
    // Qui potresti caricare modelli diversi in base al tipo
    // Per ora manteniamo il modello fisso tazza_1.glb
  }, [selectedMugType]);

  return (
    <div className="aspect-square ">
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-lg shadow-sm"
      />
    </div>
  );
};

export default CupViewer;
