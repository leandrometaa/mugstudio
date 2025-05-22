import React, { useEffect, useRef } from "react";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { PBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import "@babylonjs/loaders/glTF";
import { Color3 } from "babylonjs";

interface MaterialParams {
  metallic?: number;
  roughness?: number;
  albedoColor?: string;
}

interface CupViewerProps {
  handleMaterialParams?: MaterialParams;
  baseMaterialParams?: MaterialParams;
  cylinderMaterialParams?: MaterialParams;
}

const CupViewer: React.FC<CupViewerProps> = ({
  handleMaterialParams,
  baseMaterialParams,
  cylinderMaterialParams,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const materialsRef = useRef<{
    handleMaterial: PBRMaterial | null;
    baseMaterial: PBRMaterial | null;
    cylinderMaterial: PBRMaterial | null;
  }>({
    handleMaterial: null,
    baseMaterial: null,
    cylinderMaterial: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);
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
    camera.lowerRadiusLimit = camera.radius;
    camera.upperRadiusLimit = camera.radius;
    camera.attachControl(canvasRef.current, true);

    // Luce
    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Materiali PBR
    const handleMaterial = new PBRMaterial("handleMaterial", scene);
    const baseMaterial = new PBRMaterial("baseMaterial", scene);
    const cylinderMaterial = new PBRMaterial("cylinderMaterial", scene);

    materialsRef.current = {
      handleMaterial,
      baseMaterial,
      cylinderMaterial,
    };

    // Carica il modello e assegna i materiali
    SceneLoader.ImportMesh(null, "/models/", "cup2.glb", scene, (meshes) => {
      meshes.forEach((mesh) => {
        const name = mesh.name;
        if (name.includes("manico")) {
          mesh.material = handleMaterial;
        } else if (name.includes("base")) {
          mesh.material = baseMaterial;
        } else if (name.includes("Cylinder")) {
          mesh.material = cylinderMaterial;
        }
      });

      console.log("Meshes:", meshes.map((m) => m.name));
    });

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => engine.resize());
    return () => engine.dispose();
  }, []);

  // Aggiorna i parametri dei materiali quando cambiano i props
  useEffect(() => {
    const applyParams = (mat: PBRMaterial | null, params?: MaterialParams) => {
      if (!mat || !params) return;
      if (params.metallic !== undefined) mat.metallic = params.metallic;
      if (params.roughness !== undefined) mat.roughness = params.roughness;
      if (params.albedoColor)
        mat.albedoColor = Color3.FromHexString(params.albedoColor);
    };

    applyParams(materialsRef.current.handleMaterial, handleMaterialParams);
    applyParams(materialsRef.current.baseMaterial, baseMaterialParams);
    applyParams(materialsRef.current.cylinderMaterial, cylinderMaterialParams);
  }, [handleMaterialParams, baseMaterialParams, cylinderMaterialParams]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100vh", display: "block" }}
    />
  );
};

export default CupViewer;
