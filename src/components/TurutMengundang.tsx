import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { INVITATION_DATA } from '../data/invitation'
import { SundaCornerOrnament } from './SundaOrnaments'

function formatFamilyName(text: string) {
  // Regex untuk memisahkan nama utama, alias /..., dan kurung (...)
  // Contoh: "Bpk. KH. Abdul Kholik/Aa Pikpik(Guru)"
  const match = text.match(/^(.*?)(?:\/([^(]+))?(?:\((.+)\))?$/)
  if (!match) return <span>{text}</span>

  const [, mainName, alias, relation] = match

  return (
    <span>
      {mainName}
      {alias && <span className="italic text-[#7A5B55]">/{alias}</span>}
      {relation && <span className="italic text-[#8C645D]"> ({relation})</span>}
    </span>
  )
}

export function TurutMengundang() {
  const { turutMengundang } = INVITATION_DATA

  return (
    <section id="turut-mengundang" className="py-12 sm:py-16 px-4 w-full text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C86D58] font-bold block mb-1">
          Keluarga Besar
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#421E17]">
          Turut Mengundang
        </h2>
        <p className="text-xs text-[#8C645D] mt-1 max-w-xs mx-auto leading-relaxed">
          Ungkapan rasa hormat dan terima kasih dari keluarga besar yang berbahagia:
        </p>
      </motion.div>

      {/* List Keluarga */}
      <div className="flex flex-col gap-4 mb-6 max-w-sm mx-auto">
        {/* Keluarga Mempelai Pria */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/95 border border-[#E28574]/35 rounded-2xl p-5 relative shadow-xs overflow-hidden text-center"
        >
          <div className="absolute top-1.5 left-1.5 opacity-30">
            <SundaCornerOrnament position="top-left" className="w-6 h-6" />
          </div>
          <div className="absolute top-1.5 right-1.5 opacity-30">
            <SundaCornerOrnament position="top-right" className="w-6 h-6" />
          </div>

          <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFF2ED] border border-[#E28574]/30 flex items-center justify-center text-[#C86D58] mb-2.5 shadow-xs">
            <Users className="w-5 h-5" />
          </div>

          <h3 className="font-serif text-base font-bold text-[#5C2419] mb-3 pb-1.5 border-b border-[#E28574]/20">
            Keluarga Besar Mempelai Pria
          </h3>

          <ul className="space-y-1.5 text-xs text-[#5C2419]">
            {turutMengundang.keluargaPria.map((item, idx) => (
              <li key={idx} className="leading-snug">
                {formatFamilyName(item)}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Keluarga Mempelai Wanita */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/95 border border-[#E28574]/35 rounded-2xl p-5 relative shadow-xs overflow-hidden text-center"
        >
          <div className="absolute top-1.5 left-1.5 opacity-30">
            <SundaCornerOrnament position="top-left" className="w-6 h-6" />
          </div>
          <div className="absolute top-1.5 right-1.5 opacity-30">
            <SundaCornerOrnament position="top-right" className="w-6 h-6" />
          </div>

          <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFF2ED] border border-[#E28574]/30 flex items-center justify-center text-[#C86D58] mb-2.5 shadow-xs">
            <Users className="w-5 h-5" />
          </div>

          <h3 className="font-serif text-base font-bold text-[#5C2419] mb-3 pb-1.5 border-b border-[#E28574]/20">
            Keluarga Besar Mempelai Wanita
          </h3>

          <ul className="space-y-1.5 text-xs text-[#5C2419]">
            {turutMengundang.keluargaWanita.map((item, idx) => (
              <li key={idx} className="leading-snug">
                {formatFamilyName(item)}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
