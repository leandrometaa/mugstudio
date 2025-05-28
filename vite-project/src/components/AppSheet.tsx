import { CartItemList } from "@/features/cart/components/CartItemList.tsx";
import { useAppStore } from "@/stores/appStore.ts";
import { faCheck, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet.tsx";
import { toast } from "sonner";

export const AppSheet = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const cartItems = useAppStore((state) => state.cartItems);
  const setCartItems = useAppStore((state) => state.setCartItems);
  const cartPrice = useAppStore((state) => state.cartPrice);
  const setCartPrice = useAppStore((state) => state.setCartPrice);

  const handleBuyButton = () => {
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
        className="flex items-center gap-4 rounded-lg bg-[#4B2E2B] px-4 py-3 text-white shadow-sm"
        onClick={() => toast.dismiss(t.id)}
      >
        <div className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-white p-2">
          <FontAwesomeIcon icon={faCheck} color={"#4B2E2B"} />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">Acquisto effettuato</p>
          <p className="text-xs text-white opacity-80">{formattedDate}</p>
        </div>
      </div>
    ));

    setCartItems([]);
    setCartPrice();
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <button className="relative cursor-pointer opacity-80 hover:opacity-100">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {cartItems.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle
            className="text-xl font-semibold text-[#4B2E2B]"
            style={{ fontFamily: "DynaPuff" }}
          >
            Carrello
          </SheetTitle>
          <SheetDescription>
            {cartItems.length > 0 && (
              <>
                {
                  <p>
                    {cartItems.length > 1
                      ? `Hai ${cartItems.length} articoli nel carrelli.`
                      : `Hai ${cartItems.length} articolo nel carrello.`}
                  </p>
                }
              </>
            )}
          </SheetDescription>
        </SheetHeader>
        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 font-medium">
              <FontAwesomeIcon icon={faShoppingCart} size="2xl" />
              <span>Il tuo carrello è vuoto.</span>
            </div>
            <p className="oapcity-80 text-sm">
              Aggiungi alcuni prodotti per iniziare!
            </p>
          </div>
        ) : (
          <CartItemList cartItems={cartItems} />
        )}
        {cartItems.length > 0 && (
          <SheetFooter>
            <div className="mt-4 flex items-center justify-between px-4">
              <p className="text-lg font-semibold">
                Totale:
                <span className="text-[#e3bb91]">{cartPrice.toFixed(2)} €</span>
              </p>
              <button
                className="rounded-lg bg-[#4B2E2B] px-4 py-2 font-medium text-white transition-colors hover:opacity-90"
                onClick={handleBuyButton}
              >
                Acquista ora
              </button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
