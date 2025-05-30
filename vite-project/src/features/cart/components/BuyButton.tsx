import { Button } from "@/components/ui/button.tsx";
import { useCreateOrder } from "@/hooks/hooks.ts";
import { useAppStore } from "@/stores/appStore.ts";
import type { PostOrder, OrderItem } from "@/types/types.ts";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "sonner";
import type { MouseEvent } from "react";

export const BuyButton = () => {
  // Ottiene tutti i dati relativi alla configurazione della tazza e del carrello dallo store Zustand.
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const selectedMugImage = useAppStore((state) => state.selectedMugImage);
  const selectedMugTexture = useAppStore((state) => state.selectedMugTexture);
  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);
  const cartPrice = useAppStore((state) => state.cartPrice);
  const setCartPrice = useAppStore((state) => state.setCartPrice);

  // Hook con mutation per creare un nuovo ordine (per API).
  const { mutate: createOrder } = useCreateOrder();

  /**
   * Crea un nuovo oggetto `PostOrder` (per API) in base ai prodotti del carrello.
   * @returns Il nuovo oggetto `PostOrder`.
   */
  const createOrderFromCart = (): PostOrder | null => {
    if (
      !selectedMugType ||
      !selectedMugSize ||
      !selectedMugColor ||
      !selectedMugMaterial
    ) {
      return null;
    }

    // Converte ogni oggetto del carrello in un lista di oggetti `OrderItem` per inserirli nell'ordine (per API).
    const orderedProducts: OrderItem[] = cartItems.map((cartItem) => {
      return {
        type: selectedMugType.id,
        dimension: selectedMugSize.id,
        color: selectedMugColor.id,
        material: selectedMugMaterial.id,
        image: selectedMugImage ? selectedMugImage : false,
        texture: selectedMugTexture ? selectedMugTexture.id : false,
        quantity: cartItem.quantity,
        price: cartItem.price,
      };
    });

    // Ritorna un nuovo oggetto `PostOrder`.
    return {
      id: `order-${new Date().toISOString()}`,
      date: new Date().toISOString(),
      totalPrice: cartPrice,
      products: orderedProducts,
    };
  };

  /**
   * Gestisce il click sul pulsante `Acquista ora`.
   * @param e L'evento di click sul pulsante.
   */
  const handleBuyButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Crea l'ordine in base agli oggetti del carrello.
    const order = createOrderFromCart();

    // Se l'ordine è valido, lo invia.
    if (order) {
      createOrder(order);
    }

    // Svuota il carrello e azzera il prezzo.
    setCartItems([]);
    setCartPrice();

    // Mostra un toast custom con la conferma dell'acquisto.
    toast.custom(() => (
      <div className="flex items-center gap-4 rounded-lg bg-[#4B2E2B] px-4 py-3 text-white shadow-sm">
        <div className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-white p-2">
          <FontAwesomeIcon icon={faCheck} color={"#4B2E2B"} />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Acquisto effettuato!</p>
          <p className="text-xs text-white opacity-80">
            Acquisto effettuato con successo.
          </p>
        </div>
      </div>
    ));
  };

  return (
    <Button
      className="cursor-pointer rounded-lg bg-[#FFFFFF] px-4 py-2 font-medium text-[#4B2E2B] transition-colors hover:bg-[#FFFFFF]/95 hover:opacity-90"
      onClick={handleBuyButton}
    >
      Acquista ora
    </Button>
  );
};
