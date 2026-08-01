import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, CheckCircle2, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F6EEEC] to-[#FAF9F6]">
      
      {/* Background Decorative Soft Lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-br from-[#E8D0C3]/30 via-[#D8B29C]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            
            {/* Top Tag Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8A4B6E]/10 text-[#8A4B6E] text-xs sm:text-sm font-semibold border border-[#8A4B6E]/20 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Elegância & Sensualidade</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FAF9F6] text-[#4A3E45] text-xs font-medium border border-[#D8B29C]/40 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#8A4B6E]" />
                <span>{STORE_INFO.city}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1819] leading-[1.12] tracking-tight mb-6">
              Mais autoestima, prazer e confiança para viver{' '}
              <span className="italic text-gold-gradient block sm:inline font-normal">
                momentos inesquecíveis.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#5A4D53] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              Na <strong className="font-semibold text-[#1C1819]">Loja Sensus</strong> você recebe um atendimento totalmente personalizado, discreto e acolhedor pela especialista <strong className="font-semibold text-[#8A4B6E]">Kamila</strong> para encontrar os produtos ideais para você ou para o casal.
            </p>

            {/* Big Touch CTA Button (Height >= 56px) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href={STORE_INFO.defaultWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#128C7E] hover:bg-[#075E54] text-white py-4 px-8 rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98 min-h-[58px]"
              >
                <MessageCircle className="w-6 h-6 fill-white/20" />
                <span>Quero falar no WhatsApp</span>
              </a>

              <a
                href="#produtos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF9F6] hover:bg-[#F2E8E4] text-[#1C1819] border border-[#D8B29C] py-4 px-6 rounded-2xl font-semibold text-sm transition-all min-h-[58px]"
              >
                <span>Ver Produtos</span>
              </a>
            </div>

            {/* Microcopy Checkmarks */}
            <div className="pt-2 border-t border-[#E8D0C3]/40 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-[#4A3E45]">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#FAF9F6]/80 p-2 rounded-lg border border-[#E8D0C3]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8A4B6E] flex-shrink-0" />
                <span>Atendimento reservado</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#FAF9F6]/80 p-2 rounded-lg border border-[#E8D0C3]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8A4B6E] flex-shrink-0" />
                <span>Resposta rápida</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#FAF9F6]/80 p-2 rounded-lg border border-[#E8D0C3]/30">
                <CheckCircle2 className="w-4 h-4 text-[#8A4B6E] flex-shrink-0" />
                <span>Compra com discrição</span>
              </div>
            </div>

          </div>

          {/* Specialist Main Photo Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              
              {/* Image Frame Container */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#FAF9F6] bg-[#1C1819]">
                <img
                  src={STORE_INFO.kamilaPhotoUrl}
                  alt={`Especialista ${STORE_INFO.specialist} - ${STORE_INFO.name}`}
                  className="w-full h-[420px] sm:h-[500px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1819]/80 via-transparent to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-dark border border-white/10 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif-title text-xl font-bold text-[#E8D0C3]">
                        {STORE_INFO.specialist}
                      </p>
                      <p className="text-xs text-white/80 font-medium">
                        Especialista em Atendimento Humanizado & Sensualidade
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#8A4B6E]/80 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 100% Discreto */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-[#FAF9F6] text-[#1C1819] p-3 rounded-2xl shadow-xl border border-[#D8B29C]/50 flex items-center gap-2.5 max-w-[200px]">
                <div className="w-9 h-9 rounded-xl bg-[#8A4B6E]/10 flex items-center justify-center text-[#8A4B6E] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">100% Discreto</p>
                  <p className="text-[10px] text-[#6E5D65]">Sigilo absoluto</p>
                </div>
              </div>

              {/* Floating Badge 2: Autoestima & Prazer */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#FAF9F6] text-[#1C1819] p-3 rounded-2xl shadow-xl border border-[#D8B29C]/50 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 flex-shrink-0">
                  <Heart className="w-5 h-5 fill-rose-500" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">Autoestima Elevada</p>
                  <p className="text-[10px] text-[#6E5D65]">Para você e o casal</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
