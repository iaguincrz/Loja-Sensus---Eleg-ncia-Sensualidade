import React, { useState } from 'react';
import { STORE_INFO, getGeneralWhatsappUrl } from '../data/storeData';
import { MessageCircle, X, ShieldCheck, Heart, Sparkles, Send } from 'lucide-react';

export const WhatsAppConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Expanded Quick Chat Preview Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#FAF9F6] rounded-3xl shadow-2xl border border-[#E8D0C3] overflow-hidden animate-fadeIn text-[#1C1819]">
          
          {/* Header */}
          <div className="bg-[#128C7E] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full border border-white/30 overflow-hidden bg-white">
                <img
                  src={STORE_INFO.kamilaPhotoUrl}
                  alt={STORE_INFO.specialist}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <p className="font-serif-title font-bold text-base leading-tight">
                  Atendimento Kamila
                </p>
                <p className="text-[10px] text-white/80 font-medium">
                  {STORE_INFO.name} • 100% Discreto
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#F2ECE9]/60 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-[#E8D0C3]/60 shadow-xs max-w-[90%] space-y-1">
              <p className="font-semibold text-[#8A4B6E]">Kamila • Especialista</p>
              <p className="text-[#4A3E45] leading-relaxed">
                Olá! Seja muito bem-vinda à <strong>Loja Sensus</strong> 💕
              </p>
              <p className="text-[#4A3E45] leading-relaxed">
                Como posso te ajudar a escolher o produto ideal para a sua autoestima ou para o casal com total discrição?
              </p>
              <span className="text-[9px] text-[#8A7B82] block text-right">Agora mesmo</span>
            </div>

            {/* Quick Prompt Chips */}
            <div className="space-y-1.5 pt-1">
              <a
                href={getGeneralWhatsappUrl('Quero ver produtos para casal')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-[#E8D0C3]/20 border border-[#E8D0C3] p-2.5 rounded-xl text-left font-semibold text-[#1C1819] flex items-center justify-between text-[11px] group transition-all"
              >
                <span>❤️ Sugestões para Casal</span>
                <Send className="w-3.5 h-3.5 text-[#8A4B6E] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={getGeneralWhatsappUrl('Quero indicações de cosméticos e óleos')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-[#E8D0C3]/20 border border-[#E8D0C3] p-2.5 rounded-xl text-left font-semibold text-[#1C1819] flex items-center justify-between text-[11px] group transition-all"
              >
                <span>✨ Cosméticos & Óleos de Massagem</span>
                <Send className="w-3.5 h-3.5 text-[#8A4B6E] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={getGeneralWhatsappUrl('Quero tirar dúvidas sobre entrega em Goianésia')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-[#E8D0C3]/20 border border-[#E8D0C3] p-2.5 rounded-xl text-left font-semibold text-[#1C1819] flex items-center justify-between text-[11px] group transition-all"
              >
                <span>🚚 Dúvidas de Entrega & Sigilo</span>
                <Send className="w-3.5 h-3.5 text-[#8A4B6E] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-white border-t border-[#E8D0C3]/50">
            <a
              href={STORE_INFO.defaultWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Abrir Conversa Privada</span>
            </a>
          </div>

        </div>
      )}

      {/* Main Trigger Button */}
      <div className="relative group">
        
        {/* Pulsing Aura */}
        <span className="absolute -inset-1 rounded-full bg-[#128C7E]/40 blur-sm animate-ping pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-[#128C7E] hover:bg-[#075E54] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer min-h-[60px] min-w-[60px]"
          aria-label="Atendimento no WhatsApp com Kamila"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-white/20" />
          )}

          {/* Online Dot */}
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
        </button>

        {/* Hover Tooltip for desktop */}
        {!isOpen && (
          <div className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-[#1C1819] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            Falar com a Kamila 💕
          </div>
        )}

      </div>

    </div>
  );
};
