import { useGetSizes } from '@/hooks/hooks.ts';
import { useAppStore } from '@/stores/store.ts';
import type { MugSize } from '@/types/types.ts';
import { useEffect } from 'react';
import { MugSizeCard } from './MugSizeCard.tsx';

export const MugSizeSelection = () => {
  //
  const { data: sizes, isPending } = useGetSizes();

  //
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const setSelectedMugSize = useAppStore((state) => state.setSelectedMugSize);
  const setPrice = useAppStore((state) => state.setPrice);

  useEffect(() => {
    if (sizes) {
      setSelectedMugSize(sizes[1]);
      setPrice();
    }
  }, [sizes, setPrice, setSelectedMugSize]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <span className="font-semibold">Dimensione</span>
        <div className="flex items-center gap-1 text-sm">
          <span className="opacity-80">Selezionata:</span>
          <span className="font-medium">
            {selectedMugSize ? `${selectedMugSize.name}` : 'Nessuno'}
          </span>
        </div>
      </div>
      {sizes && (
        <ul className="flex gap-2 w-full">
          {sizes.map((size: MugSize) => (
            <li
              key={`size-pending-${size.id}`}
              onClick={() => setSelectedMugSize(size)}
            >
              <MugSizeCard
                dimension={size}
                state="data"
              />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="flex gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={`size-${index}`}>
              <MugSizeCard state="pending" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
