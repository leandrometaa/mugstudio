import { useGetSizes } from "@/hooks/hooks.ts";
import { useAppStore } from "@/stores/appStore.ts";
import type { MugSize } from "@/types/types.ts";
import { useEffect } from "react";
import { MugSizeCard } from "./MugSizeCard.tsx";

export const MugSizeSelection = () => {
  // Hook con query per fetching delle dimensioni disponibili.
  const { data: sizes, isPending } = useGetSizes();

  // Ottiene tutti i dati relativi alle dimensioni della tazza dallo store Zustand.
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const setSelectedMugSize = useAppStore((state) => state.setSelectedMugSize);
  // Ottiene la funzione per aggiornare il prezzo dallo store Zustand.
  const setPrice = useAppStore((state) => state.setPrice);

  // Appena le dimensioni sono state caricate correttamente, ...
  useEffect(() => {
    if (sizes) {
      // ... seleziona la seconda dimensione e ...
      setSelectedMugSize(sizes[1]);
      // ... aggiorna il prezzo.
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
            {selectedMugSize ? `${selectedMugSize.name}` : "Nessuno"}
          </span>
        </div>
      </div>
      {sizes && (
        <ul className="flex w-full gap-2">
          {sizes.map((size: MugSize) => (
            <li
              key={`size-pending-${size.id}`}
              onClick={() => setSelectedMugSize(size)}
            >
              <MugSizeCard dimension={size} state="data" />
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
