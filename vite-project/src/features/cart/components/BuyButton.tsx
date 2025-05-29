import { Button } from "@/components/ui/button.tsx";
import { useCreateOrder } from "@/hooks/hooks.ts";
import { useAppStore } from "@/stores/appStore.ts";
import type { PostOrder, OrderItem } from "@/types/types.ts";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "sonner";
import type { MouseEvent } from "react";

export const BuyButton = () => {
  //
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

  //
  const { mutate: createOrder } = useCreateOrder();

  //
  const createOrderFromCart = (): PostOrder | null => {
    if (
      !selectedMugType ||
      !selectedMugSize ||
      !selectedMugColor ||
      !selectedMugMaterial
    ) {
      return null;
    }

    //
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

    return {
      id: `order-${new Date().toISOString()}`,
      date: new Date().toISOString(),
      totalPrice: cartPrice,
      products: orderedProducts,
    };
  };

  //
  const handleBuyButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //
    const order = createOrderFromCart();

    //
    if (order) {
      //
      createOrder(order);
    }

    //
    setCartItems([]);
    setCartPrice();

    //
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
