import { availableMaterials } from '@/constants/constants.ts';
import type { AvailableMaterial } from '@/types/types.ts';
import clsx from 'clsx';

interface MugMaterialProps {
  mugBodyMaterial: AvailableMaterial;
  setMugBodyMaterial: (material: AvailableMaterial) => void;
}

export const MugBodyMaterial = ({
  mugBodyMaterial,
  setMugBodyMaterial,
}: MugMaterialProps) => {
  /**
   *
   */
  const handleMaterialClick = (material: AvailableMaterial) => {
    setMugBodyMaterial(material);
  };

  return (
    <div>
      <div className="flex items-center gap-1">
        <span className="opacity-60">Materiale:</span>
        <span className="font-medium">{mugBodyMaterial.name}</span>
      </div>
      <ul className="flex gap-2 items-center">
        {availableMaterials.map((material) => {
          //
          const isSelected = mugBodyMaterial.code === material.code;

          return (
            <li
              key={material.code}
              className={clsx('p-2 border cursor-pointer', {
                'border-neutral-900': isSelected,
                'border-neutral-300': !isSelected,
              })}
              onClick={() => handleMaterialClick(material)}
            >
              <span>{material.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
