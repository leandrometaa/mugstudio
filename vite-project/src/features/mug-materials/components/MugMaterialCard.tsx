import { useAppStore } from "@/stores/appStore";
import type { MugMaterial } from "@/types/types.ts";
import clsx from "clsx";

interface MugMaterialCardProps {
  state: "data" | "pending";
  material?: MugMaterial;
}

export const MugMaterialCard = ({ state, material }: MugMaterialCardProps) => {
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const setSelectedMugMaterial = useAppStore(
    (state) => state.setSelectedMugMaterial,
  );
  const setPrice = useAppStore((state) => state.setPrice);

  if (state === "data" && material) {
    //
    const isSelected = selectedMugMaterial === material;

    return (
      <div
        className={clsx(
          "flex h-12 w-24 cursor-pointer flex-col items-center justify-center rounded-lg border bg-white shadow-sm hover:bg-neutral-50",
          {
            "border-[#C8B6A6]": !isSelected,
            "scale-95 border-[#4B2E2B]": isSelected,
          },
        )}
        onClick={() => {
          setSelectedMugMaterial(material);
          setPrice();
        }}
      >
        <span className="text-center text-sm leading-none font-semibold">
          {material.name}
        </span>
      </div>
    );
  }

  if (state === "pending") {
    return (
      <div className="flex h-12 w-24 animate-pulse flex-col justify-center gap-2 rounded-lg bg-[#C8B6A6] shadow-sm"></div>
    );
  }
};
