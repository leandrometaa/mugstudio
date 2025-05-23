import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { useSelectedStore } from '@/store/store.ts';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';

export const BuySection = () => {
  const quantity = useSelectedStore((state) => state.quantity);
  const setQuantity = useSelectedStore((state) => state.setQuantity);

  const handleSubButton = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity, setQuantity]);

  const handleAddButton = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity, setQuantity]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuantity = e.target.valueAsNumber;
      if (!isNaN(newQuantity) && newQuantity >= 1) {
        setQuantity(newQuantity);
      }
    },
    [setQuantity],
  );

  return (
    <div className="flex justify-end gap-6">
      <div className="flex gap-1">
        <Button
          className="bg-white text-black hover:bg-neutral-50 cursor-pointer"
          onClick={handleSubButton}
          disabled={quantity <= 1}
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
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <div className="flex gap-1">
        <Button>Aggiungi al carrello</Button>
        <Button>Acquista</Button>
      </div>
    </div>
  );
};
