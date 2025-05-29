import { Button } from "@/components/ui/button.tsx";
import { captureScreenshot } from "@/lib/utils.ts";
import { useAppStore } from "@/stores/appStore.ts";
import { useBabylonStore } from "@/stores/babylonStore.ts";
import type { CartItem } from "@/types/types.ts";

export const AddToCartButton = () => {
  //
  const selectedMugType = useAppStore((state) => state.selectedMugType);
  const selectedMugSize = useAppStore((state) => state.selectedMugSize);
  const selectedMugColor = useAppStore((state) => state.selectedMugColor);
  const selectedMugMaterial = useAppStore((state) => state.selectedMugMaterial);
  const selectedMugImage = useAppStore((state) => state.selectedMugImage);
  const selectedMugTexture = useAppStore((state) => state.selectedMugTexture);

  const quantity = useAppStore((state) => state.quantity);
  const price = useAppStore((state) => state.price);
  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);
  const setCartPrice = useAppStore((state) => state.setCartPrice);

  const camera = useBabylonStore((state) => state.camera);
  const engine = useBabylonStore((state) => state.engine);

  //
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

    //
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

  return (
    <Button
      className="cursor-pointer bg-white font-medium text-[#4B2E2B] hover:bg-neutral-50"
      onClick={handleAddToCartButton}
    >
      Aggiungi al carrello
    </Button>
  );
};
