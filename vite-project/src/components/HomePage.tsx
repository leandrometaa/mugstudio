import React, { useState } from "react";
import { Minus, Plus, Home, ChevronRight } from "lucide-react";

// oppure
import CupViewer from "./CupViewer";

export default function HomePage() {
  const [selectedType, setSelectedType] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Grande");
  const [selectedColor, setSelectedColor] = useState("Bianco");
  const [selectedMaterial, setSelectedMaterial] = useState("Lucido");
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState("");
  const [fontSize, setFontSize] = useState("18");

  const cupTypes = [
    { id: 0, name: "Classica", value: "tazza_2" },
    { id: 1, name: "Moderna", value: "tazza_1" },
    { id: 2, name: "Vintage", value: "tazza_3" },
    { id: 3, name: "Elegante", value: "tazzina" },
    { id: 4, name: "Sportiva", value: "tazza_4" },
  ];

  const sizes = [
    { name: "Grande", height: "32cm" },
    { name: "Media", height: "24cm" },
    { name: "Piccola", height: "16cm" },
  ];

  const colors = [
    { name: "Bianco", value: "bg-white", border: "border-gray-300" },
    { name: "Nero", value: "bg-black", border: "border-black" },
    { name: "Grigio", value: "bg-gray-500", border: "border-gray-500" },
    { name: "Beige", value: "bg-yellow-100", border: "border-yellow-200" },
    { name: "Rosso", value: "bg-red-500", border: "border-red-500" },
    { name: "Blu", value: "bg-blue-600", border: "border-blue-600" },
    { name: "Verde", value: "bg-green-600", border: "border-green-600" },
    { name: "Rosa", value: "bg-pink-300", border: "border-pink-300" },
    { name: "Azzurro", value: "bg-cyan-300", border: "border-cyan-300" },
    { name: "Verde Chiaro", value: "bg-green-300", border: "border-green-300" },
  ];

  const materials = ["Lucido", "Opaco"];

  const handleQuantityChange = (change: any) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F0E8" }}>
      {/* Breadcrumb */}

      <div className="max-w-6xl mx-auto p-6">
        <div className=" px-8 py-3">
          <div
            className="flex items-center space-x-2 text-sm"
            style={{ color: "#2A2A2A" }}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Configuratore</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Left side - Product preview */}
          <div className="rounded-lg p-8">
            <div>
              <h1
                className="text-2xl font-bold mb-2"
                style={{ color: "#4B2E2B" }}
              >
                La tua tazza, le tue regole.
              </h1>
              <p className="text-gray-600 mb-8" style={{ color: "#2A2A2A" }}>
                Perché anche un sorso di caffè merita il tuo tocco personale.
              </p>

              {/* Product preview placeholder */}
              <div style={{height: "500px"}}>
                <CupViewer
                  selectedColor={selectedColor}
                  selectedMaterial={selectedMaterial}
                  selectedSize={selectedSize}
                  selectedType={cupTypes[selectedType].value}
                />
              </div>

              <button
                className="hover:bg-orange-500 text-white px-3 py-1 rounded-lg font-medium transition-colors mt-2"
                style={{ backgroundColor: "#D6A77A" }}
              >
                Bevi il caffè
              </button>
            </div>
          </div>

          {/* Right side - Configuration */}
          <div className="rounded-lg p-6 mt-24">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800">59,04€</h2>
            </div>

            {/* Tipo */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Tipo</h3>
              <p className="text-sm text-gray-600 mb-3">
                Selezionato:{" "}
                <span className="font-bold" style={{ color: "#242424" }}>
                  {cupTypes[selectedType].name}
                </span>
              </p>
              <div className="grid grid-cols-5 gap-2">
                {cupTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`aspect-square border-2 rounded-lg p-2 transition-colors ${
                      selectedType === type.id
                        ? "bg-opacity-20" // controlla l'opacità
                        : "hover:border-gray-300"
                    } ${selectedType !== type.id ? "border-gray-200" : ""}`}
                    style={
                      selectedType === type.id
                        ? {
                            borderColor: "#D6A77A",
                          }
                        : {}
                    }
                  >
                    <div className="w-full h-full bg-gray-100 rounded"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensione */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Dimensione</h3>
              <p className="text-sm text-gray-600 mb-3">
                Selezionato:{" "}
                <span className="font-bold" style={{ color: "#242424" }}>
                  {selectedSize}
                </span>
              </p>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`p-3 border-2 rounded-lg text-center transition-colors ${
                      selectedSize === size.name
                        ? "bg-opacity-20" // per rendere lo sfondo semi-trasparente
                        : "border-gray-200 hover:border-gray-300"
                    } ${selectedSize !== size.name ? "" : ""}`}
                    style={
                      selectedSize === size.name
                        ? {
                            borderColor: "#D6A77A",
                          }
                        : {}
                    }
                  >
                    <div className="font-medium">{size.name}</div>
                    <div className="text-sm text-gray-600">
                      Altezza: {size.height}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Colore */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Colore</h3>
              <p className="text-sm text-gray-600 mb-3">
                Selezionato:{" "}
                <span className="font-bold" style={{ color: "#242424" }}>
                  {selectedColor}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 ${color.value} ${
                      color.border
                    } ${
                      selectedColor === color.name ? "ring-2 ring-offset-2" : ""
                    }`}
                    style={
                      selectedColor === color.name
                        ? { boxShadow: "0 0 0 2px #D6A77A, 0 0 0 4px white" }
                        : {}
                    }
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Immagine personalizzata */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Immagine personalizzata
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                TODO:{" "}
                <span className="font-bold" style={{ color: "#242424" }}>
                  TODO
                </span>
              </p>
            </div>

            {/* Testo personalizzato */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Testo personalizzato
              </h3>

              <input
                type="text"
                placeholder="Scrivi qui il tuo testo personalizzato"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none mb-3"
                style={{
                  borderColor: "#D6A77A",
                  boxShadow: "0 0 0 2px #D6A77A",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = "0 0 0 1px #D6A77A";
                  e.target.style.borderColor = "#D6A77A";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "none";
                  e.target.style.borderColor = "#D1D5DB"; // Tailwind gray-300
                }}
              />

              <div className="flex items-center gap-2">
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  style={{
                    borderColor: "#D6A77A",
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = "0 0 0 1px #D6A77A";
                    e.target.style.borderColor = "#D6A77A";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "none";
                    e.target.style.borderColor = "#D1D5DB";
                  }}
                >
                  <option value="DynaPuff">DynaPuff</option>
                  <option value="Arial">Arial</option>
                  <option value="Times">Times</option>
                </select>

                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-16 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  min="8"
                  max="72"
                  style={{
                    borderColor: "#D6A77A",
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = "0 0 0 1px #D6A77A";
                    e.target.style.borderColor = "#D6A77A";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "none";
                    e.target.style.borderColor = "#D1D5DB";
                  }}
                />
              </div>
            </div>

            {/* Materiale */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Materiale</h3>
              <p className="text-sm text-gray-600 mb-3">
                Selezionato:{" "}
                <span className="font-bold" style={{ color: "#242424" }}>
                  {selectedMaterial}
                </span>
              </p>
              <div className="grid grid-cols-2 gap-2">
                {materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`p-3 border-2 rounded-lg text-center transition-colors ${
                      selectedMaterial !== material
                        ? "border-gray-200 hover:border-gray-300"
                        : ""
                    }`}
                    style={
                      selectedMaterial === material
                        ? {
                            borderColor: "#D6A77A",
                          }
                        : {}
                    }
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantità */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Quantità</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-medium text-lg w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                className="flex-1 bg-white py-3 px-6 rounded-lg font-medium transition-colors"
                style={{ color: "#4B2E2B" }}
              >
                Aggiungi al carrello
              </button>
              <button
                className="flex-1 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                style={{ backgroundColor: "#4B2E2B" }}
              >
                Acquista ora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
