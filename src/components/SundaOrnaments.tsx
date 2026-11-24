import React from 'react'

// Siger Sunda - Mahkota Pengantin Tradisional Wanita Sunda versi Peach Rose Gold
export function SigerSunda({ className = "w-24 h-24", animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="peachGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E28574" />
          <stop offset="35%" stopColor="#FAD4C0" />
          <stop offset="70%" stopColor="#C86D58" />
          <stop offset="100%" stopColor="#8C3A27" />
        </linearGradient>
        <radialGradient id="gemPeach" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FFE0D3" />
          <stop offset="100%" stopColor="#C86D58" />
        </radialGradient>
      </defs>

      {/* Untaian Ronce Melati Kiri & Kanan */}
      <g className={animated ? "animate-pulse" : ""} opacity="0.95">
        <path d="M 30 75 Q 20 90 28 105 Q 32 112 25 120" stroke="url(#peachGold)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        <circle cx="28" cy="85" r="2.5" fill="#FFE2D5" stroke="#C86D58" strokeWidth="0.5" />
        <circle cx="22" cy="98" r="2.5" fill="#FFE2D5" stroke="#C86D58" strokeWidth="0.5" />
        <circle cx="27" cy="112" r="3" fill="#FFFFFF" stroke="#C86D58" strokeWidth="0.7" />

        <path d="M 170 75 Q 180 90 172 105 Q 168 112 175 120" stroke="url(#peachGold)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        <circle cx="172" cy="85" r="2.5" fill="#FFE2D5" stroke="#C86D58" strokeWidth="0.5" />
        <circle cx="178" cy="98" r="2.5" fill="#FFE2D5" stroke="#C86D58" strokeWidth="0.5" />
        <circle cx="173" cy="112" r="3" fill="#FFFFFF" stroke="#C86D58" strokeWidth="0.7" />
      </g>

      {/* Sayap / Mahkota Lengkung Dasar Siger */}
      <path
        d="M 20 75 Q 50 65 100 70 Q 150 65 180 75 Q 150 82 100 80 Q 50 82 20 75 Z"
        fill="url(#peachGold)"
        stroke="#8C3A27"
        strokeWidth="1"
      />

      <path
        d="M 25 72 C 60 62, 140 62, 175 72"
        stroke="#FFF0EB"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Lekuk Sayap Kiri Luar */}
      <path
        d="M 32 68 C 28 50, 42 42, 48 58 C 45 64, 40 66, 32 68 Z"
        fill="url(#peachGold)"
        stroke="#8C3A27"
        strokeWidth="1"
      />
      <circle cx="42" cy="50" r="2" fill="url(#gemPeach)" />

      {/* Lekuk Kiri Dalam */}
      <path
        d="M 52 64 C 50 38, 70 32, 75 52 C 70 58, 62 62, 52 64 Z"
        fill="url(#peachGold)"
        stroke="#8C3A27"
        strokeWidth="1.2"
      />
      <circle cx="65" cy="40" r="2.5" fill="url(#gemPeach)" />

      {/* Lekuk Kanan Dalam */}
      <path
        d="M 148 64 C 150 38, 130 32, 125 52 C 130 58, 138 62, 148 64 Z"
        fill="url(#peachGold)"
        stroke="#8C3A27"
        strokeWidth="1.2"
      />
      <circle cx="135" cy="40" r="2.5" fill="url(#gemPeach)" />

      {/* Lekuk Sayap Kanan Luar */}
      <path
        d="M 168 68 C 172 50, 158 42, 152 58 C 155 64, 160 66, 168 68 Z"
        fill="url(#peachGold)"
        stroke="#8C3A27"
        strokeWidth="1"
      />
      <circle cx="158" cy="50" r="2" fill="url(#gemPeach)" />

      {/* Mahkota Tengah Utama */}
      <path
        d="M 78 60 C 80 25, 96 15, 100 8 C 104 15, 120 25, 122 60 C 112 66, 88 66, 78 60 Z"
        fill="url(#peachGold)"
        stroke="#8C3A27"
        strokeWidth="1.5"
      />
      
      <path
        d="M 88 56 Q 100 28 112 56"
        stroke="#FFF0EB"
        strokeWidth="1"
        fill="none"
      />
      
      <circle cx="100" cy="18" r="4.5" fill="url(#gemPeach)" stroke="#8C3A27" strokeWidth="1" />
      <circle cx="100" cy="38" r="3.5" fill="url(#gemPeach)" stroke="#8C3A27" strokeWidth="1" />
      <circle cx="100" cy="54" r="3" fill="#FFFFFF" stroke="#C86D58" strokeWidth="0.8" />

      {/* Kembang Goyang */}
      <g stroke="url(#peachGold)" strokeWidth="1.2">
        <line x1="84" y1="25" x2="72" y2="12" />
        <circle cx="71" cy="11" r="3" fill="#FFE2D5" stroke="#8C3A27" strokeWidth="0.5" />
        
        <line x1="116" y1="25" x2="128" y2="12" />
        <circle cx="129" cy="11" r="3" fill="#FFE2D5" stroke="#8C3A27" strokeWidth="0.5" />
        
        <line x1="100" y1="8" x2="100" y2="2" />
        <circle cx="100" cy="2" r="2.5" fill="#FFFFFF" stroke="#8C3A27" strokeWidth="0.5" />
      </g>
    </svg>
  )
}

