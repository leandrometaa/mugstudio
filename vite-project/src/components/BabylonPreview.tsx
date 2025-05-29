import { useBabylonStore } from "@/stores/babylonStore.ts";
import type {
  MugColor,
  MugMaterial,
  MugSize,
  MugTexture,
  MugType,
} from "@/types/types.ts";
import {
  AbstractMesh,
  ArcRotateCamera,
  Color3,
  Color4,
  Engine,
  HemisphericLight,
  ImportMeshAsync,
  Scene,
  Texture,
  Vector3,
} from "@babylonjs/core";
import { PBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import "@babylonjs/loaders/glTF";
import { useEffect, useRef } from "react";

interface BabylonPreviewProps {
  selectedMugType: MugType | null;
  selectedMugSize: MugSize | null;
  selectedMugColor: MugColor | null;
  selectedMugMaterial: MugMaterial | null;
  selectedMugTexture: MugTexture | null;
  selectedMugImage: string | null;
}

export const BabylonPreview = ({
  selectedMugType,
  selectedMugSize,
  selectedMugColor,
  selectedMugMaterial,
  selectedMugTexture,
  selectedMugImage,
}: BabylonPreviewProps) => {
  //
  const setCamera = useBabylonStore((state) => state.setCamera);
  const setScene = useBabylonStore((state) => state.setScene);
  const setEngine = useBabylonStore((state) => state.setEngine);

  //
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const isMouseOverCanvasRef = useRef<boolean>(false);
  //
  const engineRef = useRef<Engine | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  const scene = sceneRef.current;
  //
  const meshesRef = useRef<AbstractMesh[] | null>(null);
  const meshes = meshesRef.current;
  const materialRef = useRef<PBRMaterial | null>(null);
  const material = materialRef.current;
  //
  const normalizationScaleRef = useRef(1);

  // Inizializzazione scena
  useEffect(() => {
    if (!canvas) return;

    const engine = new Engine(canvasRef.current, true, {
      antialias: true,
      stencil: true,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance",
    });

    engineRef.current = engine;
    // Zustand
    setEngine(engine);

    const scene = new Scene(engine);
    sceneRef.current = scene;
    // Zustand
    setScene(scene);
    scene.clearColor = new Color4(0.95, 0.95, 0.95, 1);

    const camera = new ArcRotateCamera(
      "camera",
      0,
      Math.PI / 3,
      10,
      Vector3.Zero(),
      scene,
    );

    // Zustand
    setCamera(camera);

    camera.attachControl(canvasRef.current, true);
    camera.lowerRadiusLimit = 8;
    camera.upperRadiusLimit = 8;

    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    const light2 = new HemisphericLight("light2", new Vector3(0, -1, 0), scene);
    const light3 = new HemisphericLight("light3", new Vector3(10, 0, 0), scene);
    const light4 = new HemisphericLight(
      "light4",
      new Vector3(-10, 0, 0),
      scene,
    );
    light4.intensity = 0.3;
    light3.intensity = 0.3;
    light2.intensity = 0.5;

    const mat = new PBRMaterial("mugPBRMat", sceneRef.current);
    materialRef.current = mat;

    engine.runRenderLoop(() => {
      scene.render();
    });

    const handleResize = () => engine.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      engine.dispose();
    };
  }, [canvas, setCamera, setEngine, setScene]);

  // Cambio tipo di tazza
  useEffect(() => {
    if (!scene || !selectedMugType) return;

    if (meshesRef.current && meshesRef.current.length > 0) {
      const rootMesh = meshesRef.current[0].parent ?? meshesRef.current[0];
      rootMesh.dispose(false, true); // dispose all descendants
      meshesRef.current = null;
    }

    const loadModel = async () => {
      try {
        const result = await ImportMeshAsync(
          `models/${selectedMugType.fileName}.glb`,
          scene,
        );

        const meshes = result.meshes.filter((m) => m != null);
        if (meshes.length === 0) return;

        // Imposta lo stesso materiale a tutte le mesh
        meshes.forEach((mesh) => {
          mesh.material = materialRef.current;
        });

        if (meshes.length > 0) {
          const boundingInfo = meshes[0].getHierarchyBoundingVectors();
          const center = boundingInfo.min.add(boundingInfo.max).scale(0.5);

          const mainMesh = meshes[0];
          if (mainMesh) {
            mainMesh.position.subtractInPlace(center);
            mainMesh.rotation.y = Math.PI;
          }

          const scale = selectedMugSize ? selectedMugSize.scale : 1.0;

          const rootMesh = result.meshes.find((m) => !m.parent);
          if (rootMesh) {
            rootMesh.scaling = new Vector3(scale, scale, scale);
          }

          const radius =
            boundingInfo.max.subtract(boundingInfo.min).length() / 2;
          const camera = scene.activeCamera as ArcRotateCamera;
          camera.radius = radius * 3;
          camera.target = Vector3.Zero();
        }

        meshesRef.current = meshes;

        console.log(`Tipo selezionato: ${selectedMugType.fileName}`);
      } catch (error) {
        console.error("Errore durante il caricamento del modello:", error);
      }
    };

    console.log(
      "Before loading:",
      scene.meshes.map((m) => m.name),
    );
    loadModel();
    console.log(
      "After loading:",
      scene.meshes.map((m) => m.name),
    );
  }, [meshes, scene, selectedMugSize, selectedMugType]);

  // Cambio colore della tazza
  useEffect(() => {
    if (!material || !selectedMugColor) return;

    try {
      material.albedoColor = Color3.FromHexString(selectedMugColor.code);

      console.log(
        `Colore selezionato: ${selectedMugColor.name}`,
        selectedMugColor,
      ); // Debug
    } catch (error) {
      console.error("Errore durante il cambiamento del colore:", error);
    }
  }, [material, selectedMugColor]);

  // Cambio dimensione della tazza
  useEffect(() => {
    if (!meshes || !selectedMugSize) return;

    const base = normalizationScaleRef.current;
    const userScale = selectedMugSize.scale;
    const finalScale = base * userScale;

    try {
      meshes.forEach((mesh) => {
        mesh.scaling = new Vector3(finalScale, finalScale, finalScale);
      });

      console.log("Applico scala finale:", finalScale);
    } catch (error) {
      console.error("Errore durante la scala utente:", error);
    }
  }, [meshes, selectedMugSize]);

  // Cambio materiale della tazza
  useEffect(() => {
    if (!selectedMugMaterial || !scene || !material) return;

    try {
      material.alpha = selectedMugMaterial.alpha;
      material.metallic = selectedMugMaterial.metallic;
      material.roughness = selectedMugMaterial.roughness;
      material.indexOfRefraction = selectedMugMaterial.indexOfRefraction;

      if (selectedMugMaterial.transparencyMode === "opaque") {
        material.transparencyMode = PBRMaterial.PBRMATERIAL_OPAQUE;
      } else if (selectedMugMaterial.transparencyMode === "alphablend") {
        material.transparencyMode = PBRMaterial.PBRMATERIAL_ALPHABLEND;
      }

      if (meshes) {
        meshes.forEach((child) => {
          child.material = material;
        });
      }

      console.log(
        `Materiale selezionato: ${selectedMugMaterial.code}`,
        selectedMugMaterial,
      );
    } catch (error) {
      console.error("Errore durante il cambio del materiale:", error);
    }
  }, [material, meshes, scene, selectedMugMaterial]);

  // Cambio texture della tazza
  useEffect(() => {
    if (!scene || !material || !meshes) return;

    if (!selectedMugTexture) {
      material.albedoTexture = null;

      meshes.forEach((mesh) => {
        mesh.material = material;
      });

      console.log("Nessuna texture selezionata");
      return;
    }

    try {
      const texture = new Texture(
        `images/textures/${selectedMugTexture.fileName}.jpg`,
        scene,
      );
      texture.uScale = 1;
      texture.vScale = 1;
      texture.hasAlpha = false;

      material.albedoTexture = texture;

      meshes.forEach((mesh) => {
        mesh.material = material;
      });

      console.log(
        `Texture selezionata: ${selectedMugTexture.name}`,
        selectedMugTexture,
      );
    } catch (error) {
      console.error("Errore durante il caricamento della texture:", error);
    }
  }, [material, meshes, scene, selectedMugTexture]);

  // Inserimento immagine
  useEffect(() => {
    if (!scene || !material) return;

    if (!selectedMugImage) {
      material.albedoTexture = null;
      console.log("Nessuna immagine selezionata");
      return;
    }

    try {
      const texture = new Texture(
        selectedMugImage,
        scene,
        false,
        false,
        Texture.TRILINEAR_SAMPLINGMODE,
      );
      texture.uScale = 1;
      texture.vScale = 1;
      texture.hasAlpha = true;

      material.albedoTexture = texture;

      console.log("Immagine personalizzata applicata", selectedMugImage);
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error);
    }
  }, [material, scene, selectedMugImage]);

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
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("wheel", handleWheel, { passive: false });
  }

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full rounded-lg focus:outline focus:outline-[#C8B6A6]"
    ></canvas>
  );
};
