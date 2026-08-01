import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { AboutSpecialistSection } from './components/AboutSpecialistSection';
import { ProductsSection } from './components/ProductsSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { GallerySection } from './components/GallerySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { WhatsAppConcierge } from './components/WhatsAppConcierge';
import { DiscretionModal } from './components/DiscretionModal';

export default function App() {
  const [isDiscretionModalOpen, setIsDiscretionModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C1819] flex flex-col selection:bg-[#E8D0C3] selection:text-[#2D152B] overflow-x-hidden">
      
      {/* 100% Mobile First Navbar */}
      <Navbar onOpenDiscretionModal={() => setIsDiscretionModalOpen(true)} />

      {/* Main Page Layout Flow */}
      <main className="flex-1">
        
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. BENEFÍCIOS */}
        <BenefitsSection />

        {/* 3. SOBRE A KAMILA */}
        <AboutSpecialistSection />

        {/* 4. PRODUTOS (VITRINE ELEGANTE) */}
        <ProductsSection />

        {/* INTERACTIVE QUIZ: RECOMMENDER */}
        <InteractiveQuiz />

        {/* 5. DIFERENCIAIS */}
        <DifferentialsSection />

        {/* 6. GALERIA COM LIGHTBOX */}
        <GallerySection />

        {/* 7. COMO FUNCIONA */}
        <HowItWorksSection />

        {/* 8. CTA FINAL */}
        <FinalCtaSection />

      </main>

      {/* 9. RODAPÉ */}
      <Footer />

      {/* STICKY FLOATING WHATSAPP WIDGET */}
      <WhatsAppConcierge />

      {/* DISCRETION & PRIVACY MODAL */}
      <DiscretionModal
        isOpen={isDiscretionModalOpen}
        onClose={() => setIsDiscretionModalOpen(false)}
      />

    </div>
  );
}