// Gunungan Wayang Peach Rose Gold
export function GununganWayang({ className = "w-32 h-44", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? "-scale-x-100" : ""}`}
    >
      <defs>
        <linearGradient id="gununganPeach" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E28574" />
          <stop offset="50%" stopColor="#C86D58" />
          <stop offset="100%" stopColor="#7A2E1E" />
        </linearGradient>
      </defs>

      <path
        d="M 80 10 
           C 105 50, 140 85, 145 125 
           C 150 160, 138 185, 120 190 
           L 40 190 
           C 22 185, 10 160, 15 125 
           C 20 85, 55 50, 80 10 Z"
        fill="url(#gununganPeach)"
        fillOpacity="0.08"
        stroke="url(#gununganPeach)"
        strokeWidth="1.8"
      />

      <path d="M 77 190 L 77 215 L 83 215 L 83 190 Z" fill="#C86D58" />
      <rect x="62" y="145" width="36" height="42" rx="4" stroke="#E28574" strokeWidth="1.5" fill="#FFF8F5" fillOpacity="0.8" />
      <path d="M 62 165 L 98 165" stroke="#E28574" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M 80 145 L 80 187" stroke="#E28574" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M 58 145 L 80 128 L 102 145 Z" fill="#C86D58" stroke="#7A2E1E" strokeWidth="1" />
      <path d="M 80 128 L 80 40" stroke="#C86D58" strokeWidth="2.5" strokeLinecap="round" />

      {/* Cabang Sulur */}
      <path d="M 80 115 Q 105 105 118 120 Q 112 128 100 122" stroke="#E28574" strokeWidth="1.5" fill="none" />
      <path d="M 80 115 Q 55 105 42 120 Q 48 128 60 122" stroke="#E28574" strokeWidth="1.5" fill="none" />
      <path d="M 80 90 Q 115 78 125 96 Q 115 104 98 96" stroke="#E28574" strokeWidth="1.5" fill="none" />
      <path d="M 80 90 Q 45 78 35 96 Q 45 104 62 96" stroke="#E28574" strokeWidth="1.5" fill="none" />
      <path d="M 80 65 Q 110 50 112 68 Q 102 72 90 68" stroke="#E28574" strokeWidth="1.2" fill="none" />
      <path d="M 80 65 Q 50 50 48 68 Q 58 72 70 68" stroke="#E28574" strokeWidth="1.2" fill="none" />

      <circle cx="80" cy="22" r="4" fill="#FAD4C0" />
      <path d="M 80 10 Q 84 16 80 22 Q 76 16 80 10 Z" fill="#E28574" />
    </svg>
  )
}

// Divider Ronce Melati Peach Soft
export function SundaFloralDivider({ className = "w-full my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#E28574]/40 to-[#C86D58]/60 flex-1" />
      
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 32 32" className="w-5 h-5 text-[#C86D58] animate-spin-slow" fill="currentColor">
          <circle cx="16" cy="16" r="3" fill="#FAD4C0" />
          <ellipse cx="16" cy="7" rx="2.5" ry="5" opacity="0.85" />
          <ellipse cx="16" cy="25" rx="2.5" ry="5" opacity="0.85" />
          <ellipse cx="7" cy="16" rx="5" ry="2.5" opacity="0.85" />
          <ellipse cx="25" cy="16" rx="5" ry="2.5" opacity="0.85" />
          <ellipse cx="9.5" cy="9.5" rx="4" ry="2" transform="rotate(45 9.5 9.5)" opacity="0.75" />
          <ellipse cx="22.5" cy="22.5" rx="4" ry="2" transform="rotate(45 22.5 22.5)" opacity="0.75" />
          <ellipse cx="9.5" cy="22.5" rx="4" ry="2" transform="rotate(-45 9.5 22.5)" opacity="0.75" />
          <ellipse cx="22.5" cy="9.5" rx="4" ry="2" transform="rotate(-45 22.5 9.5)" opacity="0.75" />
        </svg>
      </div>

      <div className="h-px bg-gradient-to-l from-transparent via-[#E28574]/40 to-[#C86D58]/60 flex-1" />
    </div>
  )
}

// Ornamen Sudut Peach
export function SundaCornerOrnament({ position = "top-left", className = "w-16 h-16" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; className?: string }) {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90"
  }[position]

  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} ${rotation} pointer-events-none`}>
      <path d="M 2 2 L 40 2 C 30 10, 20 15, 15 20 C 10 25, 6 35, 2 40 Z" fill="rgba(226, 133, 116, 0.12)" />
      <path d="M 2 2 L 48 2 C 34 12, 22 22, 12 34 L 2 48 Z" stroke="#C86D58" strokeWidth="1.2" strokeOpacity="0.65" />
      <path d="M 4 4 L 32 4 C 22 10, 14 18, 10 26 L 4 32 Z" stroke="#E28574" strokeWidth="1" strokeOpacity="0.8" />
      <circle cx="8" cy="8" r="2.5" fill="#FAD4C0" />
      <circle cx="18" cy="18" r="2" fill="#E28574" />
    </svg>
  )
}

