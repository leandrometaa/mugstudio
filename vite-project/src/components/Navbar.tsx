import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from './Logo.tsx';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAppStore } from '@/stores/appStore.ts';
import clsx from 'clsx';
import { CartSheet } from '../features/cart/components/CartSheet.tsx';

const Navbar = () => {
  // Ottiene selectedPage e setSelectedPage dallo store Zustand.
  const selectedPage = useAppStore((state) => state.selectedPage);
  const setSelectedPage = useAppStore((state) => state.setSelectedPage);

  /**
   * Gestisce il click sul link della Navbab.
   * @param page Il nome della pagina associata al link.
   */
  const handleLinkClick = (page: 'mugs' | 'configurator') => {
    setSelectedPage(page);
  };

  return (
    <header className="flex min-h-16 items-center justify-center bg-[#6c544e]">
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full px-4 md:px-8 lg:px-16 py-2 text-sm font-bold text-white">
        <Logo />
        {/* Navigation links - hidden on small, visible on medium+ */}
        <ul className="hidden md:flex items-center gap-6 text-white">
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
            className="cursor-pointer opacity-80 hover:opacity-100"
            style={{ fontFamily: 'DynaPuff' }}
          >
            Chi siamo
          </a>
          <a
            className="cursor-pointer opacity-80 hover:opacity-100"
            style={{ fontFamily: 'DynaPuff' }}
          >
            Contattaci
          </a>
        </ul>
        <div className="flex items-center gap-4 text-lg text-white">
          <a>
            <FontAwesomeIcon
              icon={faUser}
              className="cursor-pointer opacity-80 hover:opacity-100"
              style={{ fontFamily: 'DynaPuff' }}
            />
          </a>
          <a>
            <CartSheet />
          </a>
        </div>
        {/* Placeholder for mobile menu toggle */}
        <div className="md:hidden">
          {/* Hamburger icon or similar will go here */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
