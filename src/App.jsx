import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import RegistrationForm from "./components/RegistrationForm";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <RegistrationForm />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
