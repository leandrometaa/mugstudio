import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { useAppStore } from '@/stores/store';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';

export const BuySection = () => {
  const quantity = useAppStore((state) => state.quantity);
  const setQuantity = useAppStore((state) => state.setQuantity);
  const setPrice = useAppStore((state) => state.setPrice);

  const handleSubButton = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice();
    }
  }, [quantity, setPrice, setQuantity]);

  const handleAddButton = useCallback(() => {
    setQuantity(quantity + 1);
    setPrice();
  }, [quantity, setPrice, setQuantity]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuantity = e.target.valueAsNumber;
      if (!isNaN(newQuantity) && newQuantity >= 1) {
        setQuantity(newQuantity);
        setPrice();
      }
    },
    [setPrice, setQuantity],
  );

  return (
    <div className="flex justify-end gap-6">
      <div className="flex gap-1">
        <Button
          className="bg-white text-black hover:bg-neutral-50 cursor-pointer"
          onClick={handleSubButton}
          disabled={quantity <= 1}
          size={'icon'}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <Input
          className="bg-white w-16"
          type="number"
          value={quantity}
          min={1}
          onChange={handleInputChange}
        />
        <Button
          className="bg-white text-black hover:bg-neutral-50 cursor-pointer"
          onClick={handleAddButton}
          size={'icon'}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <div className="flex gap-1">
        <Button className="bg-white text-[#4B2E2B] cursor-pointer hover:bg-neutral-50 font-medium">
          Aggiungi al carrello
        </Button>
        <Button className="text-white hover:bg-[#4B2E2B]/90 bg-[#4B2E2B] cursor-pointer font-medium">
          Acquista
        </Button>
      </div>
    </div>
  );
};
