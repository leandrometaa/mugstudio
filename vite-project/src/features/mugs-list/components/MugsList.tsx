import { useGetTypes } from '@/hooks/hooks.ts';
import { MugCard } from './MugCard.tsx';

export const MugsList = () => {
  //
  const { data: mugs, isPending } = useGetTypes();

  return (
    <ul className="flex gap-2 items-start flex-wrap justify-center h-full">
      {mugs && (
        <>
          {mugs.map((mug) => (
            <li
              key={`mug-${mug.id}`}
              className="w-[calc(100%/3-0.35rem)] h-full"
            >
              <MugCard mugType={mug} />
            </li>
          ))}
        </>
      )}
      {isPending && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              key={`mug-${index}`}
              className="animate-pulse w-auto h-4 bg-black"
            ></li>
          ))}
        </>
      )}
    </ul>
  );
};
