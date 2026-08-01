import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#1C1819] text-white relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-b from-[#8A4B6E]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8D0C3] text-xs font-bold mb-6 border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atendimento 100% Discreto & Reservado</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Descubra produtos que valorizam sua autoestima e{' '}
          <span className="italic text-gold-gradient block sm:inline font-normal">
            transformam seus momentos especiais.
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Sua privacidade é nossa prioridade. Fale agora com a Kamila no WhatsApp e tire todas as suas dúvidas com conforto, discrição e acolhimento.
        </p>

        {/* Large Touch Button (>= 58px) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={STORE_INFO.defaultWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#128C7E] hover:bg-[#075E54] text-white py-4 px-10 rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98 min-h-[60px]"
          >
            <MessageCircle className="w-6 h-6 fill-white/20" />
            <span>Falar Agora no WhatsApp</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/70 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E8D0C3]" />
            <span>Sem cadastro obrigatório</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E8D0C3]" />
            <span>Embalagens 100% neutras</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#E8D0C3]" />
            <span>Atendimento humano em Goianésia - GO</span>
          </div>
        </div>

      </div>
    </section>
  );
};
