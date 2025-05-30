import { Footer } from "./components/Footer.tsx";
import { Main } from "./components/Main.tsx";
import Navbar from "./components/Navbar.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
      <Toaster />
    </>
  );
}
