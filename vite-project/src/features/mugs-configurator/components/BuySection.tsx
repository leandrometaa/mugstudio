import { Button } from "@/components/ui/button.tsx";

import { useAppStore } from "@/stores/appStore";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddToCartButton } from "./AddToCartButton.tsx";
import { BuyButton } from "./BuyButton.tsx";

export const BuySection = () => {
  //
  const quantity = useAppStore((state) => state.quantity);
  const setQuantity = useAppStore((state) => state.setQuantity);
  const setPrice = useAppStore((state) => state.setPrice);

  //
  const handleSubButton = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice();
    }
  };

  //
  const handleAddButton = () => {
    setQuantity(quantity + 1);
    setPrice();
  };

  return (
    <div className="flex justify-end gap-6">
      <div className="flex gap-1">
        <Button
          className="cursor-pointer bg-white text-black hover:bg-neutral-50"
          onClick={handleSubButton}
          disabled={quantity <= 1}
          size={"icon"}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <span className="flex w-16 items-center justify-center rounded-lg bg-white px-3 py-1 text-center">
          {quantity}
        </span>
        <Button
          className="cursor-pointer bg-white text-black hover:bg-neutral-50"
          onClick={handleAddButton}
          size={"icon"}
        >
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </Button>
      </div>
      <div className="flex gap-1">
        <AddToCartButton />
        <BuyButton />
      </div>
    </div>
  );
};
