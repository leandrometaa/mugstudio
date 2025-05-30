import { useAppStore } from "@/stores/appStore";

export const ProductInfo = () => {
  // Ottiene price dallo store Zustand.
  const price = useAppStore((state) => state.price);

  // Formatta il prezzo aggiungendo le prime due cifre decimali dopo il punto.
  const formattedPrice = price.toFixed(2);
  // Divide il prezzo in due (parte intera e decimale) in corrispondenza del punto.
  const [integerPart, decimalPart] = formattedPrice.split(".");

  return (
    <div className="sticky top-0 z-1 flex flex-col bg-[#FFFDF9] p-4 pb-2">
      <span className="text-xl font-semibold">Tazza personalizzata</span>
      <div className="flex items-start gap-1 font-medium">
        <div className="flex items-start">
          <span className="font-semi text-3xl">{integerPart}</span>
          <span className="text-xl opacity-70">{decimalPart}</span>
        </div>
        <span>€</span>
      </div>
    </div>
  );
};
