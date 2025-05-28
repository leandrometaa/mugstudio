import { Button } from "@/components/ui/button.tsx";
import { useAppStore } from "@/stores/appStore.ts";
import type { CartItem } from "@/types/types.ts";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CartItemTileProps {
  cartItem: CartItem;
}

export const CartItemTile = ({ cartItem }: CartItemTileProps) => {
  //
  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);
  const setCartPrice = useAppStore((state) => state.setCartPrice);

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item: CartItem) => item.id !== id));
    setCartPrice();
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems
        .map((item: CartItem) =>
          item.id === id ? { ...item, quantity } : item,
        )
        .filter((item: CartItem) => item.quantity > 0),
    );
    setCartPrice();
  };

  return (
    <div className="flex gap-4 rounded-lg p-2 shadow-sm">
      <img
        src={cartItem.image}
        alt={cartItem.name}
        className="h-20 w-20 rounded object-cover"
      />
      <div className="flex w-full flex-col gap-1">
        <h3 className="text-sm font-semibold">{cartItem.name}</h3>
        <div className="flex flex-col text-sm opacity-80">
          <span>{cartItem.product.type}</span>
          <span>{cartItem.product.color}</span>
          <span>{cartItem.product.dimension}</span>
          <span>{cartItem.product.material}</span>
          {cartItem.product.texture && <span>{cartItem.product.texture}</span>}
          {cartItem.product.image && <span>Immagine personalizzata</span>}
        </div>
        <div className="flex items-center justify-end gap-2">
          <span>{`${(cartItem.quantity * cartItem.quantity).toFixed(2)} €`}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
            className="h-8 w-8 p-0"
          >
            <FontAwesomeIcon icon={faMinus} />
          </Button>
          <span className="w-8 text-center text-sm">{cartItem.quantity}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
            className="h-8 w-8 p-0"
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => removeFromCart(cartItem.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </div>
    </div>
  );
};
