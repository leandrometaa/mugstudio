import { MugTypeSelection } from "@/features/mug-types/components/MugTypeSelection.tsx";
import { ProductInfo } from "./ProductInfo.tsx";
import { MugColorSelection } from "@/features/mug-colors/components/MugColorSelection.tsx";
import { MugMaterialSelection } from "@/features/mug-materials/components/MugMaterialSelection.tsx";
import { BuySection } from "./BuySection.tsx";
import { useAppStore } from "@/stores/appStore.ts";
import { MugSizeSelection } from "@/features/mug-size/components/MugSizeSelection.tsx";
import { BabylonPreview } from "./BabylonPreview.tsx";
import { MugTextureSelection } from "@/features/mug-texture/components/MugTextureSelection.tsx";
import { MugImageSelection } from "@/features/mug-image/components/MugImageSelection.tsx";

export const MugsConfigurator = () => {
  //
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const selectedMugTexture = useAppStore((state) => state.selectedMugTexture);
  const selectedMugImage = useAppStore((state) => state.selectedMugImage);

  return (
    <div className="grid h-[calc(100%-3.5rem)] grid-cols-5 gap-4 overflow-y-auto">
      {/* Anteprima Babylon */}
      <div className="col-span-2 flex flex-col p-1">
        <div className="h-full w-full rounded-lg shadow-sm">
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
      <div className="col-span-3 flex flex-col gap-2 overflow-y-auto p-1">
        <div className="scrollbar-hidden relative flex h-full flex-col gap-2 overflow-y-auto rounded-lg bg-[#FFFDF9] shadow-sm">
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
        <div className="rounded-lg bg-[#C8B6A6] p-2 shadow-sm">
          <BuySection />
        </div>
      </div>
    </div>
  );
};
