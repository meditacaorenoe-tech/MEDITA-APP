import { motion } from "motion/react";

export default function Header() {
  return (
    <nav className="fixed w-full z-50 px-6 py-8 flex justify-center items-center bg-[#E2E8F0]/80 backdrop-blur-lg border border-[#1A202C]/5">
      <div className="text-xl font-medium tracking-widest uppercase">
        MEDITA <span className="text-[#FF9F43]">APP</span>
      </div>
    </nav>
  );
}
