import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { Instagram, MessageCircle, ShieldCheck, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#120E10] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E8D0C3]/40 bg-white p-0.5">
                <img
                  src={STORE_INFO.logoUrl}
                  alt={STORE_INFO.name}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-serif-title text-2xl font-bold tracking-tight text-[#E8D0C3] block">
                  {STORE_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold block">
                  {STORE_INFO.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              Produtos íntimos selecionados para elevar sua autoestima e tornar seus momentos especiais ainda melhores. Atendimento 100% humanizado e discreto.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E8D0C3] font-medium pt-2">
              <MapPin className="w-4 h-4 text-[#8A4B6E]" />
              <span>{STORE_INFO.city}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-xs sm:text-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E8D0C3] mb-2">
              Navegação Rápida
            </p>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Kamila
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">
                  Vitrine de Produtos
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais & Sigilo
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria com Lightbox
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Discretion Commitment & Socials */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E8D0C3] mb-2">
              Compromisso de Sigilo
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#E8D0C3]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Embalagem 100% Neutra</span>
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed">
                Todas as compras são enviadas em caixas pardas totalmente neutras, sem logos ou menções ao tipo de produto na etiqueta externa.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all flex items-center gap-2 text-xs font-semibold"
              >
                <Instagram className="w-4 h-4 text-[#E8D0C3]" />
                <span>@lojasensus</span>
              </a>

              <a
                href={STORE_INFO.defaultWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#128C7E] hover:bg-[#075E54] rounded-xl text-white transition-all flex items-center gap-2 text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <p>© {currentYear} {STORE_INFO.name}. Todos os direitos reservados. {STORE_INFO.city}.</p>
          <p className="flex items-center gap-1 justify-center">
            Feito com <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> para elevar sua autoestima
          </p>
        </div>

      </div>
    </footer>
  );
};
