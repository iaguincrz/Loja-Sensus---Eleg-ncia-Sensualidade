import React, { useState } from 'react';
import { PRODUCTS, getProductWhatsappUrl } from '../data/storeData';
import { Product } from '../types';
import { MessageCircle, Sparkles, Eye, Check, Search, Shield, Filter } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = [
    'Todos',
    'Cosméticos Sensoriais',
    'Óleos & Massagem',
    'Wellness & Autocuidado',
    'Kits Especiais',
    'Lingerie & Acessórios'
  ];

  // Filter products based on active category and search query
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="produtos" className="py-16 sm:py-24 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#8A4B6E] font-bold block mb-2">
            Vitrine Exclusiva Loja Sensus
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1819] leading-tight mb-4">
            Nossa Seleção de Produtos Premium
          </h2>
          <p className="text-sm sm:text-base text-[#5A4D53] leading-relaxed">
            Curadoria criteriosa de itens para elevar sua sensibilidade, autoestima e momentos a dois.
            Clique em <strong className="text-[#8A4B6E]">Tenho Interesse</strong> para tirar dúvidas com a Kamila no WhatsApp.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-[#8A4B6E] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar produtos (ex: gel, massagem, vela)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E8D0C3] rounded-2xl py-3 pl-11 pr-4 text-sm text-[#1C1819] placeholder-[#8A7B82] focus:outline-none focus:ring-2 focus:ring-[#8A4B6E]/30 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8A4B6E] font-semibold bg-[#E8D0C3]/30 px-2 py-1 rounded-lg"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Category Filter Pills (Horizontal Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar justify-start sm:justify-center px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[44px] flex items-center justify-center ${
                  selectedCategory === cat
                    ? 'bg-[#8A4B6E] text-white shadow-md scale-102'
                    : 'bg-[#FAF9F6] border border-[#E8D0C3] text-[#4A3E45] hover:bg-[#E8D0C3]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Products Grid Showcase */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8D0C3] p-8 max-w-md mx-auto">
            <Sparkles className="w-10 h-10 text-[#8A4B6E] mx-auto mb-3" />
            <h3 className="font-serif-title text-xl font-bold text-[#1C1819] mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-xs text-[#5A4D53] mb-4">
              Não encontramos nenhum item com a busca "{searchQuery}". Fale diretamente com a Kamila para catálogo completo.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#8A4B6E] underline cursor-pointer"
            >
              Ver todos os produtos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8D0C3]/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Image Container with Zoom & Badge */}
                <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-[#FAF9F6] cursor-pointer" onClick={() => setActiveModalProduct(product)}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#FAF9F6]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#8A4B6E] border border-[#E8D0C3]/60 shadow-xs">
                    {product.category}
                  </div>

                  {/* Quick View Floating Eye */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full text-[#1C1819] opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Eye className="w-4 h-4 text-[#8A4B6E]" />
                  </div>
                </div>

                {/* Product Info Block */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    
                    {/* Feature Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {product.badges.slice(0, 2).map((badge, idx) => (
                        <span
                          key={idx}
                          className="bg-[#E8D0C3]/25 text-[#5C3B4E] text-[10px] font-semibold px-2.5 py-0.5 rounded-md border border-[#D8B29C]/30"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Name */}
                    <h3
                      onClick={() => setActiveModalProduct(product)}
                      className="font-serif-title text-xl sm:text-2xl font-bold text-[#1C1819] mb-2 hover:text-[#8A4B6E] transition-colors cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#5A4D53] line-clamp-2 leading-relaxed mb-4">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Actions & WhatsApp CTA */}
                  <div className="pt-4 border-t border-[#E8D0C3]/30">
                    <div className="flex items-center justify-between mb-3 text-xs text-[#8A4B6E] font-medium">
                      <span>{product.volumeOrDetails || 'Produto Selecionado'}</span>
                      <span className="flex items-center gap-1 font-bold">
                        <Shield className="w-3 h-3" /> Discreto
                      </span>
                    </div>

                    <a
                      href={getProductWhatsappUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-3.5 px-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98 min-h-[48px]"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Tenho Interesse</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-[#FAF9F6] rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#E8D0C3] p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 bg-white border border-[#E8D0C3] rounded-full p-2 text-[#1C1819] hover:bg-[#E8D0C3]/30 transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="aspect-video sm:aspect-square rounded-2xl overflow-hidden mb-5 bg-white border border-[#E8D0C3]">
              <img
                src={activeModalProduct.imageUrl}
                alt={activeModalProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="inline-block bg-[#8A4B6E]/10 text-[#8A4B6E] px-3 py-1 rounded-full text-xs font-bold mb-2">
              {activeModalProduct.category}
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1C1819] mb-3">
              {activeModalProduct.name}
            </h3>

            <p className="text-sm text-[#4A3E45] leading-relaxed mb-4">
              {activeModalProduct.fullDescription}
            </p>

            <div className="space-y-2 mb-6 bg-white p-4 rounded-xl border border-[#E8D0C3]">
              <p className="text-xs font-bold text-[#1C1819]">Destaques do produto:</p>
              <div className="flex flex-wrap gap-2">
                {activeModalProduct.badges.map((b, i) => (
                  <span key={i} className="text-xs bg-[#E8D0C3]/30 text-[#5C3B4E] px-2.5 py-1 rounded-lg flex items-center gap-1 font-medium">
                    <Check className="w-3 h-3 text-[#8A4B6E]" /> {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={getProductWhatsappUrl(activeModalProduct.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-4 px-6 rounded-2xl font-bold text-center flex items-center justify-center gap-2 shadow-lg min-h-[54px]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Quero saber mais no WhatsApp</span>
              </a>

              <button
                onClick={() => setActiveModalProduct(null)}
                className="w-full text-xs text-[#8A4B6E] font-semibold py-2 hover:underline cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
