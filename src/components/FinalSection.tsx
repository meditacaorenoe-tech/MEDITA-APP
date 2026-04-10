import { motion } from "motion/react";

export default function FinalSection() {
  return (
    <section className="pt-20 pb-40 px-6 text-center relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,159,67,0.2)_0%,rgba(0,0,0,0)_70%)] opacity-20 -z-10"></div>
      
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      </motion.div>
    </section>
  );
}
