import React from 'react';
import { HOW_IT_WORKS_STEPS, STORE_INFO } from '../data/storeData';
import { MessageCircle, ArrowDown, CheckCircle2, Lock } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF9F6] via-[#F6EEEC] to-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#8A4B6E] font-bold block mb-2">
            Simplicidade & Sigilo
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1819] leading-tight mb-4">
            Como Funciona seu Atendimento
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D53]">
            Quatro passos simples, transparentes e discretos para você adquirir seus produtos com total tranquilidade.
          </p>
        </div>

        {/* 4-Step Timeline Grid / Vertical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div key={step.stepNumber} className="relative flex flex-col items-center text-center">
              
              {/* Step Card */}
              <div className="w-full bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-[#E8D0C3] shadow-sm hover:shadow-lg transition-all duration-300 relative z-10 flex flex-col justify-between h-full">
                
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-full bg-[#8A4B6E] text-white font-serif-title text-xl font-bold flex items-center justify-center mx-auto mb-5 shadow-md border-2 border-white">
                  0{step.stepNumber}
                </div>

                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#1C1819] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A4D53] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8D0C3]/30 text-[11px] font-semibold text-[#8A4B6E]">
                  {step.detail}
                </div>

              </div>

              {/* Connecting Arrow for Mobile & Desktop */}
              {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="my-3 md:hidden text-[#8A4B6E]">
                  <ArrowDown className="w-6 h-6 animate-bounce" />
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Direct Action Link below Timeline */}
        <div className="mt-12 text-center">
          <a
            href={STORE_INFO.defaultWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white py-4 px-8 rounded-2xl font-bold text-sm sm:text-base shadow-md transition-all hover:scale-102 active:scale-95 min-h-[54px]"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Iniciar o Passo 1 no WhatsApp Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
