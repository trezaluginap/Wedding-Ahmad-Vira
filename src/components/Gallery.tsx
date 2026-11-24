import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Image as ImageIcon, Sparkles, ArrowLeft } from 'lucide-react'
import { INVITATION_DATA } from '../data/invitation'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false)

  const { gallery } = INVITATION_DATA
  const previewImages = gallery.slice(0, 4)

  return (
    <section id="gallery" className="py-12 sm:py-16 px-4 w-full text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C86D58] font-bold block mb-1">
          Galeri Foto
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#421E17]">
          Momen Bahagia Kami
        </h2>
        <p className="text-xs text-[#8C645D] mt-1 italic font-serif">
          Untaian kenangan indah yang mengiringi langkah cinta kami
        </p>
      </motion.div>

      {/* Grid Preview 4 Foto */}
      <div className="grid grid-cols-2 gap-3 mb-6 max-w-sm mx-auto">
        {previewImages.map((item, idx) => (
          <motion.div
            key={item.url}
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            onClick={() => setSelectedImage(item.url)}
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-[#FFF5F0] border-2 border-[#E28574]/35 shadow-xs"
          >
            <img
              src={item.url}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[#421E17]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
              <ImageIcon className="w-5 h-5 text-[#FFE0D3] mb-1" />
              <span className="text-[10px] text-white font-serif drop-shadow px-1">{item.caption}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tombol Lihat Semua Momen Kami */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsFullGalleryOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#E28574]/40 text-[#5C2419] font-semibold text-xs shadow-xs hover:bg-[#FFF5F0] transition-all"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#C86D58]" />
        <span>Lihat Semua Momen Kami ({gallery.length} Foto)</span>
      </motion.button>

      {/* Fullscreen Extended Gallery Modal */}
      <AnimatePresence>
        {isFullGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#FFF9F6]/98 backdrop-blur-md flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-[#E28574]/30 flex items-center justify-between max-w-sm mx-auto w-full">
              <button
                onClick={() => setIsFullGalleryOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E28574]/40 text-xs font-semibold text-[#5C2419] shadow-xs active:scale-95 transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-[#C86D58]" />
                <span>Kembali</span>
              </button>

              <div className="text-right">
                <span className="text-[9px] uppercase tracking-widest text-[#C86D58] font-bold block">
                  Galeri Prewedding
                </span>
                <h3 className="font-serif text-sm font-bold text-[#421E17]">
                  Semua Foto ({gallery.length})
                </h3>
              </div>
            </div>

            {/* Gallery Grid Langsung Tanpa Filter Kategori */}
            <div className="flex-1 overflow-y-auto p-4 max-w-sm mx-auto w-full">
              <div className="grid grid-cols-2 gap-3 pb-12">
                {gallery.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    onClick={() => setSelectedImage(item.url)}
                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-white border border-[#E28574]/30 shadow-xs"
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-[#421E17]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
                      <span className="text-[9px] text-white font-serif drop-shadow">{item.caption}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#421E17]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 text-white border border-white/20 text-xs font-semibold backdrop-blur-sm shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </button>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/20 text-white border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.88 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.88 }}
              className="relative max-w-full max-h-[85vh] p-2 bg-white rounded-2xl shadow-2xl border-2 border-[#E28574]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-[78vh] rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
