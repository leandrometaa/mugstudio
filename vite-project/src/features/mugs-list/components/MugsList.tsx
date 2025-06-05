import { useGetTypes } from "@/hooks/hooks.ts";
import { MugCard } from "./MugCard.tsx";

export const MugsList = () => {
  // Hook con query per fetching dei tipi di tazza.
  const { data: mugs, isPending } = useGetTypes();

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {mugs && (
        <>
          {mugs.map((mug) => (
            <li key={`mug-${mug.id}`} className="">
              <MugCard mugType={mug} state="data" />
            </li>
          ))}
        </>
      )}
      {isPending && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={`mug-${index}`} className="">
              <MugCard state="pending" />
            </li>
          ))}
        </>
      )}
    </ul>
  );
};
