import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause } from 'lucide-react';

export default function ContentSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progressPercent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progressPercent);
    }
  };

  return (
    <section className="pt-16 pb-32 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-light mb-6 tracking-tight">Aprofunde sua experiência e <span className="text-[#FF9F43]">conhecimento</span></h2>
        <div className="text-[#4A5568] font-light leading-relaxed">
          <span className="inline-block w-2 h-2 rounded-full bg-[#FF9F43] mr-2"></span>Mini podcasts de 3 a 4 min com reflexões e ensinamentos.
          <br /><br />
          <span className="inline-block w-2 h-2 rounded-full bg-[#FF9F43] mr-2"></span>Audios especiais
          <div className="ml-6 mt-2 space-y-2">
            <p><span className="text-[#FF9F43] font-bold mr-2">-</span>Sama Veda - possibilita a fluidez do sono</p>
            <p><span className="text-[#FF9F43] font-bold mr-2">-</span>Gandharva Veda (4 tipos) para ouvir antes ou depois da sua MT ou deixar tocando no ambiente</p>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img 
          src="https://i.postimg.cc/15zTt3hc/mockup-pv-medita3.png" 
          alt="Mockup de meditação" 
          className="w-full rounded-2xl shadow-xl"
          referrerPolicy="no-referrer"
        />
        <p className="text-sm text-[#1A202C] font-medium italic mt-8 mb-4 tracking-wide bg-[#FF9F43]/10 px-4 py-2 rounded-full inline-block">
          Escute uma breve amostra do que tem dentro da sessão Mini Podcast
        </p>
        <div className="bg-[#E2E8F0]/80 backdrop-blur-lg border border-[#1A202C]/5 p-5 rounded-2xl flex items-center gap-4">
          <audio 
            ref={audioRef} 
            src="https://raw.githubusercontent.com/meditacaorenoe-tech/audiomeditaapp/main/mulher%20esta%20no%20topo%20da%20criac%CC%A7a%CC%83o.mp3" 
            onTimeUpdate={handleTimeUpdate} 
            onEnded={() => setIsPlaying(false)}
            onError={(e) => console.error("Audio playback error:", e)}
            preload="auto" 
          />
          <button onClick={togglePlay} className="w-12 h-12 bg-[#FF9F43] text-white rounded-full flex items-center justify-center hover:bg-[#FF9F43]/90 transition-colors">
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium text-[#1A202C]">A mulher esta no topo</div>
              <div className="text-xs text-[#4A5568] font-mono">
                {audioRef.current ? `${Math.floor(audioRef.current.currentTime / 60)}:${Math.floor(audioRef.current.currentTime % 60).toString().padStart(2, '0')} / 3:56` : "0:00 / 3:56"}
              </div>
            </div>
            <div className="h-1 bg-[#CBD5E0] rounded-full overflow-hidden">
              <div className="h-full bg-[#FF9F43] transition-all duration-100" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
