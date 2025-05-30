import { useAppStore } from "@/stores/appStore";
import type { MugSize } from "@/types/types.ts";
import clsx from "clsx";

interface MugSizeCardProps {
  state: "data" | "pending";
  dimension?: MugSize;
}

export const MugSizeCard = ({ state, dimension }: MugSizeCardProps) => {
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const setSelectedMugSize = useAppStore((state) => state.setSelectedMugSize);
  const setPrice = useAppStore((state) => state.setPrice);

  // Simulazione di `data` (dati caricati correttamente) di TanStack Query.
  if (state === "data" && dimension) {
    // Variabile di supporto per indicare se la card è selezionata.
    const isSelected = selectedMugSize === dimension;

    return (
      <div
        className={clsx(
          "flex h-12 w-36 cursor-pointer flex-col items-center justify-center rounded-lg border bg-white shadow-sm hover:bg-neutral-50",
          {
            "border-[#C8B6A6]": !isSelected,
            "scale-95 border-[#A1866F]": isSelected,
          },
        )}
        onClick={() => {
          setSelectedMugSize(dimension);
          setPrice();
        }}
      >
        <span className="text-sm font-semibold">{dimension.name}</span>
        <span className="text-sm opacity-80">Altezza: {dimension.height}</span>
      </div>
    );
  }

  // Simulazione di `isPending` (caricamento dei dati in corso) di TanStack Query.
  if (state === "pending") {
    return (
      <div className="flex h-12 w-36 animate-pulse flex-col justify-center gap-2 rounded-lg bg-[#C8B6A6] shadow-sm"></div>
    );
  }
};
