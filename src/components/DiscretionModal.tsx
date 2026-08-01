import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { ShieldCheck, PackageCheck, Lock, CheckCircle2, X, MessageCircle } from 'lucide-react';

interface DiscretionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscretionModal: React.FC<DiscretionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F6] rounded-3xl max-w-lg w-full border border-[#E8D0C3] p-6 sm:p-8 shadow-2xl relative text-[#1C1819]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white border border-[#E8D0C3] rounded-full p-2 text-[#1C1819] hover:bg-[#E8D0C3]/30 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-300">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1C1819] mb-3">
          Garantia de Sigilo & Discrição Total
        </h3>

        <p className="text-xs sm:text-sm text-[#5A4D53] leading-relaxed mb-6">
          Sua privacidade é inegociável na <strong className="text-[#1C1819]">{STORE_INFO.name}</strong>. Cuidamos de cada detalhe para que você compre com 100% de paz de espírito:
        </p>

        {/* Pillars */}
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-[#E8D0C3]">
            <PackageCheck className="w-5 h-5 text-[#8A4B6E] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-[#1C1819]">Embalagem Totalmente Neutra</p>
              <p className="text-[11px] text-[#5A4D53]">
                Caixa parda sem logotipo, sem nomes apelativos e sem qualquer menção ao conteúdo da encomenda.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-[#E8D0C3]">
            <Lock className="w-5 h-5 text-[#8A4B6E] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-[#1C1819]">Fatura & Extrato Discreto</p>
              <p className="text-[11px] text-[#5A4D53]">
                A identificação no cartão de crédito ou comprovante PIX vem com razão social genérica e segura.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-[#E8D0C3]">
            <CheckCircle2 className="w-5 h-5 text-[#8A4B6E] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-[#1C1819]">Atendimento Individual em Goianésia - GO</p>
              <p className="text-[11px] text-[#5A4D53]">
                Suas dúvidas no WhatsApp são tratadas diretamente pela Kamila com total sigilo e sensibilidade.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <a
            href={STORE_INFO.defaultWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-3.5 px-4 rounded-xl font-bold text-center text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Falar Privadamente no WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#8A4B6E] text-center py-1 hover:underline cursor-pointer"
          >
            Entendido, fechar aviso
          </button>
        </div>

      </div>
    </div>
  );
};
