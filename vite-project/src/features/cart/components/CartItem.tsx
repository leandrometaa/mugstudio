import { Button } from "@/components/ui/button.tsx";
import { useAppStore } from "@/stores/appStore.ts";
import type { CartItem } from "@/types/types.ts";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CartItemTileProps {
  cartItem: CartItem;
}

export const CartItemTile = ({ cartItem }: CartItemTileProps) => {
  // Ottiene tutti i dati relativi al carrello dallo store Zustand.
  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);
  const setCartPrice = useAppStore((state) => state.setCartPrice);

  /**
   * Rimuove un elemento dal carrello.
   * @param id L'ID dell'elemento da rimuovere.
   */
  const removeFromCart = (id: string) => {
    // Rimuove l'elemento ed aggiorna gli oggetti del carrello.
    setCartItems(cartItems.filter((item: CartItem) => item.id !== id));
    // Aggiorna il nuovo prezzo.
    setCartPrice();
  };

  /**
   * Aggiorna la quantità dell'elemento del carrello e lo rimuove se `quantity` è 0.
   * @param id L'ID dell'elemento da aggiornare.
   * @param quantity La quantità da modificare.
   */
  const updateQuantity = (id: string, quantity: number) => {
    // Aggiorna gli elementi del carrello.
    setCartItems(
      // Trova l'elemento con lo stesso ID e aggiorna la quantità.
      cartItems
        .map((item: CartItem) =>
          item.id === id ? { ...item, quantity } : item,
        )
        // Se `quantity` è 0, rimuove l'elemento dal carrello.
        .filter((item: CartItem) => item.quantity > 0),
    );
    // Aggiorna il prezzo.
    setCartPrice();
  };

  return (
    <div className="flex gap-4 rounded-lg bg-white p-2 shadow-sm">
      <img
        src={cartItem.image}
        alt={cartItem.name}
        className="h-24 w-24 rounded object-cover"
      />
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">{cartItem.name}</h3>
          <div className="flex flex-col text-xs opacity-80">
            <span>Tipo: {cartItem.product.type}</span>
            <span>Colore: {cartItem.product.color}</span>
            <span>Dimensione: {cartItem.product.dimension}</span>
            <span>Materiale: {cartItem.product.material}</span>
            {cartItem.product.texture && (
              <span>Texture: {cartItem.product.texture}</span>
            )}
            {cartItem.product.image && <span>Immagine personalizzata</span>}
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <span>{`${(cartItem.quantity * cartItem.price).toFixed(2)} €`}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
            className="h-6 w-6 p-0"
          >
            <FontAwesomeIcon icon={faMinus} />
          </Button>
          <span className="w-12 rounded-md border border-gray-300 px-2 py-0.5 text-center text-sm">
            {cartItem.quantity}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
            className="h-6 w-6 p-0"
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => removeFromCart(cartItem.id)}
            className="h-6 w-6 p-0"
          >
            <FontAwesomeIcon icon={faTrash} size="xs" />
          </Button>
        </div>
      </div>
    </div>
  );
};
