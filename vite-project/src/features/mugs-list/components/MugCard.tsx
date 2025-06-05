import { useAppStore } from "@/stores/appStore.ts";
import type { MugType } from "@/types/types.ts";

interface MugCardProps {
  state: "data" | "pending";
  mugType?: MugType;
}

export const MugCard = ({ state, mugType }: MugCardProps) => {
  // Ottiene i seguenti dati dallo store Zustand.
  const setSelectedPage = useAppStore((state) => state.setSelectedPage);
  const setSelectedMugType = useAppStore((state) => state.setSelectedMugType);

  /**
   * Gestisce il click sulla card.
   * Cambia la pagina del sito ed imposta il tipo di tazza selezionata.
   *
   * @param mugType Il tipo di tazza selezionata.
   */
  const handleCardClick = (mugType: MugType) => {
    // Aggiorna la pagina corrente.
    setSelectedPage("configurator");
    // Aggiorna il tipo di tazza selezionata.
    setSelectedMugType(mugType);
  };

  // Simulazione dello stato 'data' (dati caricati corettamente) di TanStack Query.
  if (state === "data" && mugType) {
    return (
      <div
        className="flex cursor-pointer flex-col rounded-lg shadow-sm"
        onClick={() => handleCardClick(mugType)}
      >
        <div className="flex aspect-video h-32 justify-center rounded-t-lg bg-[#F2F2F2]">
          <img
            src={`images/mugs/${mugType.fileName}.png`}
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="flex h-full flex-col rounded-b-lg bg-[#EADBC8] px-4 py-2 text-sm hover:bg-[#EADBC8]/90">
          <h3 style={{ fontFamily: "DynaPuff" }}>{mugType.name}</h3>
          <p className="opacity-80 overflow-hidden text-ellipsis text-xs sm:text-sm">{mugType.description}</p>
        </div>
      </div>
    );
  }

  // Simulazione dello stato 'isPending' (caricamento dei dati in corso) di TanStack Query.
  if (state === "pending") {
    return (
      <div className="h-full w-full animate-pulse rounded-lg bg-[#C8B6A6] shadow-sm"></div>
    );
  }
};
