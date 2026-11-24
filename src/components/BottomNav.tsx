import { Heart, Calendar, Image as ImageIcon, MessageSquare, Gift, Users, Home } from 'lucide-react'

interface BottomNavProps {
  onBackToCover?: () => void
}

export function BottomNav({ onBackToCover }: BottomNavProps) {
  const items = [
    { label: 'Mempelai', href: '#couple', icon: Heart },
    { label: 'Acara', href: '#event', icon: Calendar },
    { label: 'Galeri', href: '#gallery', icon: ImageIcon },
    { label: 'Keluarga', href: '#turut-mengundang', icon: Users },
    { label: 'Ucapan', href: '#wishes', icon: MessageSquare },
    { label: 'Hadiah', href: '#gift', icon: Gift },
  ]

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-lg border border-[#E28574]/40 rounded-full px-3 py-1.5 shadow-lg shadow-[#C86D58]/15 flex items-center gap-1 sm:gap-2 max-w-[95vw]">
      {onBackToCover && (
        <button
          onClick={onBackToCover}
          className="flex flex-col items-center justify-center p-2 rounded-full text-[#8C645D] hover:text-[#C86D58] transition-colors"
          title="Kembali ke Cover"
        >
          <Home className="w-4 h-4" />
          <span className="text-[9px] mt-0.5 tracking-tight font-semibold hidden md:inline-block">
            Cover
          </span>
        </button>
      )}

      {items.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center p-2 rounded-full text-[#8C645D] hover:text-[#C86D58] transition-colors"
            title={item.label}
          >
            <Icon className="w-4 h-4" />
            <span className="text-[9px] mt-0.5 tracking-tight font-semibold hidden md:inline-block">
              {item.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
