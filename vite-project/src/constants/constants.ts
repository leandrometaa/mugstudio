import type { AvailableColor } from '@/types/types.ts';

export const availableColors: AvailableColor[] = [
  { id: 'red', name: 'Rosso', code: '#ff5050' },
  { id: 'green', name: 'Verde', code: '#52ff52' },
  { id: 'blue', name: 'Blu', code: '#5252ff' },
  { id: 'white', name: 'Bianco', code: '#ffffff' },
];

export const availableMaterials = [
  { code: 'glossy', name: 'Lucido' },
  {
    code: 'matte',
    name: 'Opaco',
  },
];
