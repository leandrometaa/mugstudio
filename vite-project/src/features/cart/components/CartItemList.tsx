import type { CartItem } from "@/types/types.ts";
import { CartItemTile } from "./CartItem.tsx";

interface CartItemListProps {
  cartItems: CartItem[];
}

export const CartItemList = ({ cartItems }: CartItemListProps) => {
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
