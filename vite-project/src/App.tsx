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

interface AvailableColors {
  id: string;
  name: string;
  code: string;
}

const availableColors: AvailableColors[] = [
  { id: 'red', name: 'Rosso', code: '#ff0000' },
  { id: 'green', name: 'Verde', code: '#00ff00' },
  { id: 'blue', name: 'Blu', code: '#0000ff' },
  { id: 'white', name: 'Bianco', code: '#ffffff' },
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState<AvailableColors['code']>(
    availableColors[0].code,
  );

  return (
    <div>
      <ul
        style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '12px' }}
      >
        {availableColors.map((color) => {
          const isSelected = selectedColor === color.code;
          return (
            <li key={color.id}>
              <input
                type="radio"
                id={color.id}
                name="mugColor"
                value={color.code}
                checked={isSelected}
                onChange={(e) => setSelectedColor(e.target.value)}
                style={{ display: 'none' }} // Hide the native radio
              />
              <label
                htmlFor={color.id}
                style={{ cursor: 'pointer' }}
              >
                <div
                  style={{
                    height: '32px',
                    width: '32px',
                    backgroundColor: color.code,
                    border: isSelected
                      ? '3px solid #333'
                      : '1px solid lightgray',
                    borderRadius: '4px',
                    boxShadow: isSelected
                      ? '0 0 2px rgba(0, 0, 0, 0.4)'
                      : 'none',
                  }}
                  title={color.name}
                />
              </label>
            </li>
          );
        })}
      </ul>
      <BabylonScene selectedColor={selectedColor} />
    </div>
  );
}
