import { ProductInfo } from "./ProductInfo.tsx";
import { MugTypeSelection } from "@/features/mug-types/components/MugTypeSelection.tsx";
import { MugSizeSelection } from "@/features/mug-dimensions/components/MugSizeSelection.tsx";
import { Separator } from "./ui/separator.tsx";
import { MugColorSelection } from "@/features/mug-colors/components/MugColorSelection.tsx";
import { useAppStore } from "@/stores/appStore.ts";
import CupViewer from "./CupViewer.tsx";
import { MugMaterialSelection } from "@/features/mug-materials/components/MugMaterialSelection.tsx";
import { BuySection } from "./BuySection.tsx";
import { MugImageSelection } from "@/features/mug-image/components/MugImageSelection.tsx";

export const Configurator = () => {
  //
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  // Image
  // Text
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);

  return (
    <div className="grid h-full grid-cols-5 gap-6">
      <div className="col-span-2">
        <CupViewer
          selectedMugColor={selectedMugColor}
          selectedMugMaterial={selectedMugMaterial}
          selectedMugSize={selectedMugSize}
          selectedMugType={selectedMugType}
        />
      </div>
      <div className="col-span-3 flex max-h-full flex-1 flex-col gap-2">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <ProductInfo />
        </div>
        <div className="flex h-full flex-col gap-4 rounded-lg bg-white p-4 shadow-sm">
          <MugTypeSelection />
          <Separator className="bg-[#D3C3B8]" />
          <MugSizeSelection />
          <Separator className="bg-[#D3C3B8]" />
          <MugColorSelection />
          <Separator className="bg-[#D3C3B8]" />
          <MugImageSelection />
          <Separator className="bg-[#D3C3B8]" />
          <MugMaterialSelection />
        </div>
        <div className="rounded-lg bg-[#C8B6A6] p-4 shadow-sm">
          <BuySection />
        </div>
      </div>
    </div>
  );
};
