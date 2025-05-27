import { useAppStore } from '@/stores/store';
import type { MugSize } from '@/types/types.ts';
import clsx from 'clsx';

interface MugSizeCardProps {
  state: 'data' | 'pending';
  dimension?: MugSize;
}

export const MugSizeCard = ({ state, dimension }: MugSizeCardProps) => {
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const setSelectedMugSize = useAppStore((state) => state.setSelectedMugSize);
  const setPrice = useAppStore((state) => state.setPrice);

  if (state === 'data' && dimension) {
    //
    const isSelected = selectedMugSize === dimension;

    return (
      <div
        className={clsx(
          'w-36 h-12 bg-white rounded-lg items-center justify-center shadow-sm border flex flex-col cursor-pointer hover:bg-neutral-50',
          {
            'border-[#C8B6A6]': !isSelected,
            'border-[#A1866F]': isSelected,
          },
        )}
        onClick={() => {
          setSelectedMugSize(dimension);
          setPrice();
        }}
      >
        <span className="font-semibold">{dimension.name}</span>
        <span className="text-sm opacity-80">Altezza: {dimension.height}</span>
      </div>
    );
  }

  if (state === 'pending') {
    return (
      <div className="bg-[#C8B6A6] w-36 h-12 rounded-lg animate-pulse justify-center shadow-sm flex-col flex gap-2"></div>
    );
  }
};
