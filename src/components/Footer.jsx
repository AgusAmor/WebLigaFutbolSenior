import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12 border-t-2 border-sky/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold tracking-tight text-white mb-2">
              LIGA <span className="text-gold">SENIOR</span>
            </div>
            <p className="text-sky text-sm">
              © {new Date().getFullYear()} Liga Futbol Senior. Todos los
              derechos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://wa.me/5491126590237"
              target="_blank"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/ligadefutbolsenior/?hl=es-la"
              target="_blank"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
