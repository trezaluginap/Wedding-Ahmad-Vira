import { Music, Disc } from 'lucide-react'
import { motion } from 'framer-motion'

interface AudioPlayerProps {
  isPlaying: boolean
  onToggle: () => void
}

export function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
  return (
    <div className="fixed top-4 right-4 sm:right-6 md:right-8 z-40 pointer-events-auto">
      {/* Ripple Wave Peach */}
      {isPlaying && (
        <motion.div
          animate={{ scale: [1, 1.4, 1.8], opacity: [0.6, 0.3, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
          className="absolute inset-0 rounded-full border border-[#E28574] pointer-events-none"
        />
      )}

      <button
        onClick={onToggle}
        aria-label="Toggle Musik"
        className="relative p-2.5 sm:p-3 rounded-full bg-white/95 backdrop-blur-md border border-[#E28574]/40 text-[#C86D58] shadow-lg shadow-[#C86D58]/15 hover:scale-105 active:scale-95 transition-all"
      >
        {isPlaying ? (
          <Disc className="w-4 h-4 sm:w-5 sm:h-5 animate-spin-slow text-[#C86D58] drop-shadow-[0_0_8px_rgba(200,109,88,0.3)]" />
        ) : (
          <Music className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 text-[#8C645D]" />
        )}
      </button>
    </div>
  )
}
