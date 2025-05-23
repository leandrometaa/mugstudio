import React, { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";



// Dati di esempio per il carrello
const cartItems = [
  {
    id: 1,
    name: "Tazza Ceramica Blu",
    price: 15.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=100&h=100&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Tazza Personalizzata",
    price: 22.5,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=100&h=100&fit=crop&crop=center",
  },
];

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setItems(items.filter((item) => item.id !== id));
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <nav className="bg-[#6c544e] h-16 text-white font-bold text-sm py-4 px-4 flex items-center justify-evenly sticky top-0 z-50">
      {/* Logo */}
      <Logo />
      {/* Navigation Links */}
      <div className="flex gap-6 items-center text-white">
        <a href="#" className="hover:underline">
          Tazze
        </a>
        <a href="#" className="text-[#e3bb91]">
          Configuratore
        </a>
        <a href="#" className="hover:underline">
          Chi siamo
        </a>
        <a href="#" className="hover:underline">
          Contattaci
        </a>
      </div>

      {/* Icons */}
      <div className="flex gap-4 items-center text-white text-lg">
        <a href="#">
          <FaUser />
        </a>

        {/* Shopping Cart con Drawer */}
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen} >
          <SheetTrigger asChild>
            <button className="relative hover:text-[#e3bb91] transition-colors">
              <FaShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </SheetTrigger>

          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold">Carrello</SheetTitle>
              <SheetDescription>
                {items.length === 0
                  ? "Il tuo carrello è vuoto"
                  : `Hai ${totalItems} articoli nel carrello`}
              </SheetDescription>
            </SheetHeader>

            <div className="mt-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FaShoppingCart className="mx-auto text-4xl mb-4 opacity-50" />
                  <p>Il tuo carrello è vuoto</p>
                  <p className="text-sm">
                    Aggiungi alcuni prodotti per iniziare!
                  </p>
                </div>
              ) : (
                <>
                  {/* Lista articoli */}
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 border rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{item.name}</h3>
                          <p className="text-sm text-gray-600">
                            €{item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="h-8 w-8 p-0"
                          >
                            <FaMinus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-8 w-8 p-0"
                          >
                            <FaPlus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="h-8 w-8 p-0 ml-2"
                          >
                            <FaTrash className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Totale e checkout */}
                  <div className="border-t pt-4 space-y-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Totale:</span>
                      <span>€{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full bg-[#6c544e] hover:bg-[#5a453f]">
                        Procedi al Checkout
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setIsCartOpen(false)}
                      >
                        Continua Shopping
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
