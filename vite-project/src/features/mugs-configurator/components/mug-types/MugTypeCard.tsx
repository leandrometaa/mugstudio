import { useAppStore } from "@/stores/appStore";
import type { MugType } from "@/types/types.ts";
import clsx from "clsx";

interface MugTypeCardProps {
  state: "data" | "pending";
  type?: MugType;
}

export const MugTypeCard = ({ state, type }: MugTypeCardProps) => {
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const setSelectedMugType = useAppStore((state) => state.setSelectedMugType);
  const setPrice = useAppStore((state) => state.setPrice);

  if (state === "data" && type) {
    //
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
          setSelectedMugType(type);
          setPrice();
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

  if (state === "pending") {
    return (
      <div className="aspect-square h-20 w-auto animate-pulse rounded-lg bg-[#C8B6A6] shadow-sm"></div>
    );
  }
};
