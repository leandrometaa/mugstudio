// import "./App.css";

// function App() {
//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';
import BabylonScene from './components/BabylonScene';
import { MugBodyColor } from './components/MugBodyColor.tsx';
import { availableColors, availableMaterials } from './constants/constants.ts';
import type { AvailableColor, AvailableMaterial } from './types/types.ts';
import { MugBodyMaterial } from './components/MugMaterial.tsx';

export default function App() {
  const [mugBodyColor, setMugBodyColor] = useState<AvailableColor>(
    availableColors[0],
  );

  const [mugBodyMaterial, setMugBodyMaterial] = useState<AvailableMaterial>(
    availableMaterials[0],
  );

  return (
    <div className="flex gap-4 p-4">
      <BabylonScene
        mugBodyColor={mugBodyColor.code}
        mugBodyMaterial={mugBodyMaterial.code}
      />
      <div className="flex flex-col gap-4">
        <MugBodyColor
          mugBodyColor={mugBodyColor}
          setMugBodyColor={setMugBodyColor}
        />
        <MugBodyMaterial
          mugBodyMaterial={mugBodyMaterial}
          setMugBodyMaterial={setMugBodyMaterial}
        />
      </div>
    </div>
  );
}
