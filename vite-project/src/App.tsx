import Navbar from "./components/Navbar";
import "./App.css";
import { Footer } from "./components/Footer.tsx";
import HomePage from "./components/HomePage";
import React, { useState } from "react";
import { Toaster } from "sonner";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item: any) => {
    setCartItems((prevItems: any) => {
      const existing = prevItems.find((i: any) => i.id === item.id);
      if (existing) {
        return prevItems.map((i: any) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
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
      prev.map((item: any) =>
        item.id === id ? { ...item, quantity } : item
      ).filter((item: any) => item.quantity > 0)
    );
  };
  return (
    <div>
      <Navbar
        items={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeFromCart}
      />
      <HomePage addToCart={addToCart} />
      <Footer />
      <Toaster />
    </div>
  );
}
