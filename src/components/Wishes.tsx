import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageSquareQuote, User, Loader2 } from 'lucide-react'
import confetti from 'canvas-confetti'
import { useWishes } from '../hooks/useWishes'
import { SundaCornerOrnament } from './SundaOrnaments'

export function Wishes() {
  const { wishes, addWish, isSubmitting } = useWishes()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim() || isSubmitting) return

    const success = await addWish(name.trim(), message.trim())
    if (success) {
      setName('')
      setMessage('')

      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#e28574', '#c86d58', '#fad4c0', '#fcece5']
        })
      } catch {
        // ignore
      }
    }
  }

  return (
    <section id="wishes" className="py-12 sm:py-16 px-4 max-w-sm mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C86D58] font-bold block mb-1">
          Buku Tamu
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#421E17]">
          Untaian Doa & Ucapan
        </h2>
        <p className="text-xs text-[#8C645D] mt-1">
          Kirimkan doa dan ucapan hangat untuk kedua mempelai
        </p>
      </motion.div>

      {/* Form Kirim Doa */}
      <motion.form
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="bg-white/95 border border-[#E28574]/35 rounded-2xl p-5 backdrop-blur-md mb-6 shadow-xs relative overflow-hidden"
      >
        <div className="absolute top-2 right-2 opacity-40">
          <SundaCornerOrnament position="top-right" className="w-8 h-8" />
        </div>

        <div className="mb-3.5">
          <label className="block text-xs font-semibold text-[#5C2419] mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Budi Santoso"
            className="w-full bg-[#FFF9F6] border border-[#E28574]/30 rounded-xl px-3.5 py-2 text-xs text-[#421E17] placeholder-[#A67E77] focus:outline-none focus:border-[#C86D58] transition-colors shadow-inner"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs font-semibold text-[#5C2419] mb-1">
            Doa & Pesan Hangat
          </label>
          <textarea
            required
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan ucapan selamat dan doa restu..."
            className="w-full bg-[#FFF9F6] border border-[#E28574]/30 rounded-xl px-3.5 py-2 text-xs text-[#421E17] placeholder-[#A67E77] focus:outline-none focus:border-[#C86D58] transition-colors resize-none shadow-inner"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#E28574] via-[#D6715E] to-[#B8503C] hover:opacity-95 text-white font-bold text-xs transition-all shadow-xs active:scale-[0.99] disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Mengirim...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Kirim Doa & Ucapan</span>
            </>
          )}
        </button>
      </motion.form>

      {/* List Ucapan */}
      <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1 no-scrollbar">
        {wishes.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 border border-[#E28574]/25 rounded-xl p-3.5 flex gap-3 items-start shadow-xs"
          >
            <div className="w-8 h-8 rounded-full bg-[#FFF2ED] border border-[#E28574]/30 flex items-center justify-center shrink-0 text-[#C86D58]">
              <User className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center justify-between mb-0.5">
                <h4 className="text-xs font-bold text-[#421E17] font-serif">
                  {item.name}
                </h4>
                <span className="text-[9px] text-[#A67E77]">{item.createdAt}</span>
              </div>
              <p className="text-[11px] text-[#5C2419] leading-relaxed">
                {item.message}
              </p>
            </div>
          </motion.div>
        ))}

        {wishes.length === 0 && (
          <div className="text-center py-6 text-[#A67E77] text-xs flex flex-col items-center">
            <MessageSquareQuote className="w-5 h-5 mb-1 opacity-50" />
            <span>Belum ada ucapan. Jadilah yang pertama mengirimkan doa!</span>
          </div>
        )}
      </div>
    </section>
  )
}
