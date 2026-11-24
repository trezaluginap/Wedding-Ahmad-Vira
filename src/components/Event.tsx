import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, ExternalLink, CalendarDays } from 'lucide-react'
import { INVITATION_DATA } from '../data/invitation'
import { SundaCornerOrnament } from './SundaOrnaments'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Event() {
  const { akad, resepsi, mapsUrl, mapsEmbed, targetDate } = INVITATION_DATA.event

  const calculateTimeLeft = (): TimeLeft => {
    const diff = +new Date(targetDate) - +new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section id="event" className="py-12 sm:py-16 px-4 w-full text-center relative overflow-hidden">
      {/* Kartu Hitung Mundur Mobile Peach */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/95 border border-[#E28574]/35 rounded-2xl p-5 sm:p-6 backdrop-blur-md mb-12 shadow-sm relative overflow-hidden max-w-sm mx-auto"
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E28574] to-transparent" />
        
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C86D58] font-bold block mb-1">
          Menghitung Hari
        </span>
        <p className="text-[11px] sm:text-xs text-[#8C645D] mb-4 font-serif italic">
          Menuju hari bahagia penyatuan dua hati
        </p>

        <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
          {[
            { label: 'Hari', val: timeLeft.days },
            { label: 'Jam', val: timeLeft.hours },
            { label: 'Menit', val: timeLeft.minutes },
            { label: 'Detik', val: timeLeft.seconds }
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gradient-to-b from-[#FFF5F0] to-[#FFF9F6] border border-[#E28574]/25 rounded-xl p-2.5 flex flex-col items-center shadow-xs"
            >
              <span className="text-xl sm:text-2xl font-bold font-serif text-[#5C2419] leading-none">
                {String(item.val).padStart(2, '0')}
              </span>
              <span className="text-[9px] text-[#7A5B55] tracking-wider uppercase mt-1 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Judul Rangkaian Acara */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C86D58] font-bold block mb-1">
          Rangkaian Acara
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#421E17]">
          Waktu & Lokasi
        </h2>
        <p className="text-xs text-[#8C645D] mt-1">Akad Nikah & Resepsi Pernikahan</p>
      </motion.div>

      {/* Kartu Akad & Resepsi */}
      <div className="flex flex-col gap-5 mb-10 max-w-sm mx-auto">
        {/* Akad Nikah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/95 border border-[#E28574]/35 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden shadow-xs"
        >
          <div className="absolute top-2 left-2 opacity-40">
            <SundaCornerOrnament position="top-left" className="w-8 h-8" />
          </div>
          <div className="absolute top-2 right-2 opacity-40">
            <SundaCornerOrnament position="top-right" className="w-8 h-8" />
          </div>

          <div className="w-12 h-12 rounded-xl bg-[#FFF2ED] border border-[#E28574]/30 flex items-center justify-center text-[#C86D58] mb-3 shadow-xs">
            <CalendarDays className="w-5 h-5" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[#C86D58] mb-0.5 font-bold">
            Akad Nikah
          </span>
          <h3 className="font-serif text-xl font-bold text-[#421E17] mb-1.5">
            {akad.title}
          </h3>
          <p className="text-xs font-semibold text-[#5C2419] mb-1">{akad.date}</p>
          <div className="flex items-center gap-1.5 text-xs text-[#5C2419] mb-3 bg-[#FFF5F0] px-3 py-1 rounded-full border border-[#E28574]/30 font-medium">
            <Clock className="w-3 h-3 text-[#C86D58]" />
            <span>{akad.time}</span>
          </div>
          <p className="text-xs font-bold text-[#421E17] mb-0.5">{akad.venue}</p>
          <p className="text-[11px] text-[#7A5B55] leading-relaxed max-w-xs">{akad.address}</p>
        </motion.div>

        {/* Resepsi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/95 border border-[#E28574]/35 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden shadow-xs"
        >
          <div className="absolute top-2 left-2 opacity-40">
            <SundaCornerOrnament position="top-left" className="w-8 h-8" />
          </div>
          <div className="absolute top-2 right-2 opacity-40">
            <SundaCornerOrnament position="top-right" className="w-8 h-8" />
          </div>

          <div className="w-12 h-12 rounded-xl bg-[#FFF2ED] border border-[#E28574]/30 flex items-center justify-center text-[#C86D58] mb-3 shadow-xs">
            <Clock className="w-5 h-5" />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[#C86D58] mb-0.5 font-bold">
            Resepsi
          </span>
          <h3 className="font-serif text-xl font-bold text-[#421E17] mb-1.5">
            {resepsi.title}
          </h3>
          <p className="text-xs font-semibold text-[#5C2419] mb-1">{resepsi.date}</p>
          <div className="flex items-center gap-1.5 text-xs text-[#5C2419] mb-3 bg-[#FFF5F0] px-3 py-1 rounded-full border border-[#E28574]/30 font-medium">
            <Clock className="w-3 h-3 text-[#C86D58]" />
            <span>{resepsi.time}</span>
          </div>
          <p className="text-xs font-bold text-[#421E17] mb-0.5">{resepsi.venue}</p>
          <p className="text-[11px] text-[#7A5B55] leading-relaxed max-w-xs">{resepsi.address}</p>
        </motion.div>
      </div>

      {/* Map Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-center bg-white/95 border border-[#E28574]/35 rounded-2xl p-3 sm:p-4 overflow-hidden shadow-xs max-w-sm mx-auto"
      >
        <div className="w-full h-52 sm:h-60 rounded-xl overflow-hidden mb-4 border border-[#E28574]/30 relative shadow-inner">
          <iframe
            src={mapsEmbed}
            title="Lokasi Acara Pernikahan"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E28574] via-[#D6715E] to-[#B8503C] text-white font-semibold text-xs tracking-wider uppercase hover:opacity-95 active:scale-95 transition-all shadow-xs"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Buka di Google Maps</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </motion.div>
    </section>
  )
}
