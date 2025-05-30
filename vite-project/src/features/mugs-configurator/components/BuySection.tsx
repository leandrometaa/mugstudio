import { Button } from "@/components/ui/button.tsx";

import { useAppStore } from "@/stores/appStore";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddToCartButton } from "./AddToCartButton.tsx";
import { BuyButton } from "./BuyButton.tsx";

export const BuySection = () => {
  // Ottiene i dati del prodotto corrente (quantità e prezzo) dallo store Zustand.
  const quantity = useAppStore((state) => state.quantity);
  const setQuantity = useAppStore((state) => state.setQuantity);
  const setPrice = useAppStore((state) => state.setPrice);

  /**
   * Gestisce il click cul pulsante per diminuire la quantità.
   */
  const handleSubButton = () => {
    // Azioni successive eseguibili solo se la quantità è maggiore di 1.
    if (quantity > 1) {
      // Aggiorna la quantità del prodotto.
      setQuantity(quantity - 1);
      // Aggiorna il prezzo del prodotto.
      setPrice();
    }
  };

  /**
   * Gestisce il click cul pulsante per incrementare la quantità.
   */
  const handleAddButton = () => {
    // Aggiorna la quantità del prodotto.
    setQuantity(quantity + 1);
    // Aggiorna il prezzo del prodotto.
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
