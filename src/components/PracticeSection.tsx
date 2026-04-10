import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function PracticeSection() {
  const features = [
    "Marca o tempo de meditação para você e avisa quando acabou",
    "Marca os 3min de repouso no final e avisa quando acabou",
    "Calcula a sua regularidade",
    "Registra suas meditações diárias de diversas formas para seu controle."
  ];

  return (
    <section className="pt-4 pb-6 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-light mb-6 tracking-tight">O que <span className="text-[#FF9F43]">Medita App</span> faz para você</h2>
        <ul className="space-y-8 mb-12">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-[#4A5568] font-light">
              <Check className="w-6 h-6 text-[#FF9F43] flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div 
        className="order-first md:order-last"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img 
          src="https://i.postimg.cc/xCWCZf7R/mockup-pv-medita.png" 
          alt="Meditação" 
          className="max-w-full h-auto rounded-2xl shadow-lg"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
