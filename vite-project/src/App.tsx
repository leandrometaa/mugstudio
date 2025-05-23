import { useState } from "react";
import BabylonScene from "./components/BabylonScene";
import BabylonScene2 from "./components/BabylonScene2";
import BabylonScene3 from "./components/BabylonScene3";
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
