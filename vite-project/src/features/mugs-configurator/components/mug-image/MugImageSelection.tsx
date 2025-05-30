import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useAppStore } from "@/stores/appStore";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MugImageSelection = () => {
  // Ottiene i dati sulla tazza dallo store Zustand.
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugImage = useAppStore((state) => state.selectedMugImage);
  const setSelectedMugImage = useAppStore((state) => state.setSelectedMugImage);
  const setSelectedMugTexture = useAppStore(
    (state) => state.setSelectedMugTexture,
  );

  // Gestisce il "caricamento" dell'immagine.
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedMugType) return;

    // Prende il primo file caricato.
    const file = event.target.files?.[0];
    if (file && selectedMugType.supportsImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Rimuove la texture selezionata.
        setSelectedMugTexture(null);
        // Imposta l'immagine selezionata.
        setSelectedMugImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Gestisce il click sul pulsante per eliminare l'immagine.
  const handleDeleteImageButton = () => {
    // Rimuove la texture selezionata.
    setSelectedMugTexture(null);
    // Rimuove l'immagine selezionata.
    setSelectedMugImage(null);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <span className="font-semibold">Immagine personalizzata</span>
        <p className="text-sm opacity-80">
          Allega un'immagine da stampare sulla tazza.
        </p>
      </div>
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        id="imageUploadInput"
        className="hidden"
      />
      {!selectedMugImage && (
        <label
          htmlFor="imageUploadInput"
          className="flex w-fit cursor-pointer items-center gap-2 rounded-lg border bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black/85"
        >
          Seleziona immagine
        </label>
      )}
      {selectedMugImage && (
        <div className="flex items-center gap-2">
          <img
            src={selectedMugImage}
            alt="Immagine caricata dall'utente"
            className="max-h-24 rounded-lg shadow-sm"
          />
          <Button
            onClick={handleDeleteImageButton}
            className="flex aspect-square h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
            size={"sm"}
          >
            <FontAwesomeIcon icon={faTrash} size="sm" />
          </Button>
        </div>
      )}
    </div>
  );
};
