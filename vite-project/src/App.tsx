import { useState } from 'react';
import BabylonScene from './components/BabylonScene';
import BabylonScene2 from './components/BabylonScene2';
import BabylonScene3 from './components/BabylonScene3';
import Navbar from './components/Navbar';
import './App.css';
import { Footer } from './components/Footer.tsx'; import HomePage from './components/HomePage';


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

// interface AvailableColors {
//   id: string;
//   name: string;
//   code: string;
// }

// const availableColors: AvailableColors[] = [
//   { id: "red", name: "Rosso", code: "#ff0000" },
//   { id: "green", name: "Verde", code: "#00ff00" },
//   { id: "blue", name: "Blu", code: "#0000ff" },
//   { id: "white", name: "Bianco", code: "#ffffff" },
// ];

export default function App() {
  // const [selectedColor, setSelectedColor] = useState<AvailableColors["code"]>(
  //   availableColors[0].code
  // );

  // const [manicoColor, setManicoColor] = useState("#808080");
  // const [baseColor, setBaseColor] = useState("#808080");
  // const [cylinderColor, setCylinderColor] = useState("#808080");

  // const [manicoMetallic, setManicoMetallic] = useState(0.3);
  // const [manicoRoughness, setManicoRoughness] = useState(0.5);

  // const [baseMetallic, setBaseMetallic] = useState(0.1);
  // const [baseRoughness, setBaseRoughness] = useState(0.9);

  // const [cylinderMetallic, setCylinderMetallic] = useState(0.7);
  // const [cylinderRoughness, setCylinderRoughness] = useState(0.3);

  return (
    <div>
      <Navbar />
      <HomePage />
      {/* <ul
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
      <BabylonScene selectedColor={selectedColor} /> */}
      {/* <div style={{ height: '100vh', width: '100vw' }}>
        <BabylonScene3 />
      </div> */}

      {/* <div style={{ display: "flex" }}>
        <div>
          <BabylonScene2
            handleMaterialParams={{
              metallic: manicoMetallic,
              roughness: manicoRoughness,
              albedoColor: manicoColor,
            }}
            baseMaterialParams={{
              metallic: baseMetallic,
              roughness: baseRoughness,
              albedoColor: baseColor,
            }}
            cylinderMaterialParams={{
              metallic: cylinderMetallic,
              roughness: cylinderRoughness,
              albedoColor: cylinderColor,
            }}
          />
        </div>

        <div
        className="flex flex-wrap gap-2"
          // style={{
          //   padding: "1rem",
          //   overflow: "auto",
          // }}
        >
          <div className="border flex flex-col ">
            <h3 className="bg-slate-200 text-center">Manico</h3>
            <SketchPicker
              color={manicoColor}
              onChangeComplete={(color) => setManicoColor(color.hex)}
            />
            <label>Metallic: {manicoMetallic}</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={manicoMetallic}
              onChange={(e) => setManicoMetallic(parseFloat(e.target.value))}
            />
            <label>Roughness: {manicoRoughness}</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={manicoRoughness}
              onChange={(e) => setManicoRoughness(parseFloat(e.target.value))}
            />
          </div>

          <div className="border flex flex-col">
            <h3 className="bg-slate-200 text-center" >Base</h3>
            <SketchPicker
              color={baseColor}
              onChangeComplete={(color) => setBaseColor(color.hex)}
            />
            <label>Metallic: {baseMetallic}</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={baseMetallic}
              onChange={(e) => setBaseMetallic(parseFloat(e.target.value))}
            />
            <label>Roughness: {baseRoughness}</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={baseRoughness}
              onChange={(e) => setBaseRoughness(parseFloat(e.target.value))}
            />
          </div>

          <div className="border flex flex-col" >
            <h3 className="bg-slate-200 text-center" >Cilindro</h3>
            <SketchPicker
              color={cylinderColor}
              onChangeComplete={(color) => setCylinderColor(color.hex)}
            />
            <label>Metallic: {cylinderMetallic}</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={cylinderMetallic}
              onChange={(e) => setCylinderMetallic(parseFloat(e.target.value))}
            />
            <label>Roughness: {cylinderRoughness}</label>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={cylinderRoughness}
              onChange={(e) => setCylinderRoughness(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
