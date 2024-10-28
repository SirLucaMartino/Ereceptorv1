import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

const PrivacyPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Política de Privacidad - E-Receptor</Text>
      {/* Add your privacy policy content here */}
    </Page>
  </Document>
);

function Privacy() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-[#110064]">Política de Privacidad</h1>
              <PDFDownloadLink
                document={<PrivacyPDF />}
                fileName="politica-privacidad-ereceptor.pdf"
              >
                {({ loading }) => (
                  <motion.button
                    className="flex items-center space-x-2 bg-[#110064] text-white px-4 py-2 rounded-md hover:bg-[#1a0b82]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={loading}
                  >
                    <Download className="h-5 w-5" />
                    <span>{loading ? "Cargando..." : "Descargar PDF"}</span>
                  </motion.button>
                )}
              </PDFDownloadLink>
            </div>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#110064] mb-4">1. Recopilación de Información</h2>
                <p className="text-gray-700">
                  E-Receptor se compromete a proteger la privacidad de nuestros usuarios...
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#110064] mb-4">2. Uso de la Información</h2>
                <p className="text-gray-700">
                  La información recopilada se utiliza para los siguientes propósitos...
                </p>
              </section>

              {/* Add more sections as needed */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Privacy;