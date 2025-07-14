import { Footer } from "./components/Footer.tsx";
import { Main } from "./components/Main.tsx";
import Navbar from "./components/Navbar.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Main />
      <Footer />
      <Toaster />
    </div>
  );
}
