import React, { useState } from "react";
import { Minus, Plus, Home, ChevronRight } from "lucide-react";

// oppure
import CupViewer from "./CupViewer";

// Definisci i tipi per le dimensioni e i prezzi
type CupSizeName = "Piccola" | "Media" | "Grande" | "Espresso" | "Cappuccino" | "Latte"; // Aggiunti nomi di dimensioni più specifici

// Interfaccia per un singolo oggetto dimensione all'interno di una tazza
interface CupSizeDetail {
    name: CupSizeName;
    height: string;
    price: string;
}

// Interfaccia per gli oggetti delle tazze in cupTypes
interface CupType {
    id: number;
    name: string;
    value: string;
    sizes: CupSizeDetail[]; // Ora un array di oggetti dimensione
    supportsImage: boolean;
}

export default function HomePage({ addToCart, handleBuyClick, initialCupValue }: any) {
    // Rimosso calculatePrices function
    const cupTypes: CupType[] = [
        {
            id: 0,
            name: "Classica",
            value: "tazza_2",
            sizes: [
                { name: "Piccola", height: "5cm", price: "9,00€" },
                { name: "Media", height: "10cm", price: "10,00€" }, // Prezzo base originale per Media
                { name: "Grande", height: "15cm", price: "11,50€" },
            ],
            supportsImage: true,
        },
        {
            id: 1,
            name: "Moderna",
            value: "tazza_1",
            sizes: [
                { name: "Media", height: "16cm", price: "12,00€" }, // Prezzo base originale per Media
                { name: "Grande", height: "20cm", price: "14,00€" },
            ],
            supportsImage: true,
        },
        {
            id: 2,
            name: "Vintage",
            value: "cup2",
            sizes: [
                { name: "Piccola", height: "9cm", price: "14,50€" },
                { name: "Grande", height: "13cm", price: "16,00€" },
            ],
            supportsImage: true,
        },
        {
            id: 3,
            name: "Campione",
            value: "tazza_top",
            sizes: [
                { name: "Piccola", height: "15cm", price: "30,50€" }, // Prezzo base originale
                { name: "Grande", height: "25cm", price: "39,50€" },
            ],
            supportsImage: true,
        },
        {
            id: 4,
            name: "Sportiva",
            value: "tazza_4",
            sizes: [
                { name: "Media", height: "10cm", price: "11,00€" }, // Prezzo base originale
                { name: "Grande", height: "15cm", price: "13,00€" },
            ],
            supportsImage: true,
        },


    ];

    // Trova l'indice della tazza iniziale basato su initialCupValue, altrimenti usa 0
    const initialTypeIndex = initialCupValue
        ? cupTypes.findIndex(cup => cup.value === initialCupValue)
        : 0;

    // Trova il nome della dimensione iniziale: la prima dimensione della tazza selezionata
    const initialSizeName = cupTypes[initialTypeIndex].sizes[0].name;

    const [selectedType, setSelectedType] = useState(initialTypeIndex); // Usa l'indice trovato
    const [selectedSize, setSelectedSize] = useState<CupSizeName>(initialSizeName); // Usa il nome della dimensione iniziale
    const [selectedColor, setSelectedColor] = useState("Bianco");
    const [selectedMaterial, setSelectedMaterial] = useState("Lucido");
    const [quantity, setQuantity] = useState(1);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [customColor, setCustomColor] = useState("#FFFFFF");
    const [imageSize, setImageSize] = useState(1);
    const [selectedTexture, setSelectedTexture] = useState<string | null>(null);

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
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && cupTypes[selectedType].supportsImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
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
                            <div style={{ height: "500px" }}>
                                <CupViewer
                                    selectedColor={
                                        selectedColor === "Arcobaleno" ? customColor : selectedColor
                                    }
                                    selectedMaterial={selectedMaterial}
                                    selectedSize={selectedSize}
                                    selectedType={cupTypes[selectedType].value}
                                    uploadedImage={uploadedImage}
                                    imageSize={imageSize}
                                    selectedTexture={selectedTexture}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Configuration */}
                    <div
                        className="rounded-lg p-6 mt-24 border-2 overflow-y-scroll"
                        style={{ height: "600px" }}
                    >
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-gray-800">
                                {cupTypes[selectedType].sizes.find(size => size.name === selectedSize)?.price} {/* Trova e mostra il prezzo in base alla dimensione selezionata */}
                            </h2>
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
                                        onClick={() => {
                                            setSelectedType(type.id);
                                            // Reset selected size to the first size of the newly selected cup type
                                            if (cupTypes[type.id]?.sizes.length > 0) {
                                                setSelectedSize(cupTypes[type.id].sizes[0].name);
                                            }
                                        }}
                                        className={`aspect-square border-2 rounded-lg p-2 transition-colors ${selectedType === type.id
                                            ? "bg-opacity-20"
                                            : "hover:border-gray-300"
                                            } ${selectedType !== type.id ? "border-gray-200" : ""}`}
                                        style={
                                            selectedType === type.id
                                                ? { borderColor: "#D6A77A" }
                                                : {}
                                        }
                                    >
                                        <div className="w-full h-full bg-gray-100 rounded">
                                            <img
                                                src={`/mugstudio/images/${type.value}.png`}
                                                alt={type.name}
                                                className="w-full h-full object-cover rounded"
                                            />
                                        </div>
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
                            <div className={`grid grid-cols-${cupTypes[selectedType].sizes.length} gap-2`}> {/* Griglia dinamica per le dimensioni */}
                                {cupTypes[selectedType].sizes.map((size) => (
                                    <button
                                        key={size.name}
                                        onClick={() => setSelectedSize(size.name)}
                                        className={`p-3 border-2 rounded-lg text-center transition-colors ${selectedSize === size.name
                                            ? "bg-opacity-20"
                                            : "border-gray-200 hover:border-gray-300"
                                            } ${selectedSize !== size.name ? "" : ""}`}
                                        style={
                                            selectedSize === size.name
                                                ? { borderColor: "#D6A77A" }
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
                                    {selectedColor === "Arcobaleno" ? customColor : selectedColor}
                                </span>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => {
                                            setSelectedColor(color.name);
                                            setUploadedImage(null);
                                            setSelectedTexture(null);
                                        }}
                                        className={`w-8 h-8 rounded-full border-2 ${color.value} ${color.border
                                            } ${selectedColor === color.name ? "ring-2 ring-offset-2" : ""}`}
                                        style={
                                            color.name === "Arcobaleno"
                                                ? {
                                                    backgroundImage:
                                                        "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
                                                    borderColor:
                                                        selectedColor === "Arcobaleno"
                                                            ? "#D6A77A"
                                                            : "gray",
                                                    boxShadow:
                                                        selectedColor === "Arcobaleno"
                                                            ? "0 0 0 2px #D6A77A, 0 0 0 4px white"
                                                            : "none",
                                                }
                                                : selectedColor === color.name
                                                    ? { boxShadow: "0 0 0 2px #D6A77A, 0 0 0 4px white" }
                                                    : {}
                                        }
                                        title={color.name}
                                    />
                                ))}
                            </div>
                            {selectedColor === "Arcobaleno" && (
                                <div className="mt-4">
                                    <label
                                        htmlFor="customColorPicker"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Scegli un colore:
                                    </label>
                                    <input
                                        id="customColorPicker"
                                        type="color"
                                        value={customColor}
                                        onChange={(e) => setCustomColor(e.target.value)}
                                        className="w-full h-10 rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Texture */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-gray-800 mb-2">Texture</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Selezionato:{" "}
                                <span className="font-bold" style={{ color: "#242424" }}>
                                    {selectedTexture ? selectedTexture.replace(".png", "").replace("texture_", "Texture ") : "Nessuna"}
                                </span>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["texture_1.jpg", "texture_2.jpg", "texture_3.jpg", "texture_4.jpg", "texture_5.jpg"].map((texture) => (
                                    <button
                                        key={texture}
                                        onClick={() => {
                                            setSelectedTexture(selectedTexture === texture ? null : texture);
                                            setUploadedImage(null);
                                            setSelectedColor("Nessuno");
                                        }}
                                        className={`w-8 h-8 rounded-full border-2 overflow-hidden ${selectedTexture === texture ? "ring-2 ring-offset-2" : "border-gray-200 hover:border-gray-300"}                                      }`}
                                        style={{
                                            boxShadow: selectedTexture === texture ? "0 0 0 2px #D6A77A, 0 0 0 4px white" : "none"
                                        }}
                                        title={texture.replace(".jpg", "").replace("texture_", "Texture ")}
                                    >
                                        <div className="w-full h-full">
                                            <img
                                                src={`/mugstudio/images/textures/${texture}`}
                                                alt={texture.replace(".jpg", "").replace("texture_", "Texture ")}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Immagine personalizzata */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-gray-800 mb-2">
                                Immagine personalizzata
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                {cupTypes[selectedType].supportsImage
                                    ? "Allega un'immagine da visualizzare sulla tazza."
                                    : "L'immagine personalizzata non è disponibile per questo tipo di tazza."}
                            </p>
                            {cupTypes[selectedType].supportsImage ? (
                                <>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        id="imageUploadInput"
                                        className="hidden"
                                    />
                                    <div className="flex items-center gap-2">
                                        <label
                                            htmlFor="imageUploadInput"
                                            className="inline-block bg-white border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
                                        >
                                            Carica Immagine
                                        </label>
                                        {uploadedImage && (
                                            <button
                                                onClick={() => setUploadedImage(null)}
                                                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors"
                                                title="Rimuovi immagine"
                                            >
                                                X
                                            </button>
                                        )}
                                    </div>
                                    {uploadedImage && (
                                        <>
                                            <p className="mt-2 text-sm text-gray-600">
                                                Immagine caricata pronta per l'anteprima.
                                            </p>
                                            <div className="mt-2">
                                                <label htmlFor="imageSize" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Dimensione immagine: {Math.round(imageSize * 100)}%
                                                </label>
                                                <input
                                                    type="range"
                                                    id="imageSize"
                                                    min="0.1"
                                                    max="2"
                                                    step="0.1"
                                                    value={imageSize}
                                                    onChange={(e) => setImageSize(parseFloat(e.target.value))}
                                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                />
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <p className="text-sm text-gray-500 italic">
                                    Questa tazza supporta solo colori personalizzati.
                                </p>
                            )}
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
                                        className={`p-3 border-2 rounded-lg text-center transition-colors ${selectedMaterial !== material
                                            ? "border-gray-200 hover:border-gray-300"
                                            : ""
                                            }`}
                                        style={
                                            selectedMaterial === material
                                                ? { borderColor: "#D6A77A" }
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
                        <div
                            className="flex gap-3  p-2 rounded-lg bg-[#D6A77A]"
                            style={{ position: "sticky", bottom: 0 }}
                        >
                            <button
                                className="flex-1 bg-white py-3 px-6 rounded-lg font-medium transition-colors  border-2"
                                style={{ color: "#4B2E2B" }}
                                onClick={() => {
                                    const selectedCup = cupTypes[selectedType];
                                    // Trova l'oggetto dimensione selezionata
                                    const selectedSizeDetail = selectedCup.sizes.find(size => size.name === selectedSize);

                                    const item = {
                                        id: `${selectedCup.value}-${selectedColor}-${selectedSize}-${selectedMaterial}`, // chiave unica
                                        name: `Tazza ${selectedCup.name} ${selectedColor === "Nessuno" ? "" : selectedColor} ${selectedTexture === null ? "" : selectedTexture} ${selectedSize} ${selectedMaterial}`,
                                        price: parseFloat(selectedSizeDetail?.price.replace(',', '.') || '0'), // Usa il prezzo della dimensione trovata
                                        quantity: quantity,
                                        image: `/mugstudio/images/${selectedCup.value}.png`,
                                    };
                                    addToCart(item);
                                }}
                            >
                                Aggiungi al carrello
                            </button>
                            <button
                                className="flex-1 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                                style={{ backgroundColor: "#4B2E2B" }}
                                onClick={handleBuyClick}
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