// Bingkai Khusus Foto Pengantin dengan Ornamen Wayang & Sulur Ronce Melati
export function WayangBridalFrame({ children, isBride = false }: { children: React.ReactNode; isBride?: boolean }) {
  return (
    <div className="relative p-3 flex items-center justify-center">
      {/* Ornamen Sayap Wayang Kiri */}
      <div className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none select-none z-10">
        <svg viewBox="0 0 45 90" className="w-8 h-18 text-[#C86D58]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 40 10 Q 15 25 10 50 Q 5 70 35 85 Q 20 65 22 45 Q 25 25 40 10 Z" fill="#FCECE5" stroke="#C86D58" strokeWidth="1.5" />
          <path d="M 35 25 Q 18 38 20 55" stroke="#E28574" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
          <circle cx="14" cy="50" r="3" fill="#E28574" />
          <circle cx="28" cy="72" r="2.5" fill="#FAD4C0" stroke="#8C3A27" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Ornamen Sayap Wayang Kanan */}
      <div className="absolute -right-5 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none select-none z-10 -scale-x-100">
        <svg viewBox="0 0 45 90" className="w-8 h-18 text-[#C86D58]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 40 10 Q 15 25 10 50 Q 5 70 35 85 Q 20 65 22 45 Q 25 25 40 10 Z" fill="#FCECE5" stroke="#C86D58" strokeWidth="1.5" />
          <path d="M 35 25 Q 18 38 20 55" stroke="#E28574" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
          <circle cx="14" cy="50" r="3" fill="#E28574" />
          <circle cx="28" cy="72" r="2.5" fill="#FAD4C0" stroke="#8C3A27" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Bingkai Arsitektur Gerbang Wayang */}
      <div className="relative w-44 h-56 sm:w-48 sm:h-60 rounded-t-[100px] rounded-b-2xl p-1 bg-gradient-to-b from-[#F9DDD2] via-[#FFF3EE] to-[#F5CEBF] shadow-lg shadow-[#E28574]/20 border-2 border-[#E28574]/50">
        {/* Garis Dalam Berpola Ronce */}
        <div className="absolute inset-1.5 rounded-t-[94px] rounded-b-xl border border-dashed border-[#C86D58]/40 pointer-events-none z-10" />

        {/* Gambar Pengantin */}
        <div className="w-full h-full rounded-t-[92px] rounded-b-lg overflow-hidden relative bg-[#FAF3F0]">
          {children}
        </div>
      </div>

      {/* Hiasan Bawah: Sulur Ronce Melati */}
      <div className="absolute -bottom-2 inset-x-8 h-4 flex items-center justify-center gap-1.5 pointer-events-none z-20">
        <div className="w-2 h-2 rounded-full bg-[#FFFFFF] border border-[#C86D58] shadow-xs" />
        <div className="w-3 h-3 rounded-full bg-[#FAD4C0] border border-[#C86D58] shadow-xs" />
        <div className="w-2 h-2 rounded-full bg-[#FFFFFF] border border-[#C86D58] shadow-xs" />
      </div>

      {/* Mahkota Wayang / Siger di Atas (jika Bride) */}
      {isBride && (
        <div className="absolute -top-6 z-20 pointer-events-none">
          <SigerSunda className="w-24 h-12 drop-shadow-[0_2px_8px_rgba(200,109,88,0.35)]" />
        </div>
      )}
    </div>
  )
}
