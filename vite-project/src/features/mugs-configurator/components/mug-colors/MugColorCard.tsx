import { useAppStore } from "@/stores/appStore";
import type { MugColor } from "@/types/types.ts";
import clsx from "clsx";

interface MugColorCardProps {
  state: "data" | "pending";
  color?: MugColor;
}

export const MugColorCard = ({ state, color }: MugColorCardProps) => {
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const setSelectedMugColor = useAppStore((state) => state.setSelectedMugColor);
  const setPrice = useAppStore((state) => state.setPrice);

  if (state === "data" && color) {
    //
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
        onClick={() => {
          setSelectedMugColor(color);
          setPrice();
        }}
      >
        <div
          className="flex aspect-square h-8 items-center justify-center rounded-full"
          style={{ backgroundColor: color.code }}
        ></div>
      </div>
    );
  }

  if (state === "pending") {
    return (
      <div className="aspect-square h-10 animate-pulse rounded-full bg-[#C8B6A6] shadow-sm"></div>
    );
  }
};
