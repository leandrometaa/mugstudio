import { useAppStore } from "@/stores/appStore";
import type { MugTexture } from "@/types/types.ts";
import clsx from "clsx";

interface MugTextureCardProps {
  state: "data" | "pending";
  texture?: MugTexture;
}

export const MugTextureCard = ({ state, texture }: MugTextureCardProps) => {
  const selectedMugTexture = useAppStore((state) => state.selectedMugTexture);
  const setSelectedMugTexture = useAppStore(
    (state) => state.setSelectedMugTexture,
  );
  const setSelectedMugImage = useAppStore((state) => state.setSelectedMugImage);
  const setPrice = useAppStore((state) => state.setPrice);

  if (state === "data" && texture) {
    //
    const isSelected = selectedMugTexture === texture;

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
          setSelectedMugTexture(texture);
          setSelectedMugImage(null);
          setPrice();
        }}
      >
        <img
          src={`/images/textures/${texture.fileName}.jpg`}
          className="flex aspect-square h-8 items-center justify-center rounded-full"
        ></img>
      </div>
    );
  }

  if (state === "pending") {
    return (
      <div className="aspect-square h-10 animate-pulse rounded-full bg-[#C8B6A6] shadow-sm"></div>
    );
  }
};
