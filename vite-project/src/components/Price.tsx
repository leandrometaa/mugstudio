import { useSelectedStore } from '@/store/store.ts';

export const Price = () => {
  //
  const price = useSelectedStore((state) => state.price);

  return (
    <span
      className="text-4xl font-semibold"
      style={{ fontFamily: 'DynaPuff' }}
    >
      {price.toFixed(2)}€
    </span>
  );
};
