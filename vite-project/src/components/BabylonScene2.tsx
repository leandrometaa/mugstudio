import React, { useEffect, useRef } from "react";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import "@babylonjs/loaders/glTF";
import * as GUI from "@babylonjs/gui";
import { Color3 } from "babylonjs";


const CupViewer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    // Camera
    const camera = new ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 3,
      5,
      Vector3.Zero(),
      scene
    );
    camera.attachControl(canvasRef.current, true);

    // Luce
    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Materiali
    const cupMaterial = new StandardMaterial("cupMaterial", scene);
    cupMaterial.diffuseColor = Color3.White();

    const handleMaterial = new StandardMaterial("handleMaterial", scene);
    handleMaterial.diffuseColor = Color3.FromHexString("#ff0000");

    const baseMaterial = new StandardMaterial("baseMaterial", scene);
    baseMaterial.diffuseColor = Color3.FromHexString("#00ff00");
    const cylinderMaterial = new StandardMaterial("cylinderMaterial", scene);
    cylinderMaterial.diffuseColor = Color3.FromHexString("#0000ff");

    // Caricamento modello
    SceneLoader.ImportMesh(null, "/models/", "cup2.glb", scene, (meshes) => {
      meshes.forEach((mesh) => {
        const name = mesh.name;

        if (name.includes("manico")) {
          mesh.material = handleMaterial;
        } else if (name.includes("base")) {
          mesh.material = baseMaterial;
        } else if (name.includes("Cylinder")) {
          mesh.material = cylinderMaterial;
        } else {
          mesh.material = cupMaterial;
        }
      });

      console.log(
        "Meshes:",
        meshes.map((m) => m.name)
      );
    });

    // GUI BabylonJS
    const ui = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    const makeButton = (
      label: string,
      onClick: () => void,
      topOffset: string
    ) => {
      const button = GUI.Button.CreateSimpleButton(label, label);
      button.width = "220px";
      button.height = "50px";
      button.color = "white";
      button.background = "purple";
      button.cornerRadius = 10;
      button.top = topOffset;
      button.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
      button.onPointerClickObservable.add(onClick);
      ui.addControl(button);
    };

    makeButton(
      "Cambia colore manico",
      () => {
        handleMaterial.diffuseColor = Color3.Random();
      },
      "-20px"
    );

    makeButton(
      "Cambia colore base",
      () => {
        baseMaterial.diffuseColor = Color3.Random();
      },
      "-80px"
    );
    makeButton(
      "Cambia colore cilindro",
      () => {
        cylinderMaterial.diffuseColor = Color3.Random();
      },
      "-140px"
    );

    // Loop rendering
    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    return () => {
      engine.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100vh", display: "block" }}
    />
  );
};

export default CupViewer;
