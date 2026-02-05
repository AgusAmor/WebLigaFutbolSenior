import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export const useRegistrationForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    team_name: "",
    category: "Senior (+35)",
    captain_name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_INSCRIPTION_ID,
        {
          team_name: formData.team_name,
          category: formData.category,
          captain_name: formData.captain_name,
          phone: formData.phone,
          email: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({
        team_name: "",
        category: "Senior (+35)",
        captain_name: "",
        phone: "",
        email: "",
      });
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("Error enviando email:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return {
    formRef,
    formData,
    status,
    handleChange,
    handleSubmit,
  };
};
