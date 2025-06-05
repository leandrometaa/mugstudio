import { Logo } from "./Logo.tsx";

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row min-h-16 items-center justify-center gap-2 sm:gap-8 bg-[#2A2A2A] p-4">
      <Logo />
      <p
        className="text-sm text-white opacity-80"
        style={{ fontFamily: "Work Sans" }}
      >
        © Tutti i diritti sono riservati.
      </p>
    </footer>
  );
};
