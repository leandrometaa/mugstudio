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
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const selectedMugTexture = useAppStore((state) => state.selectedMugTexture);
  const selectedMugImage = useAppStore((state) => state.selectedMugImage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-screen p-4 bg-[#fffdf9]">
      {/* Anteprima tazza */}
      <div className="col-span-1 md:col-span-5 flex flex-col">
        <div className="w-full max-h-[300px] md:max-h-full rounded-2xl shadow-md overflow-hidden">
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

      {/* Configuratore */}
      <div className="col-span-1 md:col-span-7 flex flex-col gap-4">
        {/* Card contenente configurazioni */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white shadow-md p-4">
          <ProductInfo />

          <MugTypeSelection />
          <MugSizeSelection />
          <MugColorSelection />
          {selectedMugType?.supportsImage && <MugTextureSelection />}
          {selectedMugType?.supportsTexture && <MugImageSelection />}
          <MugMaterialSelection />
        </div>

        {/* Sezione acquisto */}
        <div className="bg-[#C8B6A6] rounded-2xl shadow-md p-4">
          <BuySection />
        </div>
      </div>
    </div>
  );
};
