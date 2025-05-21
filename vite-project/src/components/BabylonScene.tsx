import { useEffect, useRef } from 'react';
import * as BABYLON from 'babylonjs';

interface BabylonSceneProps {
  mugBodyColor: string;
  mugBodyMaterial: string;
}

export default function BabylonScene({
  mugBodyColor,
  mugBodyMaterial,
}: BabylonSceneProps) {
  const canvasRef = useRef(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);

  const mugRef = useRef<BABYLON.Mesh | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    sceneRef.current = scene;

    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      Math.PI / 2,
      Math.PI / 2,
      5,
      new BABYLON.Vector3(0, 1.5, 0),
      scene,
    );
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 1, 0),
      scene,
    );

    const potShapeMug = [
      new BABYLON.Vector3(0, 0, 0),
      new BABYLON.Vector3(0.4, 0, 0),
      new BABYLON.Vector3(0.5, 1.1, 0),
      new BABYLON.Vector3(0.4, 1.1, 0.1),
      new BABYLON.Vector3(0.3, 0.1, 0.1),
      new BABYLON.Vector3(0, 0.1, 0.1),
    ];

    const cylinderShapeMug = [
      new BABYLON.Vector3(0, 0, 0),
      new BABYLON.Vector3(0.5, 0, 0),
      new BABYLON.Vector3(0.5, 1.1, 0),
      new BABYLON.Vector3(0.4, 1.1, 0.1),
      new BABYLON.Vector3(0.3, 0.1, 0.1),
      new BABYLON.Vector3(0, 0.1, 0.1),
    ];

    // const roundedShapeMug = [];

    const mug = BABYLON.MeshBuilder.CreateLathe(
      'mug',
      { shape: cylinderShapeMug, sideOrientation: BABYLON.Mesh.DOUBLESIDE },
      scene,
    );

    // Glossy material.
    const glossyMaterial = new BABYLON.PBRMaterial('glossyMat', scene);
    glossyMaterial.metallic = 0.0;
    glossyMaterial.roughness = 0.1;
    glossyMaterial.specularIntensity = 1.0;

    // Matte material
    const matteMaterial = new BABYLON.PBRMaterial('matteMat', scene);
    matteMaterial.metallic = 0.0;
    matteMaterial.roughness = 1.0;
    matteMaterial.specularIntensity = 0.2;

    let selectedMaterial;

    switch (mugBodyMaterial) {
      case 'glossy':
        selectedMaterial = glossyMaterial;
        break;
      case 'matte':
        selectedMaterial = matteMaterial;
        break;
    }

    selectedMaterial.albedoColor = BABYLON.Color3.FromHexString(mugBodyColor);

    mug.material = selectedMaterial;

    mugRef.current = mug;

    engine.runRenderLoop(() => scene.render());

    window.addEventListener('resize', () => engine.resize());

    return () => {
      engine.dispose();
    };
  }, [mugBodyColor, mugBodyMaterial]);

  // useEffect(() => {
  //   if (mugRef.current) {
  //     const mat = mugRef.current.material;
  //     if (mat && mat instanceof BABYLON.PBRMaterial) {
  //       mat.albedoColor = BABYLON.Color3.FromHexString(mugBodyColor);
  //     }
  //   }
  // }, [mugBodyColor]);

  return (
    <canvas
      ref={canvasRef}
      className="aspect-square shadow-sm rounded-xl"
    />
  );
}
