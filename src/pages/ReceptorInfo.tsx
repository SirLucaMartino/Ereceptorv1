import React from 'react';
import { motion } from 'framer-motion';

function ReceptorInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="pt-24 pb-16">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-[#110064] mb-8">
          Proceso de Trabajo como Receptor Judicial
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-[#110064] mb-4">1. Registro y Validación</h2>
            <p className="text-gray-700">
              El proceso comienza con tu registro en nuestra plataforma. Verificamos tus credenciales y experiencia para asegurar la calidad de nuestro servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#110064] mb-4">2. Asignación de Casos</h2>
            <p className="text-gray-700">
              Recibirás notificaciones de casos en tu área geográfica. Puedes aceptar los que mejor se ajusten a tu disponibilidad y experiencia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#110064] mb-4">3. Gestión de Diligencias</h2>
            <p className="text-gray-700">
              Coordina y realiza las diligencias asignadas, manteniendo comunicación constante a través de nuestra plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#110064] mb-4">4. Sistema de Pagos</h2>
            <p className="text-gray-700">
              Procesamos los pagos de manera segura y puntual, con comisiones competitivas y bonificaciones por desempeño.
            </p>
          </section>

          <motion.div
            className="mt-12 flex justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="https://wkf.ms/3A0XjcM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#110064] text-white px-8 py-3 rounded-md hover:bg-[#1a0b82] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Únete Ahora
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ReceptorInfo;