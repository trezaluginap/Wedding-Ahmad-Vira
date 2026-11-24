import { motion } from 'framer-motion'
import { MailOpen } from 'lucide-react'
import { SigerSunda, GununganWayang, SundaCornerOrnament } from './SundaOrnaments'
import { JasminePetals } from './JasminePetals'

interface CoverProps {
  guestName: string
  onOpen: () => void
}

export function Cover({ guestName, onOpen }: CoverProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-[#FFF8F5] w-full max-w-full">
      {/* Kelopak Melati Melayang */}
      <JasminePetals count={12} />

      {/* Gunungan Gate Kiri (Peach Rose) */}
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: '-105%', transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] } }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#FFF3EE] border-r border-[#E28574]/30 z-10 flex items-center justify-end overflow-hidden shadow-xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F9DDD2]/30 via-transparent to-[#FFF3EE] pointer-events-none" />
        <GununganWayang className="w-48 sm:w-56 h-72 sm:h-80 opacity-35 translate-x-10 text-[#C86D58]" />
      </motion.div>

      {/* Gunungan Gate Kanan (Peach Rose) */}
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: '105%', transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] } }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#FFF3EE] border-l border-[#E28574]/30 z-10 flex items-center justify-start overflow-hidden shadow-xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F9DDD2]/30 via-transparent to-[#FFF3EE] pointer-events-none" />
        <GununganWayang className="w-48 sm:w-56 h-72 sm:h-80 opacity-35 -translate-x-10 text-[#C86D58]" flip />
      </motion.div>

      {/* Ornamen Sudut */}
      <div className="absolute top-2 left-2 z-20 pointer-events-none">
        <SundaCornerOrnament position="top-left" className="w-12 h-12" />
      </div>
      <div className="absolute top-2 right-2 z-20 pointer-events-none">
        <SundaCornerOrnament position="top-right" className="w-12 h-12" />
      </div>
      <div className="absolute bottom-2 left-2 z-20 pointer-events-none">
        <SundaCornerOrnament position="bottom-left" className="w-12 h-12" />
      </div>
      <div className="absolute bottom-2 right-2 z-20 pointer-events-none">
        <SundaCornerOrnament position="bottom-right" className="w-12 h-12" />
      </div>

      {/* Konten Utama Kartu Cover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.8 } }}
        transition={{ duration: 0.9 }}
        className="relative z-20 flex flex-col items-center justify-between h-full max-h-[720px] p-5 text-center w-full max-w-sm mx-auto"
      >
        {/* Header Cover */}
        <div className="pt-4 flex flex-col items-center">
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SigerSunda className="w-28 sm:w-32 h-16 sm:h-18 drop-shadow-[0_4px_10px_rgba(200,109,88,0.25)] mb-1.5" animated />
          </motion.div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C86D58] font-bold">
            Undangan Pernikahan
          </span>
          <p className="text-[11px] text-[#A65B4A] font-medium tracking-wider mt-0.5">
            Pernikahan Adat Sunda Modern
          </p>
        </div>

        {/* Nama Mempelai & Kartu Tamu */}
        <div className="flex flex-col items-center my-auto w-full px-1">
          <motion.h1
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#5C2419] drop-shadow-xs mb-1.5 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ahmad Muis &amp; Putri Vira
          </motion.h1>
          <p className="text-[11px] text-[#8C645D] font-semibold tracking-[0.2em] mb-5">
            MINGGU, 03 JANUARI 2027 
          </p>

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full bg-white/95 backdrop-blur-md border border-[#E28574]/40 rounded-2xl p-4 mb-5 shadow-lg shadow-[#E28574]/10 relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E28574] to-transparent" />
            <p className="text-[11px] text-[#8C645D] mb-1">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <p className="text-lg sm:text-xl font-bold text-[#421E17] font-serif tracking-wide capitalize truncate px-1">
              {guestName || 'Tamu Undangan'}
            </p>
          </motion.div>

          {/* Tombol Buka Undangan Pink Peach */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpen}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#E28574] via-[#D6715E] to-[#B8503C] text-white font-bold text-xs tracking-wider shadow-md shadow-[#C86D58]/30 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <MailOpen className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Buka Undangan</span>
          </motion.button>
        </div>

        {/* Footer */}
        <div className="pb-2 text-[10px] text-[#8C645D] tracking-tight">
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </div>
      </motion.div>
    </div>
  )
}
