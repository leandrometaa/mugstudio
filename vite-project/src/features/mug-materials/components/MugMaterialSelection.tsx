import { useAppStore } from '@/stores/store.ts';
import type { MugMaterial } from '@/types/types.ts';
import { useEffect } from 'react';
import { MugMaterialCard } from './MugMaterialCard.tsx';
import { useGetMaterials } from '@/hooks/hooks.ts';

export const MugMaterialSelection = () => {
  //
  const { data: materials, isPending } = useGetMaterials();

  //
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const setSelectedMugMaterial = useAppStore(
    (state) => state.setSelectedMugMaterial,
  );
  const setPrice = useAppStore((state) => state.setPrice);

  useEffect(() => {
    if (materials) {
      setSelectedMugMaterial(materials[1]);
      setPrice();
    }
  }, [materials, setPrice, setSelectedMugMaterial]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <span className="font-semibold">Materiale</span>
        <div className="flex items-center gap-1 text-sm">
          <span className="opacity-80">Selezionato:</span>
          <span className="font-medium">
            {selectedMugMaterial ? `${selectedMugMaterial.name}` : 'Nessuno'}
          </span>
        </div>
      </div>
      {materials && (
        <ul className="flex gap-2 w-full">
          {materials.map((material: MugMaterial) => (
            <li
              key={`material-${material.id}`}
              onClick={() => {
                setSelectedMugMaterial(material);
                setPrice();
              }}
            >
              <MugMaterialCard
                material={material}
                state="data"
              />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="flex gap-2 w-full">
          {Array.from({ length: 2 }).map((_, index) => (
            <li key={`material-pending-${index}`}>
              <MugMaterialCard state="pending" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
