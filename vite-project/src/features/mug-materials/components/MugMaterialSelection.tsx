import { useSelectedStore } from '@/store/store.ts';
import type { MugMaterial } from '@/types/types.ts';
import { useEffect } from 'react';
import { MugMaterialCard } from './MugMaterialCard.tsx';
import { useGetMaterials } from '@/hooks/hooks.ts';

export const MugMaterialSelection = () => {
  //
  const { data, isPending } = useGetMaterials();

  //
  const selectedMugMaterial = useSelectedStore(
    (state) => state.selectedMugMaterial,
  );
  const setSelectedMugMaterial = useSelectedStore(
    (state) => state.setSelectedMugMaterial,
  );
  const setPrice = useSelectedStore((state) => state.setPrice);

  useEffect(() => {
    if (data) {
      setSelectedMugMaterial(data[1]);
      setPrice();
    }
  }, [data, setPrice, setSelectedMugMaterial]);

  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg font-semibold">Materiale</span>
      <div className="flex items-center gap-1">
        <span className="opacity-80">Selezionato:</span>
        <span className="font-medium">
          {selectedMugMaterial ? `${selectedMugMaterial.name}` : 'Nessuno'}
        </span>
      </div>
      {data && (
        <ul className="grid grid-flow-col gap-2 w-full">
          {data.map((data: MugMaterial) => (
            <li
              key={data.id}
              onClick={() => setSelectedMugMaterial(data)}
            >
              <MugMaterialCard
                material={data}
                state="data"
              />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="grid grid-flow-col gap-2">
          <li>
            <MugMaterialCard state="pending" />
          </li>
          <li>
            <MugMaterialCard state="pending" />
          </li>
        </ul>
      )}
    </div>
  );
};
