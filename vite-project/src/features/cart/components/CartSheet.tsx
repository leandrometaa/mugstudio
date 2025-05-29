import { BuyButton } from "@/features/cart/components/BuyButton.tsx";
import { CartItemList } from "@/features/cart/components/CartItemList.tsx";
import { useAppStore } from "@/stores/appStore.ts";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
} from "../../../components/ui/sheet.tsx";

export const CartSheet = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const cartItems = useAppStore((state) => state.cartItems);
  const cartPrice = useAppStore((state) => state.cartPrice);

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

      <SheetContent className="w-[400px] border-none bg-[#F5F0E8] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle
            className="text-xl font-semibold text-[#4B2E2B]"
            style={{ fontFamily: "DynaPuff" }}
          >
            Carrello
          </SheetTitle>
          {cartItems.length > 0 && (
            <SheetDescription className="text-black opacity-80">
              <p>
                {cartItems.length > 1
                  ? `Hai ${cartItems.length} articoli nel carrelli.`
                  : `Hai ${cartItems.length} articolo nel carrello.`}
              </p>
            </SheetDescription>
          )}
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
          <CartItemList />
        )}
        {cartItems.length > 0 && (
          <SheetFooter className="bg-[#2A2A2A]">
            <div className="mt-4 flex items-center justify-between px-4">
              <div className="flex items-center gap-1">
                <span className="text-white">Totale:</span>
                <span className="font-medium text-[#e3bb91]">
                  {cartPrice.toFixed(2)} €
                </span>
              </div>
              <BuyButton />
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
