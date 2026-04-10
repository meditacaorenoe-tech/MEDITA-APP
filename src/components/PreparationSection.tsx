import { motion } from "motion/react";

export default function PreparationSection() {
  return (
    <section className="pt-16 pb-40 px-6 bg-[#D1D9E6]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-light mb-6 tracking-tight"><span className="text-[#FF9F43]">Transforme</span> sua prática em progresso visível</h2>
          <p className="text-[#4A5568] font-light leading-relaxed">
            Monitore seu silêncio acumulado e sua regularidade com clareza
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://i.postimg.cc/vTmmD0jG/mockup-pv-medita2.png" 
            alt="Progresso visível" 
            className="max-w-full h-auto rounded-2xl shadow-lg"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
