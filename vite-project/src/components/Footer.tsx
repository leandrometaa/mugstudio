import { Logo } from './Logo.tsx';

export const Footer = () => {
  return (
    <footer className="bg-[#2A2A2A] flex gap-8 items-center justify-center min-h-24">
      <Logo />
      <p
        className="text-white text-sm opacity-80"
        style={{ fontFamily: 'Work Sans' }}
      >
        © Tutti i diritti sono riservati.
      </p>
    </footer>
  );
};
