import Navbar from "./components/Navbar";
import "./App.css";
import { Footer } from "./components/Footer.tsx";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
