import React from "react";

const ContactForm = () => {
  return (
    <section id="contacto" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-sky to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-navy mb-4">Contactanos</h2>
          <p className="text-gray-600">
            ¿Tenés dudas sobre el reglamento, sedes o costos? Escribinos.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-4 p-8 bg-light border-l-4 border-l-sky rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                className="w-full bg-white border-2 border-sky/30 rounded-lg px-4 py-2 text-navy focus:outline-none focus:border-sky transition-colors ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-white border-2 border-sky/30 rounded-lg px-4 py-2 text-navy focus:outline-none focus:border-sky transition-colors ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                rows="4"
                className="w-full bg-white border-2 border-sky/30 rounded-lg px-4 py-2 text-navy focus:outline-none focus:border-sky transition-colors ring-0"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-navy to-sky hover:from-slate-800 hover:to-sky text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-sky/20\"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
