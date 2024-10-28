import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.svg" alt="E-Receptor" className="h-8" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#about" className="text-gray-700 hover:text-[#110064] transition-colors">
              Sobre Nosotros
            </Link>
            <Link to="/#services" className="text-gray-700 hover:text-[#110064] transition-colors">
              Servicios
            </Link>
            <Link to="/#join" className="text-gray-700 hover:text-[#110064] transition-colors">
              Únete como Receptor
            </Link>
            <Link to="/#contact" className="text-gray-700 hover:text-[#110064] transition-colors">
              Contacto
            </Link>
            <motion.a
              href="https://wkf.ms/3A0XjcM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#110064] text-white px-4 py-2 rounded-md hover:bg-[#1a0b82] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Unirse al Equipo
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;