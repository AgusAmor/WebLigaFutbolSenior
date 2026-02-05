import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-navy text-white shadow-lg fixed w-full z-50 border-b-2 border-sky/40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-1">
          {/* Logo placeholder if image is added later, for now text */}
          <img src={logo} alt="Logo" className="w-20 h-auto" />
          <div className="text-2xl font-bold tracking-tight text-gold">
            LIGA FUTBOL SENIOR
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center font-medium">
          <a
            href="#info"
            className="hover:text-sky transition-colors hover:border-b-2 hover:border-sky pb-1"
          >
            Información
          </a>
          <a
            href="#inscripcion"
            className="text-gold hover:text-sky transition-colors hover:border-b-2 hover:border-sky pb-1"
          >
            Inscripción
          </a>
          <a
            href="#contacto"
            className="hover:text-sky transition-colors hover:border-b-2 hover:border-sky pb-1"
          >
            Contacto
          </a>
          <div className="flex flex-col text-right text-sm border-l-2 border-sky/50 pl-4">
            <a
              href="mailto:ligadefutbolsenior@gmail.com"
              target="_blank"
              className="text-sky hover:text-gold transition-colors"
            >
              ligadefutbolsenior@gmail.com
            </a>
            <a
              href="https://wa.me/5491126590237"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky hover:text-gold transition-colors"
            >
              +549 11 2659-0237
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy p-4 absolute w-full shadow-xl border-t-2 border-sky/40">
          <nav className="flex flex-col space-y-4">
            <a
              href="#info"
              className="block py-2 hover:text-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Información
            </a>
            <a
              href="#inscripcion"
              className="block py-2 hover:text-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Inscripción
            </a>
            <a
              href="#contacto"
              className="block py-2 hover:text-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <div className="border-t border-gray-700 pt-4 text-sm space-y-2">
              <a
                href="mailto:ligadefutbolsenior@gmail.com"
                className="block text-sky hover:text-gold transition-colors"
              >
                ligadefutbolsenior@gmail.com
              </a>
              <a
                href="https://wa.me/5491126590237"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sky hover:text-gold transition-colors"
              >
                +549 11 2659-0237
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
