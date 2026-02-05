import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-navy text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-sky/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-sky/25 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="md:w-2/3 lg:w-1/2">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-sky uppercase bg-sky/10 rounded-full border-2 border-gold/50 cursor-pointer hover:-translate-y-1 transition-all">
            Primera edición
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Liga de Fútbol{" "}
            <span className="text-gold relative inline-block">
              Senior{" "}
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-sky/60"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            La pasión no tiene edad. Participá para poder competir en la{" "}
            <br></br>
            <span className="font-bold text-white border-b-2 border-sky">
              Copa Argentina
            </span>{" "}
            y la{" "}
            <span className="font-bold text-white border-b-2 border-sky">
              Copa Federal
            </span>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#inscripcion"
              className="px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-sky transition-all transform hover:-translate-y-1 shadow-lg shadow-gold/20 text-center"
            >
              Inscribir Equipo
            </a>
            <a
              href="#info"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-colors border border-gray-600 text-center"
            >
              Más Información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
