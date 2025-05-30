import { useAppStore } from "@/stores/appStore";
import type { MugColor } from "@/types/types.ts";
import clsx from "clsx";

interface MugColorCardProps {
  state: "data" | "pending";
  color?: MugColor;
}

export const MugColorCard = ({ state, color }: MugColorCardProps) => {
  // Ottiene tutti i dati relativi al colore della tazza dallo store Zustand.
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const setSelectedMugColor = useAppStore((state) => state.setSelectedMugColor);
  // Ottiene la funzione per aggiornare il prezzo dallo store Zustand.
  const setPrice = useAppStore((state) => state.setPrice);

  /**
   * Gestisce il click sulla card del colore.
   * @param color Il colore della tazza.
   */
  const handleCardClick = (color: MugColor) => {
    // Aggiorna il colore selezionato.
    setSelectedMugColor(color);
    // Aggiorna il prezzo.
    setPrice();
  };

  // Simulazione di `data` (dati ricevuti con successo) di TanStack Query.
  if (state === "data" && color) {
    // Variabile di supporto per indicare se la card è selezionata.
    const isSelected = selectedMugColor === color;

    return (
      <div
        className={clsx(
          "flex aspect-square h-10 cursor-pointer flex-col items-center justify-center rounded-full border bg-white shadow-sm hover:bg-neutral-50",
          {
            "border-[#C8B6A6]": !isSelected,
            "scale-95 border-[#4B2E2B]": isSelected,
          },
        )}
        onClick={() => handleCardClick(color)}
      >
        <div
          className="flex aspect-square h-8 items-center justify-center rounded-full"
          style={{ backgroundColor: color.code }}
        ></div>
      </div>
    );
  }

  // Simulazione di `isPending` (caricamento dei dati in corso) di TanStack Query.
  if (state === "pending") {
    return (
      <div className="aspect-square h-10 animate-pulse rounded-full bg-[#C8B6A6] shadow-sm"></div>
    );
  }
};
