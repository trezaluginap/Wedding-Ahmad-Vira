import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UserPlus, Copy, Check, MessageCircle, X } from 'lucide-react'

export function GuestLinkGenerator() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [copied, setCopied] = useState(false)

  const baseUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : 'https://wedding-ahmad-vira.vercel.app/'

  const guestUrl = name.trim()
    ? `${baseUrl}?to=${encodeURIComponent(name.trim())}`
    : baseUrl

  const whatsappMessage = `*Undangan Pernikahan Ahmad & Putri*\n\nKepada Yth. *${name.trim() || 'Bapak/Ibu/Saudara/i'}*,\n\nTanpa mengurangi rasa hormat, kami mengundang Anda untuk menghadiri pernikahan kami melalui tautan berikut:\n\n${guestUrl}\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nTerima kasih.`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(guestUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`
    window.open(waUrl, '_blank')
  }

  return (
    <>
      {/* Floating Button Buat Link Tamu */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-40 bg-[#421E17] text-[#FAF8F5] border border-[#E28574]/40 px-3.5 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold backdrop-blur-md hover:bg-[#5C2419] transition-all cursor-pointer"
      >
        <UserPlus className="w-3.5 h-3.5 text-[#E28574]" />
        <span>Buat Undangan Tamu</span>
      </motion.button>

      {/* Modal Generator */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl w-full max-w-sm p-5 border border-[#E28574]/30 shadow-2xl relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#FFF2ED] text-[#C86D58] flex items-center justify-center">
                  <UserPlus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#421E17] text-sm">
                    Buat Link Tamu Khusus
                  </h3>
                  <p className="text-[10px] text-stone-500">
                    Ketik nama tamu untuk link & pesan WhatsApp otomatis
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#5C2419] mb-1">
                    Nama Tamu / Keluarga:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Bpk. Bambang & Keluarga"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-[#FFF9F6] border border-[#E28574]/40 rounded-xl focus:outline-none focus:border-[#C86D58]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#5C2419] mb-1">
                    Link Undangan:
                  </label>
                  <div className="p-2 bg-stone-100 rounded-lg text-[10px] text-stone-700 break-all select-all font-mono">
                    {guestUrl}
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={handleCopyLink}
                    className="flex-1 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-[#421E17] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Link</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleShareWhatsApp}
                    className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Share WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
