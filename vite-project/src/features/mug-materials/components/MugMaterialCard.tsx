import { useSelectedStore } from '@/store/store.ts';
import type { MugMaterial } from '@/types/types.ts';
import clsx from 'clsx';

interface MugMaterialCardProps {
  state: 'data' | 'pending';
  material?: MugMaterial;
}

export const MugMaterialCard = ({ state, material }: MugMaterialCardProps) => {
  const selectedMugMaterial = useSelectedStore(
    (state) => state.selectedMugMaterial,
  );
  const setSelectedMugMaterial = useSelectedStore(
    (state) => state.setSelectedMugMaterial,
  );
  const setPrice = useSelectedStore((state) => state.setPrice);

  if (state === 'data' && material) {
    //
    const isSelected = selectedMugMaterial === material;

    return (
      <div
        className={clsx(
          'aspect-5/1 bg-white rounded-lg items-center justify-center shadow-sm border flex flex-col cursor-pointer hover:bg-neutral-50',
          {
            'border-[#C8B6A6]': !isSelected,
            'border-[#4B2E2B]': isSelected,
          },
        )}
        onClick={() => {
          setSelectedMugMaterial(material);
          setPrice();
        }}
      >
        <span className="font-semibold">{material.name}</span>
      </div>
    );
  }

  if (state === 'pending') {
    return (
      <div className="bg-[#C8B6A6] aspect-5/1 rounded-lg animate-pulse justify-center shadow-sm flex-col flex gap-2"></div>
    );
  }
};
