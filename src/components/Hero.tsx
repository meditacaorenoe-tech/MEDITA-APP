import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,159,67,0.2)_0%,rgba(0,0,0,0)_70%)] -z-10"></div>
      
      <motion.img 
        src="https://i.postimg.cc/zXFDFVwG/logo-medita-app.png" 
        alt="Logo Medita App" 
        className="w-20 mb-8"
        referrerPolicy="no-referrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A202C] mb-8 max-w-3xl leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Mais <span className="text-[#FF9F43]">regularidade</span> e mais <span className="text-[#FF9F43]">controle</span> na sua prática de Meditação Transcendental
      </motion.h1>
      
      <motion.p 
        className="text-[#555555] text-lg md:text-xl font-medium mb-3 max-w-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Um aplicativo para acompanhar sua prática e manter sua <span className="font-semibold text-[#1A202C]">regularidade</span> com mais clareza no dia a dia
      </motion.p>
    </section>
  );
}
