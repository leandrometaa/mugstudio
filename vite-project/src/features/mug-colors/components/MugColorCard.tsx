import { useAppStore } from '@/stores/store';
import type { MugColor } from '@/types/types.ts';
import clsx from 'clsx';

interface MugColorCardProps {
  state: 'data' | 'pending';
  color?: MugColor;
}

export const MugColorCard = ({ state, color }: MugColorCardProps) => {
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const setSelectedMugColor = useAppStore((state) => state.setSelectedMugColor);
  const setPrice = useAppStore((state) => state.setPrice);

  if (state === 'data' && color) {
    //
    const isSelected = selectedMugColor === color;

    return (
      <div
        className={clsx(
          'aspect-square h-10 rounded-full bg-white items-center justify-center shadow-sm border flex flex-col cursor-pointer hover:bg-neutral-50',
          {
            'border-[#C8B6A6]': !isSelected,
            'border-[#4B2E2B]': isSelected,
          },
        )}
        onClick={() => {
          setSelectedMugColor(color);
          setPrice();
        }}
      >
        <div
          className="flex items-center justify-center h-8 rounded-full aspect-square"
          style={{ backgroundColor: color.code }}
        ></div>
      </div>
    );
  }

  if (state === 'pending') {
    return (
      <div className="bg-[#C8B6A6] aspect-square h-10 rounded-full animate-pulse shadow-sm"></div>
    );
  }
};
