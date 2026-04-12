import { motion } from "motion/react";

export default function TechniqueSection() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-center bg-[#D1D9E6] rounded-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-light mb-6 tracking-tight">
          Técnica ACI - <span className="text-[#FF9F43]">Ativação Corporal Inteligente</span>
        </h2>
        <p className="text-[#4A5568] font-light leading-relaxed max-w-2xl mx-auto">
          A Técnica ACI é um processo guiado por audio pelo Prof. Renoe Valério que conduz sua atenção por pontos específicos do corpo, ativando um estado natural de desaceleração do corpo e pode ser usado opcionalmente antes de iniciar sua prática de MT.
          <br /><br />
          O resultado é uma <span className="font-bold">sensação real, perceptível e progressiva de relaxamento</span>, que pode lhe auxiliar a entrar na sua pratica de MT menos acelerado.
          <br /><br />
          Não substitui a sua prática de MT
        </p>
        <img 
          src="https://i.postimg.cc/9QbGLnzZ/Captura-de-Tela-2026-04-10-a-s-14-21-31.png" 
          alt="Técnica ACI" 
          className="w-full max-w-md mx-auto my-8 rounded-2xl shadow-lg"
          referrerPolicy="no-referrer"
        />
        <p className="font-bold mb-4">
          Para conhecer os planos e testar 7 dias grátis acesse o botão abaixo
        </p>
        <a href="https://meditante-app.lovable.app" className="bg-[#FF9F43] text-white px-12 py-4 rounded-full font-medium transition-all inline-block hover:shadow-[0_0_20px_rgba(255,159,67,0.3)] hover:bg-[#e88d36]">
          Quero meu Medita app agora
        </a>
        <div className="mt-8 pt-8 border-t border-gray-300">
          <h3 className="text-xl font-semibold mb-2">Suporte vitalício</h3>
          <p className="text-[#4A5568] font-light leading-relaxed max-w-lg mx-auto">
            Suporte vitalício do Medita app direto com o Prof. Renoe criador idealizador do app direto no whatspp
          </p>
        </div>
      </motion.div>
    </section>
  );
}
