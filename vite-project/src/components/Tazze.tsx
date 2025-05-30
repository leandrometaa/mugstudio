import React from "react";
import { Home, ChevronRight } from "lucide-react";

// Definiamo i dati delle tazze
const cupData = [
  {
    id: 0,
    name: "Classica",
    value: "tazza_2",
    image: "/images/tazza_2.png",
    description:
      "Una tazza dal design semplice e pulito, ideale per ogni momento della giornata.",
  },
  {
    id: 1,
    name: "Moderna",
    value: "tazza_1",
    image: "/images/tazza_1.png",
    description: "Linee decise e stile contemporaneo per chi ama distinguersi.",
  },
  {
    id: 2,
    name: "Vintage",
    value: "cup2",
    image: "/images/cup2.png",
    description: "Un tocco retrò con un fascino intramontabile.",
  },
  {
    id: 3,
    name: "Campione",
    value: "tazza_top",
    image: "/images/tazza_top.png",
    description: "La tazza per la colazione dei veri campioni.",
  },
  {
    id: 4,
    name: "Sportiva",
    value: "tazza_4",
    image: "/images/tazza_4.png",
    description:
      "Design ergonomico e presa sicura per uno stile di vita attivo.",
  },
  // Aggiungi qui altre tazze se necessario
];

interface TazzePageProps {
  onSelectCup: (cupValue: string) => void;
}

const TazzePage: React.FC<TazzePageProps> = ({ onSelectCup }) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="max-w-6xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className=" px-8 py-3">
          <div
            className="flex items-center space-x-2 text-sm"
            style={{ color: "#2A2A2A" }}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Tazze</span>
          </div>
        </div>

        <h1
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "#4B2E2B" }}
        >
          Scegli la tua tazza
        </h1>

        {/* Griglia delle tazze */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cupData.map((cup) => (
            <div
              key={cup.id}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              style={{ backgroundColor: "#F2F2F2" }}
              onClick={() => onSelectCup(cup.value)}
            >
              <img
                src={cup.image}
                alt={cup.name}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h3
                  className="font-semibold text-lg mb-1"
                  style={{ color: "#4B2E2B" }}
                >
                  {cup.name}
                </h3>
                <p className="text-sm text-gray-600">{cup.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TazzePage;
