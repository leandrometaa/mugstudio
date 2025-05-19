import { useEffect, useRef } from 'react';
import * as BABYLON from 'babylonjs';

interface BabylonSceneProps {
  selectedColor: string;
}

export default function BabylonScene({ selectedColor }: BabylonSceneProps) {
  const canvasRef = useRef(null);
  const boxRef = useRef<BABYLON.Mesh | null>(null);
  const sceneRef = useRef<BABYLON.Scene | null>(null);

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
      new BABYLON.Vector3(0, 0, 0),
      scene,
    );
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 1, 0),
      scene,
    );

    const box = BABYLON.MeshBuilder.CreateBox('box', {}, scene);
    const mat = new BABYLON.StandardMaterial('mat', scene);
    mat.diffuseColor = BABYLON.Color3.FromHexString(selectedColor);
    box.material = mat;
    boxRef.current = box;

    engine.runRenderLoop(() => scene.render());

    window.addEventListener('resize', () => engine.resize());

    return () => {
      engine.dispose();
    };
  }, [selectedColor]);

  useEffect(() => {
    if (boxRef.current) {
      const mat = boxRef.current.material;
      if (mat) {
        mat.diffuseColor = BABYLON.Color3.FromHexString(selectedColor);
      }
    }
  }, [selectedColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '400px' }}
    />
  );
}
