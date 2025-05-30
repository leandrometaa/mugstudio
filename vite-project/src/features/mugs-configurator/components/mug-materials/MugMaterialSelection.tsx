import { useAppStore } from "@/stores/appStore.ts";
import type { MugMaterial } from "@/types/types.ts";
import { useEffect } from "react";
import { MugMaterialCard } from "./MugMaterialCard.tsx";
import { useGetMaterials } from "@/hooks/hooks.ts";

export const MugMaterialSelection = () => {
  // Hook con query per fetching dei materiali disponibili.
  const { data: materials, isPending } = useGetMaterials();

  // Ottiene tutti i dati relativi al materiale della tazza dallo store Zustand.
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const setSelectedMugMaterial = useAppStore(
    (state) => state.setSelectedMugMaterial,
  );
  // Ottiene la funzione per aggiornare il prezzo dallo store Zustand.
  const setPrice = useAppStore((state) => state.setPrice);

  // Appena i materiali sono stati caricati correttamente, ...
  useEffect(() => {
    if (materials) {
      // ... seleziona il primo materiale e ...
      setSelectedMugMaterial(materials[0]);
      // ... aggiorna il prezzo.
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
            {selectedMugMaterial ? `${selectedMugMaterial.name}` : "Nessuno"}
          </span>
        </div>
      </div>
      {materials && (
        <ul className="flex w-full gap-2">
          {materials.map((material: MugMaterial) => (
            <li
              key={`material-${material.id}`}
              onClick={() => {
                setSelectedMugMaterial(material);
                setPrice();
              }}
            >
              <MugMaterialCard material={material} state="data" />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="flex w-full gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={`material-pending-${index}`}>
              <MugMaterialCard state="pending" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
