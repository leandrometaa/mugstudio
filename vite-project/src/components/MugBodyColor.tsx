import { availableColors } from '@/constants/constants.ts';
import type { AvailableColor } from '@/types/types.ts';
import clsx from 'clsx';

interface MugBodyColorProps {
  mugBodyColor: AvailableColor;
  setMugBodyColor: (color: AvailableColor) => void;
}

export const MugBodyColor = ({
  mugBodyColor,
  setMugBodyColor,
}: MugBodyColorProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <span className="opacity-60">Colore:</span>
        <span className="font-medium">{mugBodyColor.name}</span>
      </div>
      <ul
        style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '12px' }}
      >
        {availableColors.map((color) => {
          const isSelected = mugBodyColor.code === color.code;
          return (
            <li key={color.id}>
              <input
                type="radio"
                id={color.id}
                name="mugColor"
                value={color.code}
                checked={isSelected}
                onChange={(e) => {
                  const selected = availableColors.find(
                    (color) => color.code === e.target.value,
                  );

                  if (selected) setMugBodyColor(selected);
                }}
                className="hidden"
              />
              <label
                htmlFor={color.id}
                className="cursor-pointer"
              >
                <div
                  style={{ backgroundColor: color.code }}
                  className={clsx(`h-8 w-12 border`, {
                    'border-neutral-900': isSelected,
                    'border-neutral-300': !isSelected,
                  })}
                  title={color.name}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
