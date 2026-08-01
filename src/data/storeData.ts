import { Product, Benefit, Differential, HowItWorksStep, QuizQuestion, GalleryItem } from '../types';

export const STORE_INFO = {
  name: 'Loja Sensus',
  slogan: 'Elegância & Sensualidade',
  specialist: 'Kamila',
  city: 'Goianésia - GO',
  instagramUrl: 'https://www.instagram.com/lojasensus/',
  whatsappNumber: '5562984467595',
  whatsappBaseUrl: 'https://wa.me/5562984467595',
  defaultWhatsappLink: 'https://wa.me/5562984467595?text=Olá!%20Tenho%20interesse%20nos%20produtos%20da%20Loja%20Sensus.%20Poderia%20me%20ajudar%3F',
  logoUrl: 'https://i.imgur.com/dmO1kK5.png',
  kamilaPhotoUrl: 'https://i.imgur.com/9d4k4LO.jpeg',
};

// Helper function to generate custom WhatsApp links
export function getProductWhatsappUrl(productName: string): string {
  const message = `Olá Kamila! Vi o produto "${productName}" no site da Loja Sensus e gostaria de mais informações. Pode me atender?`;
  return `${STORE_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsappUrl(customTopic?: string): string {
  const message = customTopic
    ? `Olá Kamila! Gostaria de uma orientação personalizada sobre: ${customTopic}`
    : `Olá Kamila! Tenho interesse nos produtos da Loja Sensus. Poderia me ajudar?`;
  return `${STORE_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Gel Corporal Sensorial Sensus Silk',
    category: 'Cosméticos Sensoriais',
    shortDescription: 'Textura aveludada com toque acetinado e aroma suave para momentos de reconexão e bem-estar.',
    fullDescription: 'Desenvolvido com ingredientes selecionados de alta biocompatibilidade, o Gel Sensorial Silk promove uma sensação térmica delicada e hidratação profunda. Ideal para massagens relaxantes e estimulantes a dois.',
    imageUrl: 'https://i.imgur.com/yDRFCLC.jpeg',
    badges: ['Mais Vendido', 'Hipoalergênico', 'Toque Acetinado'],
    volumeOrDetails: 'Frasco Airless 50ml',
    priceTag: 'Sob consulta com Kamila',
    isHighlight: true
  },
  {
    id: 'prod-2',
    name: 'Óleo de Massagem Erótica Warm Touch',
    category: 'Óleos & Massagem',
    shortDescription: 'Óleo vegetal nobre com efeito aquecimento suave ao toque da pele e respiração.',
    fullDescription: 'Sua fórmula exclusiva com óleos essenciais e antioxidantes desliza suavemente sem deixar residual gorduroso. Proporciona um aroma relaxante de baunilha e especiarias refinadas.',
    imageUrl: 'https://i.imgur.com/hvYtm4i.jpeg',
    badges: ['Aroma Suave', '100% Vegetal', 'Aquecimento Delicado'],
    volumeOrDetails: 'Frasco 100ml com dosador',
    priceTag: 'Sob consulta com Kamila',
    isHighlight: true
  },
  {
    id: 'prod-3',
    name: 'Vibrador Ergonômico Whisper Velvet',
    category: 'Wellness & Autocuidado',
    shortDescription: 'Design ultra discreto, silicone de grau médico aveludado e pulsações silenciosas.',
    fullDescription: 'O Whisper Velvet foi pensado para elevar o autoconhecimento e o prazer feminino com elegância. Possui 10 modos de vibração com motor magnético ultra silencioso e carregamento magnético USB.',
    imageUrl: 'https://i.imgur.com/3wn0Kmz.jpeg',
    badges: ['Silicone Médico', 'Ultra Silencioso', 'Resistente à Água'],
    volumeOrDetails: 'Carregamento USB-C | 10 Modos',
    priceTag: 'Sob consulta com Kamila',
    isHighlight: true
  },
  {
    id: 'prod-4',
    name: 'Kit Elixir de Sensasões para Casais',
    category: 'Kits Especiais',
    shortDescription: 'Combinação exclusiva com gel térmico, óleo corporal e vela aromática de massagem.',
    fullDescription: 'O kit ideal para criar uma atmosfera mágica e inesquecível no relacionamento. Acompanha guia de massagens elaborado especialmente para explorar novos estímulos com discrição e harmonia.',
    imageUrl: 'https://i.imgur.com/PFsy7mZ.jpeg',
    badges: ['Edição Especial', 'Acompanha Guia', 'Caixa Presenteável'],
    volumeOrDetails: 'Contém 3 itens premium',
    priceTag: 'Sob consulta com Kamila',
    isHighlight: false
  },
  {
    id: 'prod-5',
    name: 'Sérum Íntimo de Hidratação & Firmeza',
    category: 'Cosméticos Sensoriais',
    shortDescription: 'Cuidado diário com ácido hialurônico e extratos botânicos acalmantes.',
    fullDescription: 'Dermatologicamente e ginecologicamente testado. Promove tonificação, equilíbrio do pH e hidratação contínua da região íntima, prevenindo ressecamentos e aumentando a sensibilidade.',
    imageUrl: 'https://i.imgur.com/rbWxWxDF.jpeg',
    badges: ['Ginecologicamente Testado', 'PH Equilibrado', 'Uso Diário'],
    volumeOrDetails: '30ml com conta-gotas',
    priceTag: 'Sob consulta com Kamila',
    isHighlight: false
  },
  {
    id: 'prod-6',
    name: 'Acessório Dual Wave Satin Touch',
    category: 'Wellness & Autocuidado',
    shortDescription: 'Estimulador de ondas de ar com toque suave e design anatômico refinado.',
    fullDescription: 'Tecnologia sem contato direto que proporciona estímulos por ondas de pulsação de ar. Perfeito para momentos de relaxamento individual ou para apimentar a relação com novidade.',
    imageUrl: 'https://i.imgur.com/wv1h97N.jpeg',
    badges: ['Tecnologia Air Wave', 'Recarregável', 'Anatômico'],
    volumeOrDetails: 'Bateria de Longa Duração',
    priceTag: 'Sob consulta com Kamila',
    isHighlight: false
  },
  {
    id: 'prod-7',
    name: 'Vela Aromática de Massagem Rose Gold',
    category: 'Óleos & Massagem',
    shortDescription: 'Derrete em óleo morno nutritivo rico em manteiga de karité e vitamina E.',
    fullDescription: 'Ao acender, a vela se transforma em um óleo de massagem morno com temperatura corporal ideal. Fragrância envolvente com notas de orquídea e champanhe.',
    imageUrl: 'https://i.imgur.com/1UvJ6kv.jpeg',
    badges: ['Cera 100% Vegetal', 'Não Queima a Pele', 'Fragrância Francesa'],
    volumeOrDetails: 'Pote Cerâmico 80g',
    priceTag: 'Sob consulta com Kamila',
    isHighlight: false
  },
  {
    id: 'prod-8',
    name: 'Bálsamo Beijável Nectar Sensus',
    category: 'Cosméticos Sensoriais',
    shortDescription: 'Sabor refinado de frutas vermelhas com efeito eletrizante e vibrante.',
    fullDescription: 'Proporciona uma experiência gustativa e sensorial única no sexo oral. Fórmula alimentícia segura, sem adição de açúcares ou corantes artificiais.',
    imageUrl: 'https://i.imgur.com/vqhnvMl.jpeg',
    badges: ['Beijável', 'Sem Açúcar', 'Efeito Eletrizante Suave'],
    volumeOrDetails: 'Bisnaga 15g',
    priceTag: 'Sob consulta com Kamila',
    isHighlight: false
  },
  {
    id: 'prod-9',
    name: 'Coleção Lingerie & Acessórios Discretos',
    category: 'Lingerie & Acessórios',
    shortDescription: 'Peças com tecidos nobres, rendas macias e acabamento de alta costura.',
    fullDescription: 'Seja para uma ocasião comemorativa ou para se sentir mais confiante no dia a dia. Modelagens que valorizam todos os biotipos com extremo conforto e elegância.',
    imageUrl: 'https://i.imgur.com/UM8oPCJ.jpeg',
    badges: ['Modelagem Exclusiva', 'Renda Macia', 'Alta Confiança'],
    volumeOrDetails: 'Tamanhos do P ao EG',
    priceTag: 'Sob consulta com Kamila',
    isHighlight: false
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'ben-1',
    icon: 'MessageCircleHeart',
    title: 'Atendimento Personalizado',
    description: 'A Kamila atende cada cliente de forma única, escutando seus desejos e tirando dúvidas sem qualquer julgamento.'
  },
  {
    id: 'ben-2',
    icon: 'ShieldCheck',
    title: 'Total Discrição',
    description: 'Sua privacidade é prioridade absoluta. Atendimento privado, pacotes neutros e sigilo em cada detalhe.'
  },
  {
    id: 'ben-3',
    icon: 'Sparkles',
    title: 'Produtos Selecionados',
    description: 'Curadoria rigorosa de marcas de alta qualidade, com materiais seguros, hipoalergênicos e tecnologia de ponta.'
  },
  {
    id: 'ben-4',
    icon: 'Truck',
    title: 'Entrega Ágil & Discreta',
    description: 'Envios rápidos para Goianésia - GO e toda região com embalagem neutra sem menção ao tipo de produto.'
  },
  {
    id: 'ben-5',
    icon: 'HeartHandshake',
    title: 'Atendimento Humanizado',
    description: 'Foco total no seu bem-estar, na elevação da sua autoestima e na melhoria das experiências íntimas.'
  },
  {
    id: 'ben-6',
    icon: 'PackageCheck',
    title: 'Embalagem Discreta',
    description: 'Sua caixa chega lacrada, sem logos externos chamativos ou identificação do conteúdo na nota externa.'
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'diff-1',
    title: 'Atendimento Individual',
    description: 'Conversa direta com a especialista pelo WhatsApp no seu tempo e com total liberdade.',
    icon: 'UserCheck'
  },
  {
    id: 'diff-2',
    title: 'Produtos 100% Originais',
    description: 'Garantia de procedência, segurança dermatológica e marcas renomadas.',
    icon: 'Award'
  },
  {
    id: 'diff-3',
    title: 'Orientação de Uso',
    description: 'Explicações detalhadas de como utilizar cada produto para obter o máximo de prazer.',
    icon: 'Compass'
  },
  {
    id: 'diff-4',
    title: 'Compra Segura',
    description: 'Pagamentos facilitados com formas discretas na fatura do cartão ou PIX.',
    icon: 'Lock'
  },
  {
    id: 'diff-5',
    title: 'Discrição Garantida',
    description: 'Do primeiro "oi" no WhatsApp até a entrega final no seu endereço.',
    icon: 'EyeOff'
  },
  {
    id: 'diff-6',
    title: 'Suporte Completo',
    description: 'Acompanhamento carinhoso antes, durante e após a sua compra.',
    icon: 'Headphones'
  }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: 'Chame no WhatsApp',
    description: 'Clique em qualquer botão do site e envie uma mensagem direta para a especialista Kamila.',
    detail: 'Sem cadastros burocráticos ou formulários extensos.'
  },
  {
    stepNumber: 2,
    title: 'Receba Atendimento Personalizado',
    description: 'Tire suas dúvidas, explique o que procura e receba recomendações feitas sob medida para você.',
    detail: 'Conversa acolhedora, humana e reservada.'
  },
  {
    stepNumber: 3,
    title: 'Escolha seu Produto com Segurança',
    description: 'Defina o produto ideal e finalize sua compra com opções de pagamento flexíveis e discretas.',
    detail: 'Instruções simples de pagamento via PIX ou Cartão.'
  },
  {
    stepNumber: 4,
    title: 'Receba com Total Discrição',
    description: 'Sua encomenda é enviada em embalagem 100% neutra até o seu endereço com rapidez.',
    detail: 'Sem nenhuma identificação externa da loja no pacote.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = PRODUCTS.map((prod) => ({
  id: `gallery-${prod.id}`,
  title: prod.name,
  category: prod.category,
  imageUrl: prod.imageUrl
}));

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é o seu objetivo principal hoje?',
    options: [
      { label: 'Elevar minha autoestima e momento a sós', value: 'autocuidado', categoryPreference: 'Wellness & Autocuidado' },
      { label: 'Apimentar a relação e surpreender a dois', value: 'casal', categoryPreference: 'Kits Especiais' },
      { label: 'Experimentar sensações térmicas e aromas', value: 'sensorial', categoryPreference: 'Cosméticos Sensoriais' },
      { label: 'Conhecer novidades elegantes e discretas', value: 'novidades', categoryPreference: 'Óleos & Massagem' }
    ]
  },
  {
    id: 2,
    question: 'Qual tipo de experiência você prefere?',
    options: [
      { label: 'Toque suave, hidratação e massagem relaxante', value: 'massagem', categoryPreference: 'Óleos & Massagem' },
      { label: 'Géis estimulantes com efeitos térmicos', value: 'termico', categoryPreference: 'Cosméticos Sensoriais' },
      { label: 'Acessórios modernos, tecnológicos e silenciosos', value: 'tech', categoryPreference: 'Wellness & Autocuidado' },
      { label: 'Rendas, lingerie e lingerie sofisticada', value: 'lingerie', categoryPreference: 'Lingerie & Acessórios' }
    ]
  },
  {
    id: 3,
    question: 'Como você prefere ser atendida no WhatsApp?',
    options: [
      { label: 'Quero sugestões diretas da Kamila para meu perfil', value: 'sugestao', categoryPreference: 'Kits Especiais' },
      { label: 'Quero um catálogo de produtos discretos em PDF/Fotos', value: 'catalogo', categoryPreference: 'Cosméticos Sensoriais' },
      { label: 'Quero tirar dúvidas sobre o produto ideal para casais', value: 'duvidas_casal', categoryPreference: 'Kits Especiais' }
    ]
  }
];
