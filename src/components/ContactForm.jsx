import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useContactForm } from "../hooks/useContactForm";

const ContactForm = () => {
  const { formRef, formData, status, handleChange, handleSubmit } =
    useContactForm();

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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 p-8 bg-light border-l-4 border-l-sky rounded-lg"
          >
            {status === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500 text-green-700 rounded-lg flex items-center gap-2">
                <FaCheck className="text-md" /> ¡Gracias! Tu mensaje fue enviado
                correctamente.
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500 text-red-700 rounded-lg flex items-center gap-2">
                <IoMdClose className="text-md" /> Error al enviar. Por favor
                intenta de nuevo.
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border-2 border-sky/30 rounded-lg px-4 py-2 text-navy focus:outline-none focus:border-sky transition-colors ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border-2 border-sky/30 rounded-lg px-4 py-2 text-navy focus:outline-none focus:border-sky transition-colors ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-white border-2 border-sky/30 rounded-lg px-4 py-2 text-navy focus:outline-none focus:border-sky transition-colors ring-0"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-linear-to-r from-navy to-sky hover:from-slate-800 hover:to-sky disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-sky/20"
            >
              {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
