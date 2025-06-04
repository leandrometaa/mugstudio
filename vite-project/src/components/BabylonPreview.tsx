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
  Layer,
  Scene,
  Texture,
  Vector3,
} from "@babylonjs/core";
import { PBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import "@babylonjs/loaders/glTF";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

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
  // Ottiene i dettagli dell'anteprima dallo store Zustand.
  const setCamera = useBabylonStore((state) => state.setCamera);
  const setScene = useBabylonStore((state) => state.setScene);
  const setEngine = useBabylonStore((state) => state.setEngine);

  // Impostazione dei Ref e degli State del canvas.
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const isMouseOverCanvasRef = useRef<boolean>(false);
  const [borderAnimated, setBorderAnimated] = useState(false);
  // Impostazione dei Ref di Babylon.
  const engineRef = useRef<Engine | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  const scene = sceneRef.current;
  const meshesRef = useRef<AbstractMesh[] | null>(null);
  const meshes = meshesRef.current;
  const materialRef = useRef<PBRMaterial | null>(null);
  const material = materialRef.current;
  const normalizationScaleRef = useRef(1);

  // Inizializzazione scena
  useEffect(() => {
    if (!canvas) return;

    // Creazione engine.
    const engine = new Engine(canvasRef.current, true, {
      antialias: true,
      stencil: true,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance",
    });

    engineRef.current = engine;
    setEngine(engine);

    // Creazione scena.
    const scene = new Scene(engine);
    sceneRef.current = scene;
    setScene(scene);

    // Colore sfondo della scena.
    scene.clearColor = new Color4(0.95, 0.95, 0.95, 1);

    // Immagine di sfondo della scena.
    const background = new Layer("bg", "images/sfondoBlur.jpg", scene, true);
    background.isBackground = true;
    background.texture!.level = 0;

    // Creazione camera.
    const camera = new ArcRotateCamera(
      "camera",
      0,
      Math.PI / 3,
      15,
      Vector3.Zero(),
      scene,
    );

    setCamera(camera);

    // Impostazioni camera.
    camera.attachControl(canvasRef.current, true);
    camera.lowerRadiusLimit = 8;
    camera.upperRadiusLimit = 8;
    camera.lowerBetaLimit = 0.01;

    // Creazione luci.
    new HemisphericLight("light", new Vector3(0, 1, 0), scene).intensity = 0.7;
    new HemisphericLight("light2", new Vector3(0, -1, 0), scene).intensity =
      0.5;
    new HemisphericLight("light3", new Vector3(10, 0, 0), scene).intensity =
      0.3;
    new HemisphericLight("light4", new Vector3(-10, 0, 0), scene).intensity =
      0.3;

    // Creazione materiale.
    const mat = new PBRMaterial("mugPBRMat", sceneRef.current);
    materialRef.current = mat;

    // Re-render della scena.
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Ridimensionamento della scena.
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

    // Elimina dalla scena un modello.
    // Se meshRef.current esiste e non è un array vuoto...
    if (meshesRef.current && meshesRef.current.length > 0) {
      // Ottiene il mesh 'root'.
      const rootMesh = meshesRef.current[0].parent ?? meshesRef.current[0];
      // Elimina il mesh e tutti i suoi figli.
      rootMesh.dispose(false, true);
      // Invalidazione della ref.
      meshesRef.current = null;
    }

    // Importazione asincrona di un modello .glb locale.
    const loadModel = async () => {
      try {
        const result = await ImportMeshAsync(
          `models/${selectedMugType.fileName}.glb`,
          scene,
        );

        // Filtra tutti i mesh importati per rimuovere eventuali mesh non validi.
        const meshes = result.meshes.filter((m) => m != null);
        if (meshes.length === 0) return;

        // Imposta lo stesso materiale a tutte le mesh.
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

        console.log(`Tipo selezionato: ${selectedMugType.fileName}`); // Debug

        setBorderAnimated(true);
        const timeout = setTimeout(() => setBorderAnimated(false), 300); // durata animazione 500ms

        return () => clearTimeout(timeout);
      } catch (error) {
        console.error("Errore durante il caricamento del modello:", error);
      }
    };

    loadModel();
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

      return;
    }

    try {
      const texture = new Texture(
        `${import.meta.env.BASE_URL}images/textures/${selectedMugTexture.fileName}.jpg`,
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

      console.log("Immagine personalizzata applicata", selectedMugImage); // Debug
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error); // Debug
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

  // Aggiunta degli EventListener al canvas.
  if (canvas) {
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("wheel", handleWheel, { passive: false });
  }

  return (
    <canvas
      ref={canvasRef}
      // className="h-full w-full rounded-lg focus:outline focus:outline-[#C8B6A6]"
      className={clsx(
        "relative h-full w-full rounded-lg border transition-all duration-500 focus:outline focus:outline-[#C8B6A6]",
        {
          "shadow-glow scale-101 border-[#D6A77A]": borderAnimated,
          "scale-100": !borderAnimated,
        },
      )}
    ></canvas>
  );
};
