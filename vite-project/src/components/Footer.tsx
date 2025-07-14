import { Logo } from "./Logo.tsx";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 bg-[#2A2A2A] px-6 py-4 mt-8 rounded-t-2xl shadow-inner">
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <p
        className="text-sm text-white opacity-80 text-center sm:text-left"
        style={{ fontFamily: "Work Sans" }}
      >
        © Tutti i diritti sono riservati.
      </p>
    </footer>
  );
};