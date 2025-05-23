import { useGetColors } from '@/hooks/hooks.ts';
import { useSelectedStore } from '@/store/store.ts';
import { useEffect } from 'react';
import { MugColorCard } from './MugColorCard.tsx';
import type { MugColor } from '@/types/types.ts';

export const MugColorSelection = () => {
  //
  const { data, isPending } = useGetColors();

  //
  const selectedMugColor = useSelectedStore((state) => state.selectedMugColor);
  const setSelectedMugColor = useSelectedStore(
    (state) => state.setSelectedMugColor,
  );
  const setPrice = useSelectedStore((state) => state.setPrice);

  useEffect(() => {
    if (data) {
      setSelectedMugColor(data[1]);
      setPrice();
    }
  }, [data, setPrice, setSelectedMugColor]);

  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg font-semibold">Colore</span>
      <div className="flex items-center gap-1">
        <span className="opacity-80">Selezionato:</span>
        <span className="font-medium">
          {selectedMugColor ? `${selectedMugColor.name}` : 'Nessuno'}
        </span>
      </div>
      {data && (
        <ul className="flex gap-2 w-full">
          {data.map((data: MugColor) => (
            <li
              key={data.id}
              onClick={() => setSelectedMugColor(data)}
            >
              <MugColorCard
                color={data}
                state="data"
              />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="flex gap-2 w-full">
          <li>
            <MugColorCard state="pending" />
          </li>
          <li>
            <MugColorCard state="pending" />
          </li>
          <li>
            <MugColorCard state="pending" />
          </li>
          <li>
            <MugColorCard state="pending" />
          </li>
          <li>
            <MugColorCard state="pending" />
          </li>
        </ul>
      )}
    </div>
  );
};
