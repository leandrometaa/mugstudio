import { useAppStore } from "@/stores/appStore";
import type { MugType } from "@/types/types.ts";
import clsx from "clsx";

interface MugTypeCardProps {
  state: "data" | "pending";
  type?: MugType;
}

export const MugTypeCard = ({ state, type }: MugTypeCardProps) => {
  // Ottiiene i dati relativi al tipo di tazza dallo store Zustand.
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const setSelectedMugType = useAppStore((state) => state.setSelectedMugType);
  // Ottiene la funzione per aggiornare il prezzo dallo store Zustand.
  const setPrice = useAppStore((state) => state.setPrice);

  /**
   * Gestisce il click sulla card del tipo della tazza.
   * @param type Il tipo della tazza.
   */
  const handleCardClick = (type: MugType) => {
    // Aggiorna il tipo di tazza selezionato.
    setSelectedMugType(type);
    // Aggiorna il prezzo.
    setPrice();
  };

  // Simulazione di `data` (dati caricati correttamente) di TanStack Query.
  if (state === "data" && type) {
    // Variabile di supporto per indicare se la card è selezionata.
    const isSelected = selectedMugType === type;

    return (
      <div
        className={clsx(
          "aspect-square h-20 cursor-pointer rounded-lg border bg-[#F2F2F2] p-2 shadow-sm",
          {
            "border-[#C8B6A6]": !isSelected,
            "scale-95 border-[#4B2E2B]": isSelected,
          },
        )}
        onClick={() => {
          handleCardClick(type);
        }}
      >
        <img
          src={`/images/mugs/${type.fileName}.png`}
          alt={type.name}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    );
  }

  // Simulazione di `isPending` (caricamento dei dati in corso) di TanStack Query.
  if (state === "pending") {
    return (
      <div className="aspect-square h-20 w-auto animate-pulse rounded-lg bg-[#C8B6A6] shadow-sm"></div>
    );
  }
};
