import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const libraries: ("places")[] = ["places"];
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    rut: '',
    location: '',
    details: '',
    contactConsent: false,
    privacyConsent: false
  });

  const [formEnabled, setFormEnabled] = useState(false);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    
    if (name === 'contactConsent' || name === 'privacyConsent') {
      setFormEnabled(
        name === 'contactConsent' 
          ? checked && formData.privacyConsent
          : checked && formData.contactConsent
      );
    }
  };

  const onPlaceSelected = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place?.formatted_address) {
      setFormData(prev => ({ ...prev, location: place.formatted_address }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEnabled) {
      alert('Por favor, acepta los términos y condiciones');
      return;
    }

    alert('Solicitud enviada con éxito. Nos contactaremos contigo pronto.');
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      rut: '',
      location: '',
      details: '',
      contactConsent: false,
      privacyConsent: false
    });
    setFormEnabled(false);
  };

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-[#110064] mb-6">Solicita un Receptor Judicial</h3>
          <p className="text-gray-600 mb-6">
            Complete el formulario a continuación para solicitar un receptor judicial. Nos pondremos en contacto con usted para coordinar los detalles de su requerimiento.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  required
                  disabled={!formEnabled}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#110064] disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
                <input
                  type="text"
                  required
                  disabled={!formEnabled}
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#110064] disabled:bg-gray-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">RUT</label>
              <input
                type="text"
                required
                disabled={!formEnabled}
                value={formData.rut}
                onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#110064] disabled:bg-gray-100"
                placeholder="12.345.678-9"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                disabled={!formEnabled}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#110064] disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input
                type="tel"
                required
                disabled={!formEnabled}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#110064] disabled:bg-gray-100"
                placeholder="+56 9 1234 5678"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lugar donde requiere la gestión</label>
              <Autocomplete
                onLoad={(autocomplete) => {
                  autocompleteRef.current = autocomplete;
                  autocomplete.setComponentRestrictions({
                    country: ['cl']
                  });
                }}
                onPlaceChanged={onPlaceSelected}
                options={{
                  types: ['address'],
                  componentRestrictions: { country: 'cl' }
                }}
              >
                <input
                  type="text"
                  required
                  disabled={!formEnabled}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#110064] disabled:bg-gray-100"
                  placeholder="Ingrese la dirección donde se realizará la gestión"
                />
              </Autocomplete>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Detalles de la solicitud</label>
              <textarea
                required
                disabled={!formEnabled}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#110064] disabled:bg-gray-100"
                rows={4}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="contactConsent"
                  name="contactConsent"
                  checked={formData.contactConsent}
                  onChange={handleConsentChange}
                  className="mt-1 h-4 w-4 text-[#110064] focus:ring-[#110064] border-gray-300 rounded"
                />
                <label htmlFor="contactConsent" className="ml-2 block text-sm text-gray-600">
                  Acepto ser contactado por E-Receptor para coordinar mi solicitud
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleConsentChange}
                  className="mt-1 h-4 w-4 text-[#110064] focus:ring-[#110064] border-gray-300 rounded"
                />
                <label htmlFor="privacyConsent" className="ml-2 block text-sm text-gray-600">
                  He leído y acepto la <Link to="/privacy" className="text-[#110064] hover:underline">política de privacidad</Link>
                </label>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={!formEnabled}
              className="w-full bg-[#110064] text-white px-6 py-3 rounded-md hover:bg-[#1a0b82] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              whileHover={{ scale: formEnabled ? 1.02 : 1 }}
              whileTap={{ scale: formEnabled ? 0.98 : 1 }}
            >
              Enviar Solicitud
            </motion.button>
          </form>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Mail className="h-6 w-6 text-[#110064] mr-3" />
            <span>contacto@ereceptorchile.com</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Phone className="h-6 w-6 text-[#110064] mr-3" />
            <span>+56 2 2345 6789</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <MapPin className="h-6 w-6 text-[#110064] mr-3" />
            <span>Santiago, Chile</span>
          </motion.div>
        </div>
      </div>
    </LoadScript>
  );
}

export default ContactForm;