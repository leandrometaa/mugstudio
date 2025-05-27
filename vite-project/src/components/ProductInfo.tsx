import { useAppStore } from '@/stores/store';

export const ProductInfo = () => {
  //
  const price = useAppStore((state) => state.price);

  //
  const formattedPrice = price.toFixed(2);
  const [integerPart, decimalPart] = formattedPrice.split('.');

  return (
    <div className="flex flex-col sticky top-0 p-4 pb-2 bg-[#FFFDF9] z-1">
      <span className="text-xl font-semibold">Tazza personalizzata</span>
      <div className="flex items-start gap-1 font-medium">
        <div className="items-start flex">
          <span className="text-3xl font-semi">{integerPart}</span>
          <span className="opacity-70 text-xl">{decimalPart}</span>
        </div>
        <span>€</span>
      </div>
    </div>
  );
};
