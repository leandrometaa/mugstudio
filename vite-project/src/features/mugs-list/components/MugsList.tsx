import { useGetTypes } from "@/hooks/hooks.ts";
import { MugCard } from "./MugCard.tsx";

export const MugsList = () => {
  // Hook con query per fetching dei tipi di tazza.
  const { data: mugs, isPending } = useGetTypes();

  return (
    <ul className="flex h-fit gap-2">
      {mugs && (
        <>
          {mugs.map((mug) => (
            <li key={`mug-${mug.id}`} className="h-66 w-[calc(100%/5-0.3rem)]">
              <MugCard mugType={mug} state="data" />
            </li>
          ))}
        </>
      )}
      {isPending && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={`mug-${index}`} className="h-66 w-[calc(100%/5-0.3rem)]">
              <MugCard state="pending" />
            </li>
          ))}
        </>
      )}
    </ul>
  );
};
