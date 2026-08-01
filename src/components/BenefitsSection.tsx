import React from 'react';
import { BENEFITS } from '../data/storeData';
import { MessageCircleHeart, ShieldCheck, Sparkles, Truck, HeartHandshake, PackageCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  MessageCircleHeart: <MessageCircleHeart className="w-6 h-6 text-[#8A4B6E]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#8A4B6E]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#8A4B6E]" />,
  Truck: <Truck className="w-6 h-6 text-[#8A4B6E]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#8A4B6E]" />,
  PackageCheck: <PackageCheck className="w-6 h-6 text-[#8A4B6E]" />,
};

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8A4B6E] font-bold block mb-2">
            Por que escolher a Loja Sensus
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1819] leading-tight mb-4">
            Benefícios pensados exclusivamente para o seu conforto
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D53]">
            Combinamos elegância, acolhimento e a maxima discrição em cada detalhe da sua experiência de compra.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF9F6] hover:bg-white rounded-2xl p-6 sm:p-8 border border-[#E8D0C3]/60 shadow-xs hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E8D0C3]/30 to-transparent rounded-bl-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100" />

              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#E8D0C3]/30 border border-[#D8B29C]/40 flex items-center justify-center mb-5 group-hover:bg-[#8A4B6E] group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(iconMap[item.icon] as React.ReactElement, {
                    className: 'w-6 h-6 text-[#8A4B6E] group-hover:text-white transition-colors'
                  })}
                </div>

                {/* Card Title */}
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#1C1819] mb-3 group-hover:text-[#8A4B6E] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-[#5A4D53] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Micro Indicator */}
              <div className="mt-6 pt-4 border-t border-[#E8D0C3]/20 flex items-center justify-between text-[11px] font-semibold text-[#8A4B6E]">
                <span>Padrão Loja Sensus</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A4B6E]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
