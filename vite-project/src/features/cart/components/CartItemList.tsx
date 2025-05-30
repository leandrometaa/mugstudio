import { useAppStore } from "@/stores/appStore.ts";
import { CartItemTile } from "./CartItem.tsx";

export const CartItemList = () => {
  // Ottiene cartItems dallo store Zustand.
  const cartItems = useAppStore((state) => state.cartItems);

  return (
    <ul className="flex h-full flex-col gap-1 overflow-y-auto p-4">
      {cartItems.map((item) => (
        <li key={item.id}>
          <CartItemTile cartItem={item} />
        </li>
      ))}
    </ul>
  );
};
