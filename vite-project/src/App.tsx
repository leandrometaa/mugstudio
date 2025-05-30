import { Toaster } from "sonner";
import { Footer } from "./components/Footer.tsx";
import { Main } from "./components/Main.tsx";
import Navbar from "./components/Navbar.tsx";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState("tazze");
  const [selectedCupValue, setSelectedCupValue] = useState<string | null>(null);

  const handleBuyClick = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString("it-IT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    toast.custom((t: any) => (
      <div
        className="rounded bg-[#4B2E2B] px-4 py-3 text-white shadow-lg"
        onClick={() => toast.dismiss(t.id)}
      >
        <p className="font-bold">Acquisto effettuato</p>
        <p className="text-sm text-white opacity-80">{formattedDate}</p>
      </div>
    ));
  };

  const addToCart = (item: any) => {
    setCartItems((prevItems: any) => {
      const existing = prevItems.find((i: any) => i.id === item.id);
      if (existing) {
        return prevItems.map((i: any) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
        );
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (id: any) => {
    setCartItems((prev: any) => prev.filter((item: any) => item.id !== id));
  };

  const updateQuantity = (id: any, quantity: any) => {
    setCartItems((prev: any) =>
      prev
        .map((item: any) => (item.id === id ? { ...item, quantity } : item))
        .filter((item: any) => item.quantity > 0),
    );
  };

  const handleSelectCup = (cupValue: string) => {
    setSelectedCupValue(cupValue);
    setCurrentPage("configuratore");
  };

  const handleGoToTazze = () => {
    setCurrentPage("tazze");
    setSelectedCupValue(null);
  };

  const handleGoToConfiguratore = () => {
    setCurrentPage("configuratore");
  };

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
      <Toaster />
    </>
  );
}
