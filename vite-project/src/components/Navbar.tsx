import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "./Logo.tsx";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAppStore } from "@/stores/appStore.ts";
import clsx from "clsx";
import { CartSheet } from "../features/cart/components/CartSheet.tsx";

const Navbar = () => {
  //
  const selectedPage = useAppStore((state) => state.selectedPage);
  const setSelectedPage = useAppStore((state) => state.setSelectedPage);

  //
  const handleLinkClick = (page: "mugs" | "configurator") => {
    setSelectedPage(page);
  };

  return (
    <header className="flex min-h-16 items-center justify-center bg-[#6c544e]">
      <nav className="sticky top-0 z-50 flex items-center justify-center gap-36 text-sm font-bold text-white">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-white">
          <a
            className={clsx("cursor-pointer", {
              "opacity-80 hover:opacity-100": selectedPage === "mugs",
              "text-[#DCB690]": selectedPage === "mugs",
            })}
            style={{ fontFamily: "DynaPuff" }}
            onClick={() => handleLinkClick("mugs")}
          >
            Tazze
          </a>
          <a
            className={clsx("cursor-pointer", {
              "opacity-80 hover:opacity-100": selectedPage !== "configurator",
              "text-[#DCB690]": selectedPage === "configurator",
            })}
            style={{ fontFamily: "DynaPuff" }}
            onClick={() => handleLinkClick("configurator")}
          >
            Configuratore
          </a>
          <a
            className="cursor-pointer opacity-80 hover:opacity-100"
            style={{ fontFamily: "DynaPuff" }}
          >
            Chi siamo
          </a>
          <a
            className="cursor-pointer opacity-80 hover:opacity-100"
            style={{ fontFamily: "DynaPuff" }}
          >
            Contattaci
          </a>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-lg text-white">
          <a>
            <FontAwesomeIcon
              icon={faUser}
              className="cursor-pointer opacity-80 hover:opacity-100"
              style={{ fontFamily: "DynaPuff" }}
            />
          </a>
          <a>
            <CartSheet />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
