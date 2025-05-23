import { useSelectedStore } from '@/store/store.ts';
import type { MugDimension } from '@/types/types.ts';
import clsx from 'clsx';

interface MugDimensionCardProps {
  state: 'data' | 'pending';
  dimension?: MugDimension;
}

export const MugDimensionCard = ({
  state,
  dimension,
}: MugDimensionCardProps) => {
  const selectedMugDimension = useSelectedStore(
    (state) => state.selectedMugDimension,
  );
  const setSelectedMugDimension = useSelectedStore(
    (state) => state.setSelectedMugDimension,
  );
  const setPrice = useSelectedStore((state) => state.setPrice);

  if (state === 'data' && dimension) {
    //
    const isSelected = selectedMugDimension === dimension;

    return (
      <div
        className={clsx(
          'aspect-3/1 bg-white rounded-lg items-center justify-center shadow-sm border flex flex-col cursor-pointer hover:bg-neutral-50',
          {
            'border-[#C8B6A6]': !isSelected,
            'border-[#4B2E2B]': isSelected,
          },
        )}
        onClick={() => {
          setSelectedMugDimension(dimension);
          setPrice();
        }}
      >
        <span className="font-semibold">{dimension.name}</span>
        <span className="text-sm">Altezza: {dimension.height}</span>
      </div>
    );
  }

  if (state === 'pending') {
    return (
      <div className="bg-[#C8B6A6] aspect-3/1 rounded-lg animate-pulse justify-center shadow-sm flex-col flex gap-2"></div>
    );
  }
};
