import { useState, useEffect } from 'react'
import {
  Users,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  Trash2,
  Share2,
  LogOut,
  Search,
  PlusCircle
} from 'lucide-react'

interface GuestHistoryItem {
  id: string
  name: string
  url: string
  createdAt: string
}

const STORAGE_KEY = 'wedding_admin_guest_history'

export function AdminDashboard() {
  const [name, setName] = useState('')
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedMsg, setCopiedMsg] = useState(false)
  const [history, setHistory] = useState<GuestHistoryItem[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const baseUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`.replace(/\/$/, '')
    : 'https://wedding-ahmad-vira.vercel.app'

  const guestUrl = name.trim()
    ? `${baseUrl}/?to=${encodeURIComponent(name.trim())}`
    : `${baseUrl}/`

  const whatsappMessage = `*Undangan Pernikahan Ahmad & Putri*\n\nKepada Yth. *${name.trim() || 'Bapak/Ibu/Saudara/i'}*,\n\nTanpa mengurangi rasa hormat, kami mengundang Anda untuk menghadiri acara pernikahan kami melalui tautan berikut:\n\n${guestUrl}\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nTerima kasih.`

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setHistory(JSON.parse(saved))
      }
    } catch {
      // ignore
    }
  }, [])

  const saveToHistory = (guestName: string, url: string) => {
    if (!guestName.trim()) return
    const newItem: GuestHistoryItem = {
      id: Date.now().toString(),
      name: guestName.trim(),
      url,
      createdAt: new Date().toLocaleString('id-ID', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
    const updated = [newItem, ...history.filter(h => h.name.toLowerCase() !== guestName.trim().toLowerCase())]
    setHistory(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
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

  const handleDeleteItem = (id: string) => {
    const updated = history.filter(h => h.id !== id)
    setHistory(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  const handleClearHistory = () => {
    if (window.confirm('Yakin ingin menghapus seluruh riwayat tamu?')) {
      setHistory([])
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  const quickPrefixes = ['Bpk. ', 'Ibu ', 'Keluarga ', 'Sahabat ']

  const filteredHistory = history.filter(h =>
    h.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Top Navigation Bar Sederhana */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
              A
            </div>
            <div>
              <h1 className="font-semibold text-slate-900 text-sm sm:text-base leading-tight">
                Panel Undangan Tamu
              </h1>
              <p className="text-xs text-slate-500">
                Ahmad Muis & Putri Vira
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Buka Web Undangan</span>
            </a>
            <button
              onClick={() => {
                window.location.href = window.location.pathname
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
              title="Keluar dari mode admin"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Form Buat Undangan (Kiri / Kolom Utama) */}
          <section className="lg:col-span-7 space-y-5">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 sm:p-6">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
                <PlusCircle className="w-5 h-5 text-indigo-600" />
                <h2 className="font-semibold text-slate-900 text-base">
                  Buat Link Tamu Baru
                </h2>
              </div>

              <div className="space-y-4">
                {/* Input Nama Tamu */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Nama Tamu / Keluarga Yang Diundang:
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Bpk. H. Bambang & Keluarga"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                  />

                  {/* Sapaan Cepat */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    <span className="text-[11px] text-slate-400 mr-1">Tambah sapaan:</span>
                    {quickPrefixes.map((prefix) => (
                      <button
                        key={prefix}
                        type="button"
                        onClick={() => setName(prev => prev.startsWith(prefix) ? prev : `${prefix}${prev}`)}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors cursor-pointer"
                      >
                        +{prefix.trim()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Box Link Hasil */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Tautan Khusus Tamu:
                  </label>
                  <div className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="text-xs font-mono text-slate-700 break-all select-all flex-1">
                      {guestUrl}
                    </span>
                    <a
                      href={guestUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-white rounded transition-colors"
                      title="Tes buka link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Preview Pesan WhatsApp */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Teks Pesan WhatsApp Siap Kirim:
                  </label>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 whitespace-pre-wrap leading-relaxed font-sans max-h-40 overflow-y-auto">
                    {whatsappMessage}
                  </div>
                </div>

                {/* Tombol Aksi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleCopyLink()}
                    className="py-2.5 px-4 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Link Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500" />
                        <span>Salin Link</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="py-2.5 px-4 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                  >
                    {copiedMsg ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Teks Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4 text-slate-500" />
                        <span>Salin Teks WA</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleShareWhatsApp()}
                  className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm shadow-emerald-700/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim ke WhatsApp Sekarang</span>
                </button>
              </div>
            </div>
          </section>

          {/* Kolom Riwayat Tamu (Kanan) */}
          <section className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-500" />
                  <h3 className="font-semibold text-slate-900 text-sm">
                    Riwayat Tamu ({history.length})
                  </h3>
                </div>

                {history.length > 0 && (
                  <button
                    onClick={handleClearHistory}
                    className="text-xs text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Hapus Semua</span>
                  </button>
                )}
              </div>

              {/* Pencarian Riwayat */}
              {history.length > 0 && (
                <div className="relative mb-3">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Cari nama tamu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-indigo-500"
                  />
                </div>
              )}

              {/* Daftar Tamu */}
              <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                {filteredHistory.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    {history.length === 0
                      ? 'Belum ada tamu yang dibuatkan link.'
                      : 'Nama tamu tidak ditemukan.'}
                  </div>
                ) : (
                  filteredHistory.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-slate-50 hover:bg-slate-100/70 border border-slate-200 rounded-lg flex items-center justify-between gap-3 transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          {item.createdAt}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => handleCopyLink(item.url, item.name)}
                          title="Salin Link"
                          className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-white rounded-md border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            const msg = `*Undangan Pernikahan Ahmad & Putri*\n\nKepada Yth. *${item.name}*,\n\nTanpa mengurangi rasa hormat, kami mengundang Anda untuk menghadiri acara pernikahan kami melalui tautan berikut:\n\n${item.url}\n\nTerima kasih.`
                            handleShareWhatsApp(msg, item.name, item.url)
                          }}
                          title="Kirim ke WA"
                          className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-md transition-all cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          title="Hapus"
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
