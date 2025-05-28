import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { captureScreenshot } from "@/lib/utils.ts";
import { useAppStore } from "@/stores/appStore";
import { babylonStore } from "@/stores/babylonStore.ts";
import type { CartItem } from "@/types/types.ts";
import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { toast } from "sonner";

export const BuySection = () => {
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const selectedMugImage = useAppStore((state) => state.selectedMugImage);
  const selectedMugTexture = useAppStore((state) => state.selectedMugTexture);

  const quantity = useAppStore((state) => state.quantity);
  const setQuantity = useAppStore((state) => state.setQuantity);
  const price = useAppStore((state) => state.price);
  const setPrice = useAppStore((state) => state.setPrice);
  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);
  const setCartPrice = useAppStore((state) => state.setCartPrice);

  const camera = babylonStore((state) => state.camera);
  const engine = babylonStore((state) => state.engine);

  const handleSubButton = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice();
    }
  };

  const handleAddButton = () => {
    setQuantity(quantity + 1);
    setPrice();
  };

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

  const handleAddToCartButton = async () => {
    if (
      !selectedMugType ||
      !selectedMugSize ||
      !selectedMugColor ||
      !selectedMugMaterial ||
      !engine ||
      !camera
    )
      return;

    const previewImage = await captureScreenshot(engine, camera);

    const item: CartItem = {
      id: `cartItem-${new Date().toISOString()}`,
      price: price,
      quantity: quantity,
      name: "Tazza personalizzata",
      image: previewImage,
      product: {
        type: selectedMugType.name,
        dimension: selectedMugSize.name,
        color: selectedMugColor.name,
        material: selectedMugMaterial.name,
        image: selectedMugImage ? selectedMugImage : false,
        texture: selectedMugTexture ? selectedMugTexture.name : false,
      },
    };

    const existing = cartItems.find((i) => i.id === item.id);
    if (existing) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
        ),
      );
    } else {
      setCartItems([...cartItems, item]);
      setCartPrice();
    }
  };

  const handleBuyButton = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString("it-IT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    toast.custom((t: any) => (
      <div
        className="flex items-center gap-4 rounded-lg bg-[#4B2E2B] px-4 py-3 text-white shadow-sm"
        onClick={() => toast.dismiss(t.id)}
      >
        <div className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-white p-2">
          <FontAwesomeIcon icon={faCheck} color={"#4B2E2B"} />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">Acquisto effettuato</p>
          <p className="text-xs text-white opacity-80">{formattedDate}</p>
        </div>
      </div>
    ));
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
        <Input
          className="w-16 bg-white"
          type="number"
          value={quantity}
          min={1}
          onChange={handleInputChange}
        />
        <Button
          className="cursor-pointer bg-white text-black hover:bg-neutral-50"
          onClick={handleAddButton}
          size={"icon"}
        >
          <FontAwesomeIcon icon={faPlus} size="xs" />
        </Button>
      </div>
      <div className="flex gap-1">
        <Button
          className="cursor-pointer bg-white font-medium text-[#4B2E2B] hover:bg-neutral-50"
          onClick={handleAddToCartButton}
        >
          Aggiungi al carrello
        </Button>
        <Button
          className="cursor-pointer bg-[#4B2E2B] font-medium text-white hover:bg-[#4B2E2B]/90"
          onClick={handleBuyButton}
        >
          Acquista
        </Button>
      </div>
    </div>
  );
};
