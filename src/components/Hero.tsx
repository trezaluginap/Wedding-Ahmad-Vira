import { motion } from 'framer-motion'
import { Calendar, ChevronDown } from 'lucide-react'
import { SigerSunda, GununganWayang, SundaCornerOrnament } from './SundaOrnaments'

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-between text-center px-4 pt-6 pb-2 overflow-hidden bg-gradient-to-b from-[#FFF5F0] via-[#FFF9F6] to-[#FFF5F0]">
      {/* Background Siluet Gunungan Peach */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-12">
          <GununganWayang className="w-44 h-64 text-[#C86D58]" />
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-12">
          <GununganWayang className="w-44 h-64 text-[#C86D58]" flip />
        </div>
      </div>

      {/* Ornamen Sudut */}
      <div className="absolute top-2 left-2 pointer-events-none">
        <SundaCornerOrnament position="top-left" className="w-10 h-10" />
      </div>
      <div className="absolute top-2 right-2 pointer-events-none">
        <SundaCornerOrnament position="top-right" className="w-10 h-10" />
      </div>

      {/* Konten Utama */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col items-center w-full max-w-sm mx-auto relative z-10 pt-3"
      >
        {/* Siger Sunda Peach Gold */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <SigerSunda className="w-28 sm:w-32 h-16 sm:h-20 drop-shadow-[0_4px_10px_rgba(200,109,88,0.25)]" animated />
        </motion.div>

        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C86D58] mb-1.5 font-bold">
          Walimatul 'Ursy
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#5C2419] mb-3 drop-shadow-xs leading-tight font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ahmad Muis &amp; Putri Vira
        </h2>

        {/* Kutipan Ayat */}
        <p className="text-[11px] sm:text-xs text-[#7A5B55] leading-relaxed mb-2 font-normal px-3">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
        </p>
        <span className="text-[10px] sm:text-[11px] text-[#C86D58] font-serif tracking-widest block mb-5 font-semibold">
          (QS. Ar-Rum: 21)
        </span>

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E28574]/40 bg-white/95 backdrop-blur-sm text-[#5C2419] text-xs shadow-xs">
          <Calendar className="w-3.5 h-3.5 text-[#C86D58]" />
          <span className="font-semibold tracking-wide">Minggu, 03 Januari 2027</span>
        </div>
      </motion.div>

      {/* Indikator Gulir */}
      <motion.div 
        animate={{ y: [0, 4, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center text-[#C86D58]/80 text-xs pt-1 pb-1"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase font-semibold">Gulir Ke Bawah</span>
        <ChevronDown className="w-3.5 h-3.5 mt-0.5 text-[#C86D58]" />
      </motion.div>
    </section>
  )
}
