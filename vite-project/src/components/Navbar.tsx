import { FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#6c544e] h-16  text-white font-bold text-sm py-4 px-4 flex items-center justify-evenly">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">☕</span>
        <div className="leading-tight">
          <div className="text-base">MyMug</div>
          <div className="text-xs">Studio</div>
        </div>
      </div>

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
        <a href="">
          <FaShoppingCart />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
