import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Copy,
  Check,
  MessageCircle,
  X,
  ExternalLink,
  History,
  Trash2,
  Share2,
  Users
} from 'lucide-react'

interface GuestHistoryItem {
  id: string
  name: string
  url: string
  createdAt: string
}

const HISTORY_STORAGE_KEY = 'wedding_admin_guest_history'

export function GuestLinkGenerator() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedMsg, setCopiedMsg] = useState(false)
  const [history, setHistory] = useState<GuestHistoryItem[]>([])
  const [activeTab, setActiveTab] = useState<'create' | 'history'>('create')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('admin') === 'true' || params.get('secret') === 'manten') {
      setIsAdmin(true)
    }

    try {
      const savedHistory = localStorage.getItem(HISTORY_STORAGE_KEY)
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory))
      }
    } catch {
      // ignore
    }
  }, [])

  if (!isAdmin) {
    return null
  }

  const baseUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : 'https://wedding-ahmad-vira.vercel.app/'

  const guestUrl = name.trim()
    ? `${baseUrl}?to=${encodeURIComponent(name.trim())}`
    : baseUrl

  const whatsappMessage = `*Undangan Pernikahan Ahmad & Putri*\n\nKepada Yth. *${name.trim() || 'Bapak/Ibu/Saudara/i'}*,\n\nTanpa mengurangi rasa hormat, kami mengundang Anda untuk menghadiri acara pernikahan kami melalui tautan berikut:\n\n${guestUrl}\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nTerima kasih.`

  const saveToHistory = (guestName: string, url: string) => {
    if (!guestName.trim()) return
    const newItem: GuestHistoryItem = {
      id: Date.now().toString(),
      name: guestName.trim(),
      url,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    const updated = [newItem, ...history.filter(h => h.name.toLowerCase() !== guestName.trim().toLowerCase())].slice(0, 30)
    setHistory(updated)
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // ignore
    }
  }

  const handleCopyLink = (customUrl?: string, customName?: string) => {
    const targetUrl = customUrl || guestUrl
    navigator.clipboard.writeText(targetUrl)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
    saveToHistory(customName || name, targetUrl)
  }

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(whatsappMessage)
    setCopiedMsg(true)
    setTimeout(() => setCopiedMsg(false), 2000)
    saveToHistory(name, guestUrl)
  }

  const handleShareWhatsApp = (customMsg?: string, customName?: string, customUrl?: string) => {
    const msg = customMsg || whatsappMessage
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`
    window.open(waUrl, '_blank')
    saveToHistory(customName || name, customUrl || guestUrl)
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem(HISTORY_STORAGE_KEY)
  }

  const quickPrefixes = ['Bpk. ', 'Ibu ', 'Keluarga ', 'Sahabat ']

  return (
    <>
      {/* Floating Toggle Admin Ringkas & Elegan */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-40 bg-[#2A1612] text-[#FFF9F6] border border-[#E28574]/40 px-3.5 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-medium backdrop-blur-md hover:bg-[#3D1E18] transition-all cursor-pointer ring-2 ring-[#E28574]/30"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <Users className="w-3.5 h-3.5 text-[#E28574]" />
        <span>Panel Tamu</span>
      </motion.button>

      {/* Modal Admin Canvas */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[#FCFAF8] rounded-2xl w-full max-w-md max-h-[90vh] flex flex-col border border-[#E28574]/35 shadow-2xl relative overflow-hidden text-stone-800"
            >
              {/* Header Panel */}
              <div className="bg-[#FFF4EE] border-b border-[#E28574]/20 px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C86D58] bg-[#FCECE5] px-2 py-0.5 rounded-md">
                      Admin
                    </span>
                    <h2 className="font-serif font-bold text-base text-[#421E17]">
                      Generator Undangan
                    </h2>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Buat link personal dan bagikan langsung ke WhatsApp
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/80 border border-stone-200 hover:bg-stone-100 flex items-center justify-center text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tabs Switcher */}
              <div className="flex border-b border-stone-200 px-5 pt-2 bg-white">
                <button
                  onClick={() => setActiveTab('create')}
                  className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
                    activeTab === 'create'
                      ? 'border-[#C86D58] text-[#C86D58]'
                      : 'border-transparent text-stone-400 hover:text-stone-600'
                  }`}
                >
                  Buat Link Baru
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'history'
                      ? 'border-[#C86D58] text-[#C86D58]'
                      : 'border-transparent text-stone-400 hover:text-stone-600'
                  }`}
                >
                  <History className="w-3 h-3" />
                  <span>Riwayat Tamu ({history.length})</span>
                </button>
              </div>

              {/* Body Content */}
              <div className="p-5 overflow-y-auto space-y-4 no-scrollbar">
                {activeTab === 'create' ? (
                  <>
                    {/* Input Nama Tamu */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-xs font-semibold text-[#5C2419]">
                          Nama Tamu / Penerima:
                        </label>
                        <span className="text-[10px] text-stone-400">
                          Muncul di cover depan
                        </span>
                      </div>

                      <input
                        type="text"
                        autoFocus
                        placeholder="Contoh: Budi Santoso & Keluarga"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-[#E28574]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C86D58]/20 focus:border-[#C86D58] transition-all shadow-2xs"
                      />

                      {/* Quick Prefix Buttons */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {quickPrefixes.map((prefix) => (
                          <button
                            key={prefix}
                            type="button"
                            onClick={() => setName((prev) => (prev.startsWith(prefix) ? prev : `${prefix}${prev}`))}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-[#FFF2ED] hover:bg-[#FFE5DC] text-[#C86D58] font-medium transition-colors cursor-pointer"
                          >
                            +{prefix.trim()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Live Preview Kartu Cover */}
                    <div className="bg-gradient-to-br from-[#FFF7F4] to-[#FFF0EA] border border-[#E28574]/30 rounded-xl p-3.5 text-center shadow-2xs relative overflow-hidden">
                      <div className="text-[10px] uppercase tracking-wider text-[#A65B4A] font-semibold mb-1">
                        Pratinjau Kartu Tamu
                      </div>
                      <p className="text-xs text-stone-500 mb-0.5">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
                      <p className="font-serif font-bold text-sm sm:text-base text-[#421E17] truncate">
                        {name.trim() || 'Nama Tamu Undangan'}
                      </p>
                    </div>

                    {/* Tautan Undangan */}
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600 mb-1 block">
                        Link Undangan Personal:
                      </label>
                      <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-xl p-1.5 pl-3">
                        <span className="text-[10px] font-mono text-stone-600 truncate flex-1 select-all">
                          {guestUrl}
                        </span>
                        <a
                          href={guestUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Buka link"
                          className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Tombol Aksi Bagikan */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => handleCopyLink()}
                        className="py-2.5 px-3 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                      >
                        {copiedLink ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Link Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin Link</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="py-2.5 px-3 rounded-xl bg-[#FFF2ED] border border-[#E28574]/40 hover:bg-[#FFE5DC] text-[#B8503C] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                      >
                        {copiedMsg ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Pesan Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5" />
                            <span>Salin Teks WA</span>
                          </>
                        )}
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleShareWhatsApp()}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm shadow-emerald-700/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Kirim Langsung ke WhatsApp</span>
                    </button>
                  </>
                ) : (
                  /* Tab Riwayat */
                  <div className="space-y-2">
                    <div className="flex justify-between items-center pb-1">
                      <span className="text-[11px] text-stone-500 font-medium">
                        Tamu yang baru saja digenerate:
                      </span>
                      {history.length > 0 && (
                        <button
                          onClick={clearHistory}
                          className="text-[10px] text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Hapus Semua</span>
                        </button>
                      )}
                    </div>

                    {history.length === 0 ? (
                      <div className="text-center py-10 text-stone-400 text-xs">
                        Belum ada riwayat pembuatan link tamu.
                      </div>
                    ) : (
                      <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                        {history.map((item) => (
                          <div
                            key={item.id}
                            className="bg-white border border-stone-200 rounded-xl p-2.5 flex items-center justify-between gap-2 shadow-2xs"
                          >
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-stone-800 truncate">
                                {item.name}
                              </p>
                              <span className="text-[9px] text-stone-400">
                                {item.createdAt}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                onClick={() => handleCopyLink(item.url, item.name)}
                                title="Salin Link"
                                className="p-1.5 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-lg cursor-pointer"
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => {
                                  const msg = `*Undangan Pernikahan Ahmad & Putri*\n\nKepada Yth. *${item.name}*,\n\nTanpa mengurangi rasa hormat, kami mengundang Anda untuk menghadiri acara pernikahan kami melalui tautan berikut:\n\n${item.url}\n\nTerima kasih.`
                                  handleShareWhatsApp(msg, item.name, item.url)
                                }}
                                title="Share WA"
                                className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg cursor-pointer"
                              >
                                <MessageCircle className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
