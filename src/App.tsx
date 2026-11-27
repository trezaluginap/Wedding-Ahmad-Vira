import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Cover } from './components/Cover'
import { Hero } from './components/Hero'
import { Couple } from './components/Couple'
import { Event } from './components/Event'
import { Gallery } from './components/Gallery'
import { TurutMengundang } from './components/TurutMengundang'
import { Wishes } from './components/Wishes'
import { Gift } from './components/Gift'
import { AudioPlayer } from './components/AudioPlayer'
import { BottomNav } from './components/BottomNav'
import { SundaFloralDivider } from './components/SundaOrnaments'
import { JasminePetals } from './components/JasminePetals'
import { AdminDashboard } from './components/AdminDashboard'
import { INVITATION_DATA } from './data/invitation'

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [guestName, setGuestName] = useState('')
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('admin') === 'true' || params.get('secret') === 'manten') {
      setIsAdmin(true)
    }

    const to = params.get('to') || params.get('guest')
    if (to) {
      setGuestName(to.replace(/\+/g, ' '))
    }
  }, [])

  // Jika membuka URL admin, tampilkan AdminDashboard mandiri (bersih, tanpa tema undangan)
  if (isAdmin) {
    return <AdminDashboard />
  }

  const handleOpenInvitation = () => {
    setIsOpen(true)
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#FFF6F2] md:bg-[#F3E7E2] overflow-x-hidden relative flex justify-center selection:bg-[#FAD4C0] selection:text-[#5C2419]">
      {/* Audio Element */}
      <audio ref={audioRef} src={INVITATION_DATA.musicUrl} loop preload="auto" />

      {/* Screen Cover Modal */}
      <AnimatePresence>
        {!isOpen && (
          <Cover guestName={guestName} onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* Main Content: Fullscreen di HP, Frame Elegan di Desktop */}
      {isOpen && (
        <div className="w-full sm:max-w-md bg-[#FFF9F6] min-h-screen relative sm:shadow-2xl sm:border-x sm:border-[#E28574]/25 flex flex-col overflow-x-hidden pb-24 text-[#421E17]">
          {/* Kelopak Melati Melayang */}
          <JasminePetals count={12} />

          {/* Tombol Audio Player */}
          <AudioPlayer isPlaying={isPlaying} onToggle={toggleAudio} />

          {/* Rangkaian Section */}
          <Hero />
          <SundaFloralDivider className="w-10/12 mx-auto my-3" />
          <Couple />
          <SundaFloralDivider className="w-10/12 mx-auto my-3" />
          <Event />
          <SundaFloralDivider className="w-10/12 mx-auto my-3" />
          <Gallery />
          <SundaFloralDivider className="w-10/12 mx-auto my-3" />
          <TurutMengundang />
          <SundaFloralDivider className="w-10/12 mx-auto my-3" />
          <Wishes />
          <SundaFloralDivider className="w-10/12 mx-auto my-3" />
          <Gift />

          {/* Footer */}
          <footer className="text-center py-10 px-4 text-xs text-[#8C645D] border-t border-[#E28574]/25 mt-6 bg-white/60">
            <p className="font-serif text-[#5C2419] font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ahmad Muis &amp; Putri Vira
            </p>
            <p className="italic text-[#7A5B55] mb-2 leading-relaxed">
              Terima kasih atas doa restu dan kehadiran Bapak/Ibu/Saudara/i sekalian.
            </p>
            <p className="text-[10px] text-[#C86D58] tracking-widest uppercase font-semibold">
              Sampurasun • Walimatul 'Ursy
            </p>
          </footer>

          {/* Bottom Navigation */}
          <BottomNav onBackToCover={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  )
}
