import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { INVITATION_DATA } from '../data/invitation'
import { WayangBridalFrame } from './SundaOrnaments'

export function Couple() {
  const { groom, bride } = INVITATION_DATA.couple

  return (
    <section id="couple" className="py-12 sm:py-16 px-4 max-w-full overflow-hidden text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-12"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C86D58] font-bold block mb-2">
          Pasangan Mempelai
        </span>

        {/* Kaligrafi Arab Bismillah */}
        <p className="font-serif text-2xl sm:text-3xl text-[#5C2419] tracking-wide mb-2 drop-shadow-xs font-semibold">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <p className="text-[#6E504A] text-xs sm:text-sm mt-2 max-w-sm mx-auto leading-relaxed px-2">
          Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami:
        </p>
      </motion.div>

      {/* Grid Mempelai Responsif */}
      <div className="flex flex-col items-center justify-center gap-10">
        {/* Mempelai Pria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full max-w-xs group"
        >
          {/* Bingkai Berornamen Wayang */}
          <WayangBridalFrame isBride={false}>
            <img
              src={groom.photo}
              alt={groom.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </WayangBridalFrame>

          <span className="text-[10px] uppercase tracking-widest text-[#C86D58] font-semibold mt-4 mb-0.5">
            Mempelai Pria
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#421E17] tracking-wider mb-1">
            {groom.name}
          </h3>
          <p className="text-xs text-[#7A5B55] mb-2.5 px-3 leading-relaxed">{groom.parents}</p>
        </motion.div>

        {/* Pemisah Simbol Hati & Ampersand */}
        <div className="flex flex-col items-center justify-center text-[#C86D58] my-1">
          <Heart className="w-5 h-5 fill-[#E28574]/20 mb-1 animate-pulse" />
          <span className="font-script text-4xl sm:text-5xl text-[#C86D58]">&</span>
        </div>

        {/* Mempelai Wanita */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full max-w-xs group relative pt-2"
        >
          {/* Bingkai Berornamen Wayang + Siger Sunda */}
          <WayangBridalFrame isBride={true}>
            <img
              src={bride.photo}
              alt={bride.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </WayangBridalFrame>

          <span className="text-[10px] uppercase tracking-widest text-[#C86D58] font-semibold mt-4 mb-0.5">
            Mempelai Wanita
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#421E17] tracking-wider mb-1">
            {bride.name}
          </h3>
          <p className="text-xs text-[#7A5B55] mb-2.5 px-3 leading-relaxed">{bride.parents}</p>
        </motion.div>
      </div>
    </section>
  )
}
