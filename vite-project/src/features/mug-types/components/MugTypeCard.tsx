import { useSelectedStore } from '@/store/store.ts';
import type { MugType } from '@/types/types.ts';
import clsx from 'clsx';

interface MugTypeCardProps {
  state: 'data' | 'pending';
  type?: MugType;
}

export const MugTypeCard = ({ state, type }: MugTypeCardProps) => {
  const selectedMugType = useSelectedStore((state) => state.selectedMugType);
  const setSelectedMugType = useSelectedStore(
    (state) => state.setSelectedMugType,
  );
  const setPrice = useSelectedStore((state) => state.setPrice);

  if (state === 'data' && type) {
    //
    const isSelected = selectedMugType === type;

    return (
      <div
        className={clsx(
          'aspect-square bg-white rounded-lg shadow-sm border  cursor-pointer',
          {
            'border-[#C8B6A6]': !isSelected,
            'border-[#4B2E2B]': isSelected,
          },
        )}
        onClick={() => {
          setSelectedMugType(type);
          setPrice();
        }}
      ></div>
    );
  }

  if (state === 'pending') {
    return (
      <div className="aspect-square bg-[#C8B6A6] rounded-lg  animate-pulse shadow-sm"></div>
    );
  }
};
