import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from './Logo.tsx';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAppStore } from '@/stores/store.ts';
import clsx from 'clsx';

const Navbar = () => {
  //
  const selectedPage = useAppStore((state) => state.selectedPage);
  const setSelectedPage = useAppStore((state) => state.setSelectedPage);

  //
  const handleLinkClick = (page: 'mugs' | 'configurator') => {
    setSelectedPage(page);
  };

  return (
    <header className="bg-[#6c544e] min-h-16 flex items-center justify-center">
      <nav className=" text-white font-bold text-sm items-center flex justify-center gap-36 sticky top-0 z-50">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center text-white">
          <a
            className={clsx('cursor-pointer', {
              'opacity-80 hover:opacity-100': selectedPage === 'mugs',
              'text-[#DCB690]': selectedPage === 'mugs',
            })}
            style={{ fontFamily: 'DynaPuff' }}
            onClick={() => handleLinkClick('mugs')}
          >
            Tazze
          </a>
          <a
            className={clsx('cursor-pointer', {
              'opacity-80 hover:opacity-100': selectedPage !== 'configurator',
              'text-[#DCB690]': selectedPage === 'configurator',
            })}
            style={{ fontFamily: 'DynaPuff' }}
            onClick={() => handleLinkClick('configurator')}
          >
            Configuratore
          </a>
          <a
            className="opacity-80 hover:opacity-100 cursor-pointer"
            style={{ fontFamily: 'DynaPuff' }}
          >
            Chi siamo
          </a>
          <a
            className="opacity-80 hover:opacity-100 cursor-pointer"
            style={{ fontFamily: 'DynaPuff' }}
          >
            Contattaci
          </a>
        </ul>

        {/* Icons */}
        <div className="flex gap-4 items-center text-white text-lg">
          <a>
            <FontAwesomeIcon
              icon={faUser}
              className="opacity-80 hover:opacity-100 cursor-pointer"
              style={{ fontFamily: 'DynaPuff' }}
            />
          </a>
          <a>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="opacity-80 hover:opacity-100 cursor-pointer"
              style={{ fontFamily: 'DynaPuff' }}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
