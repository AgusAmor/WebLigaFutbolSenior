import React from "react";
import { FaTrophy, FaCheckCircle, FaBuilding } from "react-icons/fa";
import { IoTrophySharp } from "react-icons/io5";

const InfoSection = () => {
  const benefits = [
    {
      title: "Cupo a Copa Argentina",
      description:
        "La oportunidad única de competir en la copa más importante del país.",
      icon: <FaTrophy className="w-8 h-8" />,
    },
    {
      title: "Cupo a Copa Federal",
      description:
        "La oportunidad de competir en la copa más importante del país.",
      icon: <IoTrophySharp className="w-8 h-8" />,
    },
    {
      title: "Organización Profesional",
      description:
        "Canchas en excelente estado, árbitros federados, cobertura médica y seguimiento de la liga online.",
      icon: <FaBuilding className="w-8 h-8" />,
    },
  ];

  return (
    <section id="info" className="py-20 bg-light relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-sky to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            ¿Por qué jugar nuestra liga?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diseñada para equipos que buscan competencia seria, organización de
            primer nivel y premios reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-l-sky hover:shadow-lg transition-shadow border-gray-100 group"
            >
              <div className="mb-6 bg-gold w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors shadow-lg shadow-gold/20 text-navy group-hover:text-gold">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 border-b-2 border-sky/30 pb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
