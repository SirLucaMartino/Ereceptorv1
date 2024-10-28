import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Shield, ChevronRight, Mail, Phone, MapPin, Clock, Zap, DollarSign, Award } from 'lucide-react';
import ContactForm from '../components/ContactForm';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gradient-to-br from-[#110064] to-[#1a0b82]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Servicios de Receptor Judicial Profesional
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Conectamos eficientemente el mundo legal con receptores judiciales certificados.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#contact"
                  className="bg-white text-[#110064] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Receptor
                </motion.a>
                <motion.a
                  href="#about"
                  className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#110064] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conoce Más
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                alt="Legal Services"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#110064] mb-4">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray-600">Experiencia y profesionalismo en cada gestión</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Seguridad Garantizada",
                description: "Todos nuestros receptores están certificados y validados."
              },
              {
                icon: Zap,
                title: "Respuesta Rápida",
                description: "Gestión eficiente y oportuna de tus requerimientos."
              },
              {
                icon: Users,
                title: "Cobertura Nacional",
                description: "Red de receptores en todo el territorio nacional."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="h-12 w-12 text-[#110064] mb-4" />
                <h3 className="text-xl font-semibold text-[#110064] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join as Receptor Section */}
      <section id="join" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#110064] mb-12">Únete como Receptor Judicial</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Flexibilidad Horaria", desc: "Gestiona tu tiempo y agenda según tu disponibilidad." },
              { icon: DollarSign, title: "Comisiones Competitivas", desc: "Comisiones extra por disponibilidad y gestiones especiales." },
              { icon: Award, title: "Reconocimiento", desc: "Sistema de evaluación y beneficios por desempeño." },
              { icon: Users, title: "Red Profesional", desc: "Acceso a una amplia red de abogados y estudios jurídicos." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="h-10 w-10 text-[#110064] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[#110064]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-12">
            <motion.a
              href="https://wkf.ms/3A0XjcM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#110064] text-white px-8 py-3 rounded-md hover:bg-[#1a0b82] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Unirse al Equipo
            </motion.a>
            <motion.Link
              to="/receptor-info"
              className="border-2 border-[#110064] text-[#110064] px-8 py-3 rounded-md hover:bg-[#110064] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mayor Información
            </motion.Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#110064] mb-12">Solicita un Receptor Judicial</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default Home;