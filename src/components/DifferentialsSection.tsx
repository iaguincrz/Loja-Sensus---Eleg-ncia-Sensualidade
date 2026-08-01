import React from 'react';
import { DIFFERENTIALS } from '../data/storeData';
import { UserCheck, Award, Compass, Lock, EyeOff, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5 text-[#8A4B6E]" />,
  Award: <Award className="w-5 h-5 text-[#8A4B6E]" />,
  Compass: <Compass className="w-5 h-5 text-[#8A4B6E]" />,
  Lock: <Lock className="w-5 h-5 text-[#8A4B6E]" />,
  EyeOff: <EyeOff className="w-5 h-5 text-[#8A4B6E]" />,
  Headphones: <Headphones className="w-5 h-5 text-[#8A4B6E]" />,
};

export const DifferentialsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF9F6] to-[#F6EEEC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8A4B6E] font-bold block mb-2">
            Nossa Garantia de Excelência
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1819] leading-tight mb-4">
            Diferenciais que Transmitem Confiança
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D53]">
            Sinta-se segura e acolhida do início ao fim com os pilares fundamentais da Loja Sensus.
          </p>
        </div>

        {/* 6 Differentials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((diff) => (
            <div
              key={diff.id}
              className="bg-white rounded-2xl p-6 border border-[#E8D0C3]/70 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E8D0C3]/30 border border-[#D8B29C]/40 flex items-center justify-center flex-shrink-0">
                {iconMap[diff.icon]}
              </div>

              <div>
                <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#1C1819] mb-1">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4D53] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
