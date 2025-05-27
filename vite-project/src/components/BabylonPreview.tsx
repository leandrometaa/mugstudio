import type { MugColor, MugMaterial, MugSize, MugType } from '@/types/types.ts';
import {
  AbstractMesh,
  ArcRotateCamera,
  Color3,
  Color4,
  Engine,
  HemisphericLight,
  ImportMeshAsync,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Vector3,
} from '@babylonjs/core';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import '@babylonjs/loaders/glTF';
import { useEffect, useRef } from 'react';

interface BabylonPreviewProps {
  selectedMugType: MugType | null;
  selectedMugSize: MugSize | null;
  selectedMugColor: MugColor | null;
  selectedMugMaterial: MugMaterial | null;
}

export const BabylonPreview = ({
  selectedMugType,
  selectedMugSize,
  selectedMugColor,
  selectedMugMaterial,
}: BabylonPreviewProps) => {
  //
  const canvasRef = useRef<HTMLCanvasElement>(null);
  //
  const engineRef = useRef<Engine | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  //
  const meshRef = useRef<AbstractMesh | null>(null);
  const materialRef = useRef<PBRMaterial | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true, {
      antialias: true,
      stencil: true,
      preserveDrawingBuffer: false,
      powerPreference: 'high-performance',
    });

    engineRef.current = engine;

    const scene = new Scene(engine);
    sceneRef.current = scene;
    scene.clearColor = new Color4(0.95, 0.95, 0.95, 1);

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
    const light2 = new HemisphericLight('light2', new Vector3(0, -1, 0), scene);
    const light3 = new HemisphericLight('light3', new Vector3(10, 0, 0), scene);
    const light4 = new HemisphericLight(
      'light4',
      new Vector3(-10, 0, 0),
      scene,
    );
    light4.intensity = 0.3;
    light3.intensity = 0.3;
    light2.intensity = 0.5;

    const mat = new PBRMaterial('mugPBRMat', sceneRef.current);

    // Impostazioni in base al materiale selezionato
    mat.metallic = 0;
    mat.roughness = 1;
    materialRef.current = mat;

    // Create a circular table (a flat cylinder)
    const table = MeshBuilder.CreateCylinder(
      'table',
      {
        diameter: 10, // Width of the table
        height: 0.2, // Thin like a real table top
      },
      scene,
    );
    table.position.y = 0; // Push it below the mug (adjust as needed)

    // Give it a wooden-looking material
    const tableMaterial = new StandardMaterial('tableMaterial', scene);
    tableMaterial.diffuseColor = new Color3(0.4, 0.2, 0.1); // Brown color
    table.material = tableMaterial;

    engine.runRenderLoop(() => {
      scene.render();
    });

    const handleResize = () => engine.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      engine.dispose();
    };
  }, []);

  // Cambio tipo di tazza
  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene || !selectedMugType) return;

    // Remove previous mug mesh
    if (meshRef.current) {
      meshRef.current.dispose();
      meshRef.current = null;
    }

    const loadModel = async () => {
      try {
        if (!sceneRef.current) return;

        const result = await ImportMeshAsync(
          `models/${selectedMugType.model}.glb`,
          sceneRef.current!,
        );

        result.meshes.forEach((mesh) => {
          if (mesh) {
            mesh.material = materialRef.current;
          }
        });

        const rootMesh = result.meshes[0];
        rootMesh.position = Vector3.Zero();
        meshRef.current = rootMesh;

        console.log(
          `Tipo selezionato: ${selectedMugType.model}`,
          selectedMugType,
        ); // Debug
      } catch (error) {
        console.error('Errore durante il caricamento del modello:', error);
      }
    };

    loadModel();
  }, [selectedMugType]);

  // Cambio colore della tazza
  useEffect(() => {
    if (!materialRef.current || !selectedMugColor) return;

    try {
      materialRef.current.albedoColor = Color3.FromHexString(
        selectedMugColor.code,
      );

      console.log(
        `Colore selezionato: ${selectedMugColor.name}`,
        selectedMugColor,
      ); // Debug
    } catch (error) {
      console.error('Errore durante il cambiamento del colore:', error);
    }
  }, [selectedMugColor]);

  // Cambio dimensione della tazza
  useEffect(() => {
    if (!meshRef.current || !selectedMugSize) return;

    try {
      meshRef.current.scaling = new Vector3(
        selectedMugSize.scale,
        selectedMugSize.scale,
        selectedMugSize.scale,
      );

      console.log(
        `Dimensione selezionata: ${selectedMugSize.name}`,
        selectedMugSize,
      ); // Debug
    } catch (error) {
      console.error('Errore durante il cambiamento della dimensione:', error);
    }
  }, [selectedMugSize]);

  useEffect(() => {
    if (!selectedMugMaterial || !sceneRef.current || !materialRef.current)
      return;

    const mat = materialRef.current;

    try {
      switch (selectedMugMaterial.code) {
        case 'glossy':
          mat.roughness = 0.2;
          break;
        case 'matte':
          mat.roughness = 0.8;
          break;
        case 'glass':
          mat.transparencyMode = PBRMaterial.PBRMATERIAL_ALPHABLEND;
          mat.alpha = 0.2;
          mat.roughness = 0;
          mat.indexOfRefraction = 1.5;
          break;
        case 'steel':
          mat.metallic = 1;
          mat.roughness = 0.3;
          mat.albedoColor = new Color3(0.7, 0.7, 0.75);
          break;
        case 'plastic':
          mat.roughness = 0.6;
          break;
      }

      if (meshRef.current) {
        meshRef.current.getChildMeshes().forEach((child) => {
          child.material = mat;
        });
      }

      console.log(
        `Materiale selezionato: ${selectedMugMaterial.code}`,
        selectedMugMaterial,
      );
    } catch (error) {
      console.error('Errore durante il cambio del materiale:', error);
    }
  }, [selectedMugMaterial]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full rounded-lg"
    ></canvas>
  );
};
