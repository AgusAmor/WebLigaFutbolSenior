import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export const useContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        import.meta.env.VITE_EMAILJS_CONTACT_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
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
