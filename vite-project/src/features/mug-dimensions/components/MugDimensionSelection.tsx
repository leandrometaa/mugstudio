import { useGetDimensions } from '@/hooks/hooks.ts';
import { useSelectedStore } from '@/store/store.ts';
import type { MugDimension } from '@/types/types.ts';
import { useEffect } from 'react';
import { MugDimensionCard } from './MugDimensionCard.tsx';

export const MugDimensionSelection = () => {
  //
  const { data, isPending } = useGetDimensions();

  //
  const selectedMugDimension = useSelectedStore(
    (state) => state.selectedMugDimension,
  );
  const setSelectedMugDimension = useSelectedStore(
    (state) => state.setSelectedMugDimension,
  );
  const setPrice = useSelectedStore((state) => state.setPrice);

  useEffect(() => {
    if (data) {
      setSelectedMugDimension(data[1]);
      setPrice();
    }
  }, [data, setPrice, setSelectedMugDimension]);

  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg font-semibold">Dimensione</span>
      <div className="flex items-center gap-1">
        <span className="opacity-80">Selezionato:</span>
        <span className="font-medium">
          {selectedMugDimension ? `${selectedMugDimension.name}` : 'Nessuno'}
        </span>
      </div>
      {data && (
        <ul className="grid grid-flow-col gap-2 w-full">
          {data.map((data: MugDimension) => (
            <li
              key={data.id}
              onClick={() => setSelectedMugDimension(data)}
            >
              <MugDimensionCard
                dimension={data}
                state="data"
              />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="grid grid-flow-col gap-2">
          <li>
            <MugDimensionCard state="pending" />
          </li>
          <li>
            <MugDimensionCard state="pending" />
          </li>
          <li>
            <MugDimensionCard state="pending" />
          </li>
        </ul>
      )}
    </div>
  );
};
