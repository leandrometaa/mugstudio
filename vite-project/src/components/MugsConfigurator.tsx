import { MugTypeSelection } from '@/features/mug-types/components/MugTypeSelection.tsx';
import { ProductInfo } from './ProductInfo.tsx';
import { MugColorSelection } from '@/features/mug-colors/components/MugColorSelection.tsx';
import { MugMaterialSelection } from '@/features/mug-materials/components/MugMaterialSelection.tsx';
import { BuySection } from './BuySection.tsx';
import { useAppStore } from '@/stores/store.ts';
import { MugSizeSelection } from '@/features/mug-size/components/MugSizeSelection.tsx';
import { BabylonPreview } from './BabylonPreview.tsx';

export const MugsConfigurator = () => {
  //
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);

  return (
    <div className="grid grid-cols-5 gap-4 h-[calc(100%-3.5rem)] overflow-y-auto">
      {/* Anteprima Babylon */}
      <div className="col-span-2 flex flex-col">
        <div className="shadow-sm h-full rounded-lg w-full">
          <BabylonPreview
            selectedMugType={selectedMugType}
            selectedMugSize={selectedMugSize}
            selectedMugColor={selectedMugColor}
            selectedMugMaterial={selectedMugMaterial}
          />
        </div>
      </div>
      {/* Configurazione tazza */}
      <div className="col-span-3 flex flex-col gap-2 overflow-y-auto">
        <div className="bg-[#FFFDF9] shadow-sm h-full rounded-lg flex flex-col gap-2 overflow-y-auto relative scrollbar-hidden">
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
            {/* Immagine */}
            {/* Materiale */}
            <MugMaterialSelection />
          </div>
        </div>
        <div className="bg-[#C8B6A6] p-2 shadow-sm rounded-lg">
          <BuySection />
        </div>
      </div>
    </div>
  );
};
