import { useState } from 'react'
import { motion } from 'framer-motion'
import { Gift as GiftIcon, Copy, Check } from 'lucide-react'
import { INVITATION_DATA } from '../data/invitation'
import { SundaCornerOrnament } from './SundaOrnaments'

export function Gift() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const { gifts } = INVITATION_DATA

  const handleCopy = (accNumber: string, idx: number) => {
    navigator.clipboard.writeText(accNumber)
    setCopiedIndex(idx)
    setTimeout(() => {
      setCopiedIndex(null)
    }, 2000)
  }

  return (
    <section id="gift" className="py-12 sm:py-16 px-4 max-w-sm mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C86D58] font-bold block mb-1">
          Tanda Kasih
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#421E17]">
          Amplop Digital
        </h2>
        <p className="text-xs text-[#8C645D] mt-1 max-w-xs mx-auto leading-relaxed">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberi tanda kasih, kami menyediakan amplop digital di bawah ini:
        </p>
      </motion.div>

      {/* Grid Rekening */}
      <div className="flex flex-col gap-4">
        {gifts.map((item, idx) => (
          <motion.div
            key={item.accountNumber}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/95 border border-[#E28574]/35 rounded-2xl p-5 flex flex-col items-center justify-between relative overflow-hidden shadow-xs"
          >
            <div className="absolute top-1.5 right-1.5 opacity-40">
              <SundaCornerOrnament position="top-right" className="w-7 h-7" />
            </div>

            <div className="w-10 h-10 rounded-xl bg-[#FFF2ED] border border-[#E28574]/30 flex items-center justify-center text-[#C86D58] mb-3 shadow-xs">
              <GiftIcon className="w-5 h-5" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C86D58] mb-0.5">
              {item.bank}
            </span>
            <p className="font-mono text-base font-bold text-[#421E17] tracking-wider mb-0.5">
              {item.accountNumber}
            </p>
            <p className="text-xs text-[#8C645D] mb-4">a.n. {item.holder}</p>

            <button
              onClick={() => handleCopy(item.accountNumber, idx)}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-[#E28574] to-[#B8503C] hover:opacity-95 text-white text-xs font-semibold shadow-xs active:scale-95 transition-all"
            >
              {copiedIndex === idx ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Berhasil Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#FAD4C0]" />
                  <span>Salin Nomor Rekening</span>
                </>
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
