import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the TechniqueSection element
      const section = document.querySelector("section.bg-\\[\\#D1D9E6\\]");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      // Once the section enters the viewport, keep the button visible
      if (rect.top <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.a
      href="https://wa.me/5511988355252?text=Oi%20Renoe%20quero%20tirar%20d%C3%BAvidas%20sobre%20o%20medita%20app%20vc%20pode%20me%20ajudar%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <span className="font-medium text-sm">Dúvidas? Chame aqui</span>
      <MessageCircle size={24} />
    </motion.a>
  );
}
