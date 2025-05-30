import { useAppStore } from "@/stores/appStore";
import type { MugMaterial } from "@/types/types.ts";
import clsx from "clsx";

interface MugMaterialCardProps {
  state: "data" | "pending";
  material?: MugMaterial;
}

export const MugMaterialCard = ({ state, material }: MugMaterialCardProps) => {
  // Ottiene i dettagli del materiale della tazza dallo store Zustand.
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const setSelectedMugMaterial = useAppStore(
    (state) => state.setSelectedMugMaterial,
  );
  const setSelectedMugImage = useAppStore((state) => state.setSelectedMugImage);
  // Ottiene la funzione per impostare il prezzo dallo store Zustand.
  const setPrice = useAppStore((state) => state.setPrice);

  /**
   * Gestisce il click sulla card del materiale.
   * @param material Il materiale selezionato.
   */
  const handleCardClick = (material: MugMaterial) => {
    setSelectedMugMaterial(material);
    setSelectedMugImage(null);
    setPrice();
  };

  // Simulazione di `data` (dati caricati correttamente) di TanStack Query.
  if (state === "data" && material) {
    // Variabile di supporto per indicare se la card è selezionata.
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
          handleCardClick(material);
        }}
      >
        <span className="text-center text-sm leading-none font-semibold">
          {material.name}
        </span>
      </div>
    );
  }

  // Simulazione di `isPending` (caricamento dei dati in corso) di TanStack Query.
  if (state === "pending") {
    return (
      <div className="flex h-12 w-24 animate-pulse flex-col justify-center gap-2 rounded-lg bg-[#C8B6A6] shadow-sm"></div>
    );
  }
};
