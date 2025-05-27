import { useAppStore } from '@/stores/store';

export const MugImageSelection = () => {
  //
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedImage = useAppStore((state) => state.selectedImage);
  const setSelectedImage = useAppStore((state) => state.setSelectedImage);

  //
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && selectedMugType?.supportsImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-800 mb-2">
        Immagine personalizzata
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        {selectedMugType?.supportsImage
          ? "Allega un'immagine da visualizzare sulla tazza."
          : "L'immagine personalizzata non è disponibile per questo tipo di tazza."}
      </p>
      {selectedMugType?.supportsImage ? (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            id="imageUploadInput"
            className="hidden"
          />
          <div className="flex items-center gap-2">
            <label
              htmlFor="imageUploadInput"
              className="inline-block bg-white border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
            >
              Carica Immagine
            </label>
            {selectedImage && (
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors"
                title="Rimuovi immagine"
              >
                X
              </button>
            )}
          </div>
          {selectedImage && (
            <p className="mt-2 text-sm text-gray-600">
              Immagine caricata pronta per l'anteprima.
            </p>
          )}
        </>
      ) : (
        <p className="text-sm text-gray-500 italic">
          Questa tazza supporta solo colori e testo personalizzato.
        </p>
      )}
    </div>
  );
};
