import { useGetTextures } from "@/hooks/hooks.ts";
import { useAppStore } from "@/stores/appStore.ts";
import type { MugTexture } from "@/types/types.ts";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { MugTextureCard } from "./MugTextureCard.tsx";

export const MugTextureSelection = () => {
  // Hook con query per fetching delle texture disponibili.
  const { data: textures, isPending } = useGetTextures();

  // Ottiene i dettagli della tazza dallo store Zustand.
  const selectedMugTexture = useAppStore((state) => state.selectedMugTexture);
  const setSelectedMugTexture = useAppStore(
    (state) => state.setSelectedMugTexture,
  );
  // Ottiene la funzione per impostare il prezzo dallo store Zustand.
  const setPrice = useAppStore((state) => state.setPrice);

  // Gestisce il click sul pulsante per rimuovere la texture.
  const handleRemoveTextureButton = () => {
    // Rimuove la texture selezionata.
    setSelectedMugTexture(null);
    // Aggiorna il prezzo.
    setPrice();
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <span className="font-semibold">Texture</span>
        <div className="flex items-center gap-1 text-sm">
          <span className="opacity-80">Selezionato:</span>
          <span className="font-medium">
            {selectedMugTexture ? `${selectedMugTexture.name}` : "Nessuno"}
          </span>
        </div>
      </div>
      {textures && (
        <ul className="flex w-full gap-2">
          <li>
            <div
              className={clsx(
                "flex aspect-square h-10 cursor-pointer flex-col items-center justify-center rounded-full border bg-white shadow-sm hover:bg-neutral-50",
                {
                  "border-[#C8B6A6]": selectedMugTexture,
                  "scale-95 border-[#4B2E2B]": !selectedMugTexture,
                },
              )}
              onClick={handleRemoveTextureButton}
            >
              <FontAwesomeIcon icon={faBan} color="#cc0000" size="2xl" />
            </div>
          </li>
          {textures.map((texture: MugTexture) => (
            <li key={`texture-${texture.id}`}>
              <MugTextureCard texture={texture} state="data" />
            </li>
          ))}
        </ul>
      )}
      {isPending && (
        <ul className="flex w-full gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={`texture-pending-${index}`}>
              <MugTextureCard state="pending" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
