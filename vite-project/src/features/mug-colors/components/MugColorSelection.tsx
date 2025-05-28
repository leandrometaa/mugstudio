import { useGetColors } from "@/hooks/hooks.ts";
import { useAppStore } from "@/stores/appStore.ts";
import { useEffect } from "react";
import { MugColorCard } from "./MugColorCard.tsx";
import type { MugColor } from "@/types/types.ts";

export const MugColorSelection = () => {
  //
  const { data: colors, isPending } = useGetColors();

  //
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const setSelectedMugColor = useAppStore((state) => state.setSelectedMugColor);
  const setPrice = useAppStore((state) => state.setPrice);

  useEffect(() => {
    if (colors) {
      setSelectedMugColor(colors[1]);
      setPrice();
    }
  }, [colors, setPrice, setSelectedMugColor]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <span className="font-semibold">Colore</span>
        <div className="flex items-center gap-1 text-sm">
          <span className="opacity-80">Selezionato:</span>
          <span className="font-medium">
            {selectedMugColor ? `${selectedMugColor.name}` : "Nessuno"}
          </span>
        </div>
      </div>
      {colors && (
        <ul className="flex w-full gap-2">
          {colors.map((color: MugColor) => (
            <li
              key={`color-${color.id}`}
              onClick={() => setSelectedMugColor(color)}
            >
              <MugColorCard color={color} state="data" />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="flex w-full gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={`color-pending-${index}`}>
              <MugColorCard state="pending" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
