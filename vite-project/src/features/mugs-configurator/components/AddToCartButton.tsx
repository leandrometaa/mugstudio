import { Button } from "@/components/ui/button.tsx";
import { captureScreenshot } from "@/lib/utils.ts";
import { useAppStore } from "@/stores/appStore.ts";
import { useBabylonStore } from "@/stores/babylonStore.ts";
import type { CartItem } from "@/types/types.ts";

export const AddToCartButton = () => {
  // Ottiene la configurazione della tazza dallo store Zustand.
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const selectedMugImage = useAppStore((state) => state.selectedMugImage);
  const selectedMugTexture = useAppStore((state) => state.selectedMugTexture);

  // Ottiene i dati del carrello dallo store Zustand.
  const quantity = useAppStore((state) => state.quantity);
  const price = useAppStore((state) => state.price);
  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);
  const setCartPrice = useAppStore((state) => state.setCartPrice);

  // Ottiene i dati della scena Babylon dallo store Zustand.
  const camera = useBabylonStore((state) => state.camera);
  const engine = useBabylonStore((state) => state.engine);

  /**
   * Gestisce l'aggiunta di una tazza personalizzata al carrello.
   * Cattura uno screenshot dell'anteprima e salva tutti i dati selezionati nello store Zustand.
   */
  const handleAddToCartButton = async () => {
    if (
      !selectedMugType ||
      !selectedMugSize ||
      !selectedMugColor ||
      !selectedMugMaterial ||
      !engine ||
      !camera
    )
      return;

    // Screenshot della scena da visualizzare nell'elemento del carrello.
    const previewImage = await captureScreenshot(engine, camera);

    // Crea un nuovo oggetto `CartItem` con tutte le informazioni della configurazione attuale.
    const item: CartItem = {
      id: `cartItem-${new Date().toISOString()}`,
      price: price,
      quantity: quantity,
      name: "Tazza personalizzata",
      image: previewImage,
      product: {
        type: selectedMugType.name,
        dimension: selectedMugSize.name,
        color: selectedMugColor.name,
        material: selectedMugMaterial.name,
        image: selectedMugImage ? selectedMugImage : false,
        texture: selectedMugTexture ? selectedMugTexture.name : false,
      },
    };

    // Verifica se nel carrello esiste già un elemento con lo stesso ID.
    const existing = cartItems.find((i) => i.id === item.id);

    if (existing) {
      // Se esiste, aggiorna solo la quantità dell'elemento esistente...
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
        ),
      );
    } else {
      // .. altrimenti, aggiunge il nuovo elemento al carrello.
      setCartItems([...cartItems, item]);
      // Aggiorna il prezzo.
      setCartPrice();
    }
  };

  return (
    <Button
      className="cursor-pointer bg-white font-medium text-[#4B2E2B] hover:bg-neutral-50"
      onClick={handleAddToCartButton}
    >
      Aggiungi al carrello
    </Button>
  );
};
