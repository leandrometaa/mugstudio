import { useGetTypes } from "@/hooks/hooks.ts";
import { useAppStore } from "@/stores/appStore.ts";
import type { MugType } from "@/types/types.ts";
import { useEffect } from "react";
import { MugTypeCard } from "./MugTypeCard.tsx";

export const MugTypeSelection = () => {
  // Hook con query per fetching dei tipi di tazza disponibili.
  const { data: types, isPending } = useGetTypes();

  // Ottiene tutti i dati relativi al tipo della tazza dallo store Zustand.
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const setSelectedMugType = useAppStore((state) => state.setSelectedMugType);
  // Ottiene la funzione per aggiornare il prezzo dallo store Zustand.
  const setPrice = useAppStore((state) => state.setPrice);

  // Appena i tipi di tazza sono stati caricati correttamente, ...
  useEffect(() => {
    if (types) {
      if (!selectedMugType) {
        // ... seleziona il primo tipo e ...
        setSelectedMugType(types[0]);
      }
      // ... aggiorna il prezzo.
      setPrice();
    }
  }, [types, setPrice, setSelectedMugType, selectedMugType]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <span className="font-semibold">Tipo</span>
        <div className="flex items-center gap-1 text-sm">
          <span className="opacity-80">Selezionato:</span>
          <span className="font-medium">
            {selectedMugType ? `${selectedMugType.name}` : "Nessuno"}
          </span>
        </div>
      </div>
      {types && (
        <ul className="flex w-full gap-2">
          {types.map((type: MugType) => (
            <li
              key={`type-${type.id}`}
              onClick={() => setSelectedMugType(type)}
            >
              <MugTypeCard type={type} state="data" />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="flex w-full gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={`type-pending-${index}`}>
              <MugTypeCard state="pending" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
