import React, { useState, useEffect } from 'react';
import { STORE_INFO, getGeneralWhatsappUrl } from '../data/storeData';
import { MessageCircle, Shield, Instagram, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDiscretionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiscretionModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E8D0C3]/30 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Slogan */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#D8B29C]/50 bg-[#FAF9F6] p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src={STORE_INFO.logoUrl}
                alt={STORE_INFO.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#1C1819] block leading-tight">
                {STORE_INFO.name}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8A4B6E] font-medium block">
                {STORE_INFO.slogan}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A3E45]">
            <a href="#beneficios" className="hover:text-[#8A4B6E] transition-colors">
              Benefícios
            </a>
            <a href="#sobre" className="hover:text-[#8A4B6E] transition-colors">
              Sobre a Kamila
            </a>
            <a href="#produtos" className="hover:text-[#8A4B6E] transition-colors">
              Produtos
            </a>
            <a href="#diferenciais" className="hover:text-[#8A4B6E] transition-colors">
              Diferenciais
            </a>
            <a href="#galeria" className="hover:text-[#8A4B6E] transition-colors">
              Galeria
            </a>
            <a href="#como-funciona" className="hover:text-[#8A4B6E] transition-colors">
              Como Funciona
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Discretion Badge Button */}
            <button
              onClick={onOpenDiscretionModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8D0C3]/20 hover:bg-[#E8D0C3]/40 text-[#5C3B4E] text-xs font-semibold border border-[#D8B29C]/40 transition-all cursor-pointer"
              title="Clique para entender nossa garantia de discrição"
            >
              <Shield className="w-3.5 h-3.5 text-[#8A4B6E]" />
              <span>Discrição 100%</span>
            </button>

            {/* Instagram Link */}
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#4A3E45] hover:text-[#8A4B6E] hover:bg-[#E8D0C3]/20 rounded-full transition-all"
              title="Siga no Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* WhatsApp CTA Button */}
            <a
              href={STORE_INFO.defaultWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white px-4 py-2 rounded-full font-semibold text-xs tracking-wide shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Falar com a Kamila</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenDiscretionModal}
              className="p-2 text-[#8A4B6E] bg-[#E8D0C3]/20 rounded-full"
              title="100% Discreto"
            >
              <Shield className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#1C1819] hover:bg-[#E8D0C3]/30 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF9F6] border-b border-[#E8D0C3]/40 px-5 pt-4 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3 font-medium text-base text-[#1C1819] mb-5">
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8D0C3]/20 flex items-center justify-between"
            >
              <span>Benefícios</span>
              <span className="text-xs text-[#8A4B6E] font-semibold">Exclusivos</span>
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8D0C3]/20 flex items-center justify-between"
            >
              <span>Sobre a Kamila</span>
              <span className="text-xs text-[#8A4B6E] font-semibold">Especialista</span>
            </a>
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8D0C3]/20 flex items-center justify-between"
            >
              <span>Vitrine de Produtos</span>
              <span className="text-xs text-[#8A4B6E] font-semibold">Catálogo</span>
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8D0C3]/20 flex items-center justify-between"
            >
              <span>Diferenciais</span>
              <span className="text-xs text-[#8A4B6E] font-semibold">Segurança</span>
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8D0C3]/20 flex items-center justify-between"
            >
              <span>Galeria de Fotos</span>
              <span className="text-xs text-[#8A4B6E] font-semibold">Zoom</span>
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8D0C3]/20 flex items-center justify-between"
            >
              <span>Como Funciona</span>
              <span className="text-xs text-[#8A4B6E] font-semibold">Passo a Passo</span>
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={STORE_INFO.defaultWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-3.5 px-4 rounded-xl font-bold text-center text-sm shadow-md flex items-center justify-center gap-2 min-h-[52px]"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Quero falar no WhatsApp</span>
            </a>
            
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#FAF9F6] border border-[#D8B29C]/50 text-[#4A3E45] py-3 px-4 rounded-xl font-medium text-center text-xs flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#8A4B6E]" />
              <span>Siga @lojasensus no Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
