import type { MugType } from '@/types/types.ts';

interface MugCardProps {
  mugType: MugType;
}

export const MugCard = ({ mugType }: MugCardProps) => {
  return (
    <div className="flex flex-col bg-[#EADBC8] rounded-lg shadow-sm">Ciao</div>
  );
};

{
  /* <div className="flex flex-1 flex-col bg-[#EADBC8] rounded-lg shadow-sm h-full">
  <div className="aspect-video bg-[#F2F2F2] flex h-36 justify-center rounded-t-lg">
    <img
      src={`/images/${mugType.model}.png`}
      alt=""
      className="object-cover p-2 h-full w-auto"
    />
  </div>
  <div className="flex flex-col flex-1 h-full">
    <h3
      className="font-medium"
      style={{ fontFamily: 'DynaPuff' }}
    >
      {mugType.name}
    </h3>
    <p className="text-sm">{mugType.description}</p>
  </div>
</div> */
}
