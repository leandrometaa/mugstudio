import { useGetTypes } from '@/hooks/hooks.ts';
import { useSelectedStore } from '@/store/store.ts';
import type { MugType } from '@/types/types.ts';
import { useEffect } from 'react';
import { MugTypeCard } from './MugTypeCard.tsx';

export const MugTypeSelection = () => {
  //
  const { data, isPending } = useGetTypes();

  //
  const selectedMugType = useSelectedStore((state) => state.selectedMugType);
  const setSelectedMugType = useSelectedStore(
    (state) => state.setSelectedMugType,
  );
  const setPrice = useSelectedStore((state) => state.setPrice);

  useEffect(() => {
    if (data) {
      setSelectedMugType(data[0]);
      setPrice();
    }
  }, [data, setPrice, setSelectedMugType]);

  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg font-semibold">Tipo</span>
      <div className="flex items-center gap-1">
        <span className="opacity-80">Selezionato:</span>
        <span className="font-medium">
          {selectedMugType ? `${selectedMugType.name}` : 'Nessuno'}
        </span>
      </div>
      {data && (
        <ul className="grid grid-flow-col gap-2 w-full">
          {data.map((data: MugType) => (
            <li
              key={data.id}
              onClick={() => setSelectedMugType(data)}
            >
              <MugTypeCard
                type={data}
                state="data"
              />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="grid grid-flow-col gap-2">
          <li>
            <MugTypeCard state="pending" />
          </li>
          <li>
            <MugTypeCard state="pending" />
          </li>
          <li>
            <MugTypeCard state="pending" />
          </li>
          <li>
            <MugTypeCard state="pending" />
          </li>
          <li>
            <MugTypeCard state="pending" />
          </li>
        </ul>
      )}
    </div>
  );
};
