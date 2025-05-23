import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from './Logo.tsx';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-[#6c544e] min-h-16 text-white font-bold text-sm items-center flex justify-center gap-36 sticky top-0 z-50">
      {/* Logo */}
      <Logo />

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center text-white">
        <a
          href="#"
          className="opacity-60 hover:opacity-100"
          style={{ fontFamily: 'DynaPuff' }}
        >
          Tazze
        </a>
        <a
          href="#"
          className="text-[#DCB690]"
          style={{ fontFamily: 'DynaPuff' }}
        >
          Configuratore
        </a>
        <a
          href="#"
          className="opacity-60 hover:opacity-100"
          style={{ fontFamily: 'DynaPuff' }}
        >
          Chi siamo
        </a>
        <a
          href="#"
          className="opacity-60 hover:opacity-100"
          style={{ fontFamily: 'DynaPuff' }}
        >
          Contattaci
        </a>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 items-center text-white text-lg">
        <a href="#">
          <FontAwesomeIcon
            icon={faUser}
            className="opacity-60 hover:opacity-100"
            style={{ fontFamily: 'DynaPuff' }}
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="opacity-60 hover:opacity-100"
            style={{ fontFamily: 'DynaPuff' }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
