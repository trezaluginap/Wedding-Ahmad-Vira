import { motion } from 'framer-motion'

interface JasminePetalsProps {
  count?: number
}

// Menghasilkan kelopak bunga melati berterbangan perlahan (khas suasana akad Sunda)
export function JasminePetals({ count = 18 }: JasminePetalsProps) {
  // Posisi acak dan durasi bervariasi
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 100) / count + (Math.sin(i) * 5)}%`,
    duration: 12 + (i % 7) * 3,
    delay: (i % 6) * 1.5,
    size: 14 + (i % 3) * 6,
    rotateDelta: (i % 2 === 0 ? 1 : -1) * (180 + (i * 20)),
    sway: 20 + (i % 4) * 15,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: p.left, top: '-30px' }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, p.sway, -p.sway, 0],
            rotate: [0, p.rotateDelta],
            opacity: [0, 0.85, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          >
            {/* Kelopak Melati Putih Gading dengan sentuhan semburat kuning muda */}
            <path
              d="M 12 2 C 16 6, 20 10, 18 16 C 16 20, 12 22, 12 22 C 12 22, 8 20, 6 16 C 4 10, 8 6, 12 2 Z"
              fill="#FFFFFA"
              opacity="0.92"
            />
            <path
              d="M 12 5 C 14 8, 16 11, 15 15 C 14 17, 12 18, 12 18 C 12 18, 10 17, 9 15 C 8 11, 10 8, 12 5 Z"
              fill="#FEF08A"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
