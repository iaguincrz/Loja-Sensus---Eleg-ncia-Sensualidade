import React, { useState } from 'react';
import { QUIZ_QUESTIONS, STORE_INFO, getGeneralWhatsappUrl } from '../data/storeData';
import { Sparkles, ArrowRight, RotateCcw, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';

export const InteractiveQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const activeQuestion = QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (value: string, categoryPreference: string) => {
    const updatedAnswers = { ...answers, [activeQuestion.id]: value };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setQuizCompleted(false);
  };

  const getCustomMatchWhatsappUrl = (): string => {
    const ansList = Object.values(answers).join(', ');
    const customText = `Olá Kamila! Fiz o teste no site da Loja Sensus para encontrar o produto ideal. Minhas respostas foram (${ansList}). Pode me enviar sugestões personalizadas?`;
    return `${STORE_INFO.whatsappBaseUrl}?text=${encodeURIComponent(customText)}`;
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F6] border-y border-[#E8D0C3]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#FAF9F6] via-[#F6EEEC] to-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-[#E8D0C3] shadow-lg relative overflow-hidden">
          
          {/* Top Label */}
          <div className="flex items-center justify-between gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8A4B6E]/10 text-[#8A4B6E] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Guia Personalizado Sensus</span>
            </span>

            {!quizCompleted && (
              <span className="text-xs font-semibold text-[#8A4B6E]">
                Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}
              </span>
            )}
          </div>

          {!quizCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-[#E8D0C3]/40 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-[#8A4B6E] transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Title */}
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1C1819] mb-6">
                {activeQuestion.question}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {activeQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.label, opt.categoryPreference)}
                    className="p-4 rounded-2xl bg-white hover:bg-[#FAF9F6] border border-[#E8D0C3] hover:border-[#8A4B6E] text-left text-xs sm:text-sm font-semibold text-[#1C1819] transition-all duration-200 hover:shadow-md flex items-center justify-between group cursor-pointer min-h-[56px]"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#8A4B6E] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Quiz Results Screen */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif-title text-2xl sm:text-4xl font-bold text-[#1C1819] mb-3">
                Resultado do seu perfil gerado com sucesso!
              </h3>

              <p className="text-xs sm:text-sm text-[#5A4D53] max-w-lg mx-auto mb-6 leading-relaxed">
                Com base nas suas preferências, a Kamila separou sugestões perfeitas e altamente discretas para o seu momento.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getCustomMatchWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#128C7E] hover:bg-[#075E54] text-white py-4 px-8 rounded-2xl font-bold text-sm sm:text-base shadow-lg flex items-center justify-center gap-2 min-h-[56px]"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Ver Minhas Sugestões no WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A4B6E] hover:underline cursor-pointer py-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer Teste</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
