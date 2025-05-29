import { useGetTypes } from "@/hooks/hooks.ts";
import { MugCard } from "./MugCard.tsx";

export const MugsList = () => {
  //
  const { data: mugs, isPending } = useGetTypes();

  return (
    <ul className="flex gap-2">
      {mugs && (
        <>
          {mugs.map((mug) => (
            <li key={`mug-${mug.id}`} className="h-61 w-[calc(100%/5-0.3rem)]">
              <MugCard mugType={mug} state="data" />
            </li>
          ))}
        </>
      )}
      {isPending && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={`mug-${index}`} className="h-61 w-[calc(100%/5-0.3rem)]">
              <MugCard state="pending" />
            </li>
          ))}
        </>
      )}
    </ul>
  );
};
