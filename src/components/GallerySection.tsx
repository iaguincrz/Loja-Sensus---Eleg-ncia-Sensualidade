import React, { useState } from 'react';
import { GALLERY_ITEMS, getProductWhatsappUrl } from '../data/storeData';
import { GalleryItem } from '../types';
import { ZoomIn, MessageCircle, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8A4B6E] font-bold block mb-2">
            Experiência Visual
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1819] leading-tight mb-4">
            Galeria de Detalhes & Texturas
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D53]">
            Clique em qualquer imagem para ampliar com nosso Lightbox e observar os detalhes com máxima nitidez.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-square rounded-2xl overflow-hidden border border-[#E8D0C3] bg-white cursor-pointer group shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-[#1C1819]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
                <span className="font-serif-title text-sm sm:text-base font-bold line-clamp-1">
                  {item.title}
                </span>
                <span className="text-[10px] text-[#E8D0C3] uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors cursor-pointer"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors cursor-pointer min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors cursor-pointer min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            className="max-w-3xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[65vh] w-auto overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-black mb-4">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[65vh] max-w-full object-contain mx-auto"
              />
            </div>

            {/* Lightbox Footer & WhatsApp Action */}
            <div className="w-full bg-[#1C1819]/90 border border-white/10 rounded-2xl p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-[#E8D0C3] uppercase tracking-widest font-semibold block">
                  {activeItem.category} ({lightboxIndex + 1} de {GALLERY_ITEMS.length})
                </span>
                <h3 className="font-serif-title text-xl font-bold">
                  {activeItem.title}
                </h3>
              </div>

              <a
                href={getProductWhatsappUrl(activeItem.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#128C7E] hover:bg-[#075E54] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md min-h-[48px] whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Tenho interesse nessa peça</span>
              </a>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
