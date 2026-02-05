import React from "react";
import { FaCheckCircle, FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { useRegistrationForm } from "../hooks/useRegistrationForm";

const RegistrationForm = () => {
  const { formRef, formData, status, handleChange, handleSubmit } =
    useRegistrationForm();

  return (
    <section
      id="inscripcion"
      className="py-20 bg-navy relative overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-sky to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border-2 border-sky/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-linear-to-br from-gold to-sky p-10 flex flex-col justify-center text-navy">
            <h3 className="text-3xl font-bold mb-4">
              Inscribí a tu equipo hoy
            </h3>
            <p className="font-medium mb-6">
              Los cupos son limitados. Asegurá tu lugar en el torneo más
              importante de CABA y Gran Buenos Aires.
            </p>
            <ul className="space-y-2 text-sm font-bold opacity-90">
              <li className="flex items-center">
                <FaCheckCircle className="w-10 mr-3" />
                Obtené un descuento en la inscripción anotandote antes del
                15/02.
              </li>
            </ul>
          </div>

          <div className="md:w-2/3 p-10 bg-slate-800 border-l-4 border-l-sky/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Formulario de Pre-inscripción
            </h3>

            {status === "success" && (
              <div className="mb-4 p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg flex items-center gap-2">
                <FaCheck className="text-2xl" /> ¡Gracias! Nos pondremos en
                contacto a la brevedad.
              </div>
            )}

            {status === "error" && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500 text-red-400 rounded-lg flex items-center gap-2">
                <IoMdClose className="text-2xl" /> Error al enviar. Por favor
                intenta de nuevo.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre del Equipo
                  </label>
                  <input
                    type="text"
                    name="team_name"
                    value={formData.team_name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="Ej. Los Halcones"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Categoría
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                  >
                    <option>Senior (+35)</option>
                    <option>Master (+45)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nombre del Capitán/Delegado
                </label>
                <input
                  type="text"
                  name="captain_name"
                  value={formData.captain_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Nombre completo"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="+54 11..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="email@ejemplo.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gold hover:bg-sky disabled:bg-gray-600 text-navy font-bold py-3 px-6 rounded-lg transition-colors mt-4"
              >
                {status === "sending" ? "Enviando..." : "Enviar Solicitud"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
