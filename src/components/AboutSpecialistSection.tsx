import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, Heart, ShieldCheck, Sparkles, Award } from 'lucide-react';

export const AboutSpecialistSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-gradient-to-b from-[#F6EEEC] via-[#FAF9F6] to-[#FAF9F6] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F6] rounded-[32px] border border-[#E8D0C3] p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Aesthetic Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8D0C3]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Specialist Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#D8B29C]/40 bg-[#1C1819]">
                  <img
                    src={STORE_INFO.kamilaPhotoUrl}
                    alt={`Especialista ${STORE_INFO.specialist}`}
                    className="w-full h-[380px] sm:h-[460px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1819]/60 via-transparent to-transparent" />
                </div>

                {/* Floating Quote Badge */}
                <div className="absolute -bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E8D0C3] shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8A4B6E]/10 flex items-center justify-center text-[#8A4B6E] flex-shrink-0">
                      <Heart className="w-5 h-5 fill-[#8A4B6E]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1C1819]">
                        "O autocuidado e o prazer caminham juntos."
                      </p>
                      <p className="text-[10px] text-[#8A4B6E] font-medium">
                        — Kamila | Loja Sensus
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Specialist First-Person Story & Text */}
            <div className="lg:col-span-7">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A4B6E]/10 text-[#8A4B6E] text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atendimento Reservado & Acolhedor</span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1819] leading-tight mb-6">
                Olá, eu sou a <span className="italic text-gold-gradient font-normal">Kamila</span>.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#4A3E45] leading-relaxed mb-8">
                <p>
                  Criei a <strong>Loja Sensus</strong> porque acredito verdadeiramente que falar sobre intimidade, bem-estar e sensualidade deve ser algo <em>leve, natural e extremamente respeitoso</em>.
                </p>
                <p>
                  Meu objetivo vai muito além de indicar um produto: estou aqui para <strong>ouvir você com carinho</strong>, tirar dúvidas com total paciência e te ajudar a escolher a opção perfeita — seja para renovar sua autoestima a sós ou para criar momentos inesquecíveis ao lado de quem você ama.
                </p>
                <p>
                  Aqui em Goianésia e para toda a região, cada conversa é mantida sob <strong>absoluto sigilo e privacidade</strong>. Você não precisa ter vergonha nem receio de perguntar nada. Meu atendimento é 100% humanizado e feito de mulher para mulher, ou para casais que buscam novidades com segurança.
                </p>
              </div>

              {/* Highlight Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#E8D0C3]/20 border border-[#D8B29C]/30 text-xs sm:text-sm font-semibold text-[#1C1819]">
                  <ShieldCheck className="w-4 h-4 text-[#8A4B6E] flex-shrink-0" />
                  <span>Sigilo Absoluto do Início ao Fim</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#E8D0C3]/20 border border-[#D8B29C]/30 text-xs sm:text-sm font-semibold text-[#1C1819]">
                  <Award className="w-4 h-4 text-[#8A4B6E] flex-shrink-0" />
                  <span>Curadoria de Marcas Premium</span>
                </div>
              </div>

              {/* Direct CTA */}
              <a
                href={STORE_INFO.defaultWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#128C7E] hover:bg-[#075E54] text-white py-4 px-8 rounded-2xl font-bold text-base shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 w-full sm:w-auto min-h-[56px]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Conversar com a Kamila no WhatsApp</span>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
