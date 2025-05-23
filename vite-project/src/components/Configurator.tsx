import { Price } from './Price.tsx';
import { MugTypeSelection } from '../features/mug-types/components/MugTypeSelection.tsx';
import { MugDimensionSelection } from '@/features/mug-dimensions/components/MugDimensionSelection.tsx';
import { Separator } from './ui/separator.tsx';
import { MugColorSelection } from '@/features/mug-colors/components/MugColorSelection.tsx';
import { useSelectedStore } from '@/store/store.ts';
import CupViewer from './CupViewer.tsx';
import { MugMaterialSelection } from '@/features/mug-materials/components/MugMaterialSelection.tsx';
import { BuySection } from '@/features/buy-section/components/BuySection.tsx';

export const Configurator = () => {
  //
  const selectedMugType = useSelectedStore((state) => state.selectedMugType);
  const selectedMugDimension = useSelectedStore(
    (state) => state.selectedMugDimension,
  );
  const selectedMugColor = useSelectedStore((state) => state.selectedMugColor);
  // Image
  // Text
  const selectedMugMaterial = useSelectedStore(
    (state) => state.selectedMugMaterial,
  );

  return (
    <div className=" grid grid-cols-5 gap-6">
      <div className="col-span-2">
        <CupViewer
          selectedMugColor={selectedMugColor}
          selectedMugMaterial={selectedMugMaterial}
          selectedMugDimension={selectedMugDimension}
          selectedMugType={selectedMugType}
        />
      </div>
      <div className="col-span-3 flex flex-col gap-4 flex-1">
        <Price />
        <div className=" flex flex-col gap-4 h-full">
          <MugTypeSelection />
          <Separator className="bg-[#D3C3B8]" />
          <MugDimensionSelection />
          <Separator className="bg-[#D3C3B8]" />
          <MugColorSelection />
          <Separator className="bg-[#D3C3B8]" />
          <MugMaterialSelection />
          <Separator className="bg-[#D3C3B8]" />
          <BuySection />
        </div>
      </div>
    </div>
  );
};
