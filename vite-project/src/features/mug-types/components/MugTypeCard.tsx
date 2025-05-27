import { useAppStore } from '@/stores/store';
import type { MugType } from '@/types/types.ts';
import clsx from 'clsx';

interface MugTypeCardProps {
  state: 'data' | 'pending';
  type?: MugType;
}

export const MugTypeCard = ({ state, type }: MugTypeCardProps) => {
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const setSelectedMugType = useAppStore((state) => state.setSelectedMugType);
  const setPrice = useAppStore((state) => state.setPrice);

  if (state === 'data' && type) {
    //
    const isSelected = selectedMugType === type;

    return (
      <div
        className={clsx(
          'aspect-square bg-[#F2F2F2] rounded-lg shadow-sm border cursor-pointer h-20 p-2',
          {
            'border-[#C8B6A6]': !isSelected,
            'border-[#4B2E2B]': isSelected,
          },
        )}
        onClick={() => {
          setSelectedMugType(type);
          setPrice();
        }}
      >
        <img
          src={`/images/${type.model}.png`}
          alt={type.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    );
  }

  if (state === 'pending') {
    return (
      <div className="aspect-square bg-[#C8B6A6] rounded-lg animate-pulse h-20 w-auto shadow-sm"></div>
    );
  }
};
