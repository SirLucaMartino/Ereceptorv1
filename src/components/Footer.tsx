import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-[#110064] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="E-Receptor" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-gray-300">Conectando eficientemente el mundo legal.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/#about" className="text-gray-300 hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/#join" className="text-gray-300 hover:text-white transition-colors">Únete como Receptor</Link></li>
              <li><Link to="/#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#1a0b82] mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} E-Receptor. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;