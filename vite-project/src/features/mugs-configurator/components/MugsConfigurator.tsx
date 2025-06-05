import { MugTypeSelection } from "@/features/mugs-configurator/components/mug-types/MugTypeSelection.tsx";
import { ProductInfo } from "./ProductInfo.tsx";
import { MugColorSelection } from "@/features/mugs-configurator/components/mug-colors/MugColorSelection.tsx";
import { MugMaterialSelection } from "@/features/mugs-configurator/components/mug-materials/MugMaterialSelection.tsx";
import { BuySection } from "./BuySection.tsx";
import { useAppStore } from "@/stores/appStore.ts";
import { MugSizeSelection } from "@/features/mugs-configurator/components/mug-size/MugSizeSelection.tsx";
import { BabylonPreview } from "../../../components/BabylonPreview.tsx";
import { MugTextureSelection } from "@/features/mugs-configurator/components/mug-textures/MugTextureSelection.tsx";
import { MugImageSelection } from "@/features/mugs-configurator/components/mug-image/MugImageSelection.tsx";

export const MugsConfigurator = () => {
  // Ottiene i dettagli della tazza dallo store Zustand.
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const selectedMugTexture = useAppStore((state) => state.selectedMugTexture);
  const selectedMugImage = useAppStore((state) => state.selectedMugImage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[calc(100%-3.5rem)] overflow-y-auto">
      {/* Anteprima Babylon */}
      <div className="col-span-1 md:col-span-5 flex flex-col p-1">
        <div className="h-full w-full rounded-md shadow-sm">
          <BabylonPreview
            selectedMugType={selectedMugType}
            selectedMugSize={selectedMugSize}
            selectedMugColor={selectedMugColor}
            selectedMugMaterial={selectedMugMaterial}
            selectedMugTexture={selectedMugTexture}
            selectedMugImage={selectedMugImage}
          />
        </div>
      </div>
      {/* Configurazione tazza */}
      <div className="col-span-1 md:col-span-7 flex flex-col gap-2 overflow-y-auto p-1">
        <div className="scrollbar-hidden relative flex h-full flex-col gap-2 overflow-y-auto rounded-md bg-[#FFFDF9] shadow-sm">
          {/* Info (nome prodotto e prezzo) */}
          <ProductInfo />
          <div className="flex flex-col gap-4 p-4 pt-0">
            {/* Tipo */}
            <MugTypeSelection />
            {/* Dimensione */}
            <MugSizeSelection />
            {/* Colore */}
            <MugColorSelection />
            {/* Texture */}
            {selectedMugType?.supportsImage && <MugTextureSelection />}
            {/* Immagine */}
            {selectedMugType?.supportsTexture && <MugImageSelection />}
            {/* Materiale */}
            <MugMaterialSelection />
          </div>
        </div>
        <div className="rounded-md bg-[#C8B6A6] p-2 shadow-sm">
          <BuySection />
        </div>
      </div>
    </div>
  );
};
