// js/diadospais.js

/**
 * Array de objetos representando os produtos eletrônicos para o Dia dos Pais.
 * Cada objeto contém informações essenciais para exibir o produto e interagir com ele.
 *
 * Propriedades de cada produto:
 * - id: Identificador único do produto.
 * - name: Nome do produto.
 * - price: Preço do produto.
 * - originalPrice: Preço original (para promoções), opcional.
 * - images: Array de URLs de imagens do produto (para o slider no modal).
 * - video: URL de um vídeo do produto (ex: YouTube embed link), opcional.
 * - description: Descrição detalhada do produto.
 * - category: Categoria do produto (usada para filtragem).
 * - whatsappText: Texto pré-preenchido para o WhatsApp ao comprar este produto.
 */
const eletronicosDiadosPais = [
   
    {
  id: 'fone-bluetooth-noise',
  name: '🎧🔇 Fone Bluetooth Premium com Cancelamento de Ruído',
  price: 289.00,
  originalPrice: 349.00, // Preço promocional
  images: [
    'img/fonesruidos.png',
    'img/foneruido.png'
  ],
  video: '', // Você pode adicionar um vídeo demonstrativo aqui
  description: `
    🎶 Mergulhe em uma experiência sonora imersiva!  
    🔇 Cancelamento de ruído ativo para eliminar distrações  
    🔋 Bateria de longa duração – horas de música sem interrupção  
    🛫 Perfeito para viagens, trabalho ou relaxamento  
    🧠 Design ergonômico e confortável para uso prolongado

    Um presente sofisticado que oferece qualidade e tranquilidade!
  `,
  category: 'fones',
  whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Fone de Ouvido Bluetooth Premium com Cancelamento de Ruído (R$ 289,00) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
},

     {
    id: 'astronauta-projetor-galaxia',
    name: '🚀✨ ASTRONAUTA PROJETOR GALÁXIA',
    price: 119.90,
    images: [
        'img/projetor-astronauta-luminaria-galaxia-nebulosa-abajur-estrelas-1080x1080.png',
        'img/astroprojetor.jpg',
        'img/projetor-astronauta-luminaria-galaxia-nebulosa-abajur-estrelas-1080x1080.png'
    ],
    video: 'img/videos/astronauta-projeto.mp4',
    description: '🚀✨ Transforme qualquer ambiente em um universo particular com esse projetor INCRÍVEL!\n\n🌌 Possui 7 modos de galáxia com efeitos que hipnotizam\n🛸 Design de astronauta futurista e super decorativo\n🎮 Controle remoto incluso para ajustar luzes e intensidade\n🔊 Conexão Bluetooth para ouvir suas músicas favoritas enquanto aprecia as estrelas\n\n💥 Ideal para quartos, salas, encontros, momentos de oração ou relaxamento profundo.',
    category: 'diversos',
    whatsappText: 'Olá! Tenho interesse no ASTRONAUTA PROJETOR GALÁXIA (R$ 119,90). Poderiam me passar mais informações sobre o produto e a entrega, por favor?'
},
    {
  id: 'mini-projetor-portatil',
  name: '📽️✨ Mini Projetor Portátil Smart com Wi-Fi',
  price: 349.90,
  originalPrice: 399.90, // Preço promocional
  images: [
    'img/projetor1.jpeg',
    'img/projet.jpg',
    'img/projetor1.jpeg'
  ],
  video: 'img/videos/projetor1.mp4', // Vídeo de demonstração incluso
  description: `
    🎬 Transforme qualquer ambiente em um cinema em segundos!  
    📦 Compacto, leve e fácil de transportar  
    🌐 Conectividade Wi-Fi e espelhamento de tela  
    🔊 Qualidade de imagem e som surpreendentes  
    🎁 Presente ideal para pais que amam entretenimento em qualquer lugar

    Um verdadeiro show de imagens na palma da mão!
  `,
  category: 'diversos',
  whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Mini Projetor Portátil Smart (R$ 349,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
},

{
  id: 'teclado-mecanico-gamer',
  name: '⌨️🎮 Teclado Mecânico Gamer RGB Profissional',
  price: 349.90,
  originalPrice: 399.90, // Preço promocional
  images: [
    'img/k552rgb-pro-pt-blue.jpg',
    'img/transferir.jpg',
    'img/tecladorgb.png'
  ],
  video: '',
  description: `
    ⚡ O presente perfeito para o pai gamer!  
    🎯 Switches mecânicos responsivos para máxima performance  
    🌈 Iluminação RGB personalizável  
    🛡️ Alta durabilidade e construção robusta  
    🕹️ Ideal para jogos intensos e também para produtividade no dia a dia

    Um equipamento de elite para quem merece o melhor!
  `,
  category: 'perifericos',
  whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Teclado Mecânico Gamer RGB (R$ 349,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
},

    {
  id: 'mini-compressor-ar',
  name: '🤩🔧 Mini Compressor de Ar Digital Lotus LT-A524',
  price: 149.90,
  originalPrice: 199.90,
  images: [
    'img/mini-compressor.jpeg',
    'img/compressor.png'
  ],
  video: '',
  description: `🎁 Torne o Dia dos Pais ainda mais especial com o presente ideal para quem ama praticidade e eficiência!

O Mini Compressor de Ar Digital Lotus LT-A524 é compacto, potente e indispensável para encher pneus de carros, motos, bicicletas e até bolas com rapidez e segurança.

✔️ Display digital com medição precisa da pressão  
✔️ Fácil de usar: basta conectar e ligar  
✔️ Portátil e leve – cabe no porta-luvas  
✔️ Ideal para emergências na estrada ou no dia a dia  
✔️ Bico universal e adaptadores inclusos  

🛠️ Um presente útil e surpreendente para pais que gostam de estar preparados para qualquer situação!`,
  category: 'diversos',
  whatsappText: `Olá! Tenho interesse no Mini Compressor de Ar Digital Lotus LT-A524 por R$ 149,90. Poderiam me informar sobre as formas de pagamento, entrega e mais detalhes?`
},
    {
  id: 'powerbank-peining',
  name: '🔋⚡ Power Bank Peining WUP-379 – 20.000mAh com Indução',
  price: 129.00,
  originalPrice: 159.00, // Preço promocional
  images: [
    'img/powerbank.jpeg',
    'img/356026-1.webp'
  ],
  video: '', // Adicione vídeo demonstrativo se disponível
  description: `
    📱 Nunca mais deixe o celular do seu pai sem bateria!  
    🔋 Capacidade gigante de 20.000mAh  
    🌀 Carregamento por indução incluso  
    🔌 Ideal para viagens, trabalho e uso diário  
    ✅ Carregue vários dispositivos ao mesmo tempo com praticidade

    Um presente útil, moderno e indispensável!
  `,
  category: 'diversos',
  whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Power Bank Peining WUP-379 (R$ 129,00) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
},

{
  id: 'mouse-ergonomico-wireless',
  name: '🖱️💼 Mouse Ergonômico Sem Fio Premium',
  price: 89.90,
  originalPrice: 109.90, // Preço promocional
  images: [
    'img/mouse1.webp',
    'img/mouse.jpg',
    'img/mousemouse.jpg'
  ],
  video: '',
  description: `
    ✨ Conforto, tecnologia e saúde em um só presente!  
    🖐️ Design ergonômico que evita dores e lesões  
    📶 Conexão sem fio para máxima liberdade de uso  
    ⚙️ Alta precisão e sensibilidade para trabalho ou estudo

    Ideal para pais que passam horas no computador!
  `,
  category: 'perifericos',
  whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Mouse Ergonômico Sem Fio Premium (R$ 89,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
},

{
  id: 'chromecast-hd',
  name: '📺📲 Google Chromecast 3ª Geração – Transforme sua TV',
  price: 180.00,
  originalPrice: 219.00, // Preço promocional
  images: [
    'img/chomecas.webp',
    'img/chomecast.png',
    'img/chomecast1.jpg'
  ],
  video: '',
  description: `
    🌐 Deixe a TV do seu pai super inteligente!  
    📲 Transmita vídeos, músicas e apps direto do celular  
    🎥 Compatível com YouTube, Netflix, Spotify, Disney+ e muito mais  
    🖥️ Conexão simples e rápida com qualquer TV com HDMI

    Entretenimento garantido para toda a família!
  `,
  category: 'diversos',
  whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Google Chromecast 3a Geração (R$ 180,00) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
},

   {
  id: 'Camera-Smart-Wifi-KAPBOOM-G4-5',
  name: '📹 Câmera Smart Wi-Fi – KAPBOOM G4-5',
  price: 90.00,
  originalPrice: 149.90,
  images: [
    'img/cameralampada.jpeg',
    'img/lampadacamera.png'
  ],
  video: '',
  description: `Segurança e praticidade em um só produto! A Câmera Smart Wi-Fi KAPBOOM G4-5 oferece rotação de 360°, visão noturna por infravermelho e detecção de movimento. Com áudio bidirecional e monitoramento em tempo real via aplicativo, você acompanha tudo pelo celular, mesmo à distância. Ideal para ambientes internos e externos (verificar no manual se possui proteção IP66).`,
  category: 'perifericos',
  whatsappText: 'Olá! Tenho interesse em saber mais sobre a Câmera Smart Wi-Fi KAPBOOM G4-5 (R$ 159,90). Poderiam me ajudar com informações sobre funcionalidades, entrega e como fazer a compra?'
},

  {
  id: 'copo-termico-stanley',
  name: '🧊✨ Copo Térmico Stanley Personalizado 1200ML',
  price: 199.90,
  originalPrice: 249.90, // Preço promocional
  images: [
    'img/copo-stanley.jpeg',
    'img/stanley.jpg',
    'img/copo-stanley.jpeg'
  ],
  video: '', // Adicione um link se tiver vídeo de demonstração
  description: `
    🎁 Um presente à altura do paizão!  
    🧊 Mantém bebidas geladas ou quentes por horas  
    💪 Capacidade gigante de 1200ML  
    ✨ Personalização exclusiva que faz toda a diferença  
    🌟 Ideal para trabalho, churrasco ou aquele momento de lazer

    Surpreenda no Dia dos Pais com um presente útil, elegante e resistente!
  `,
  category: 'diversos',
  whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Copo Térmico Stanley Personalizado 1200ML (R$ 199,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
},

   {
  id: 'controle-bluetooth',
  name: '🎮🔥 Controle Bluetooth para Jogos Mobile',
  price: 79.90,
  originalPrice: 99.90, // Preço promocional
  images: [
    'img/controle-gamepad.png',
    'img/control.png'
  ],
  video: '', // Pode adicionar link do YouTube se quiser mostrar o produto em ação
  description: `
    🚀 Leve a experiência de jogo do seu pai para outro nível com esse controle incrível!

    ✅ Compatível com Android e iOS  
    ✅ Alta precisão e resposta rápida  
    ✅ Confortável para longas sessões de jogo  
    ✅ Presente perfeito para o pai gamer neste Dia dos Pais!

    Garanta o seu agora e proporcione horas de diversão!
  `,
  category: 'perifericos',
  whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Controle Bluetooth para Jogos Mobile (R$ 79,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
},


    {
  id: 'Espelho-Luxo',
  name: '🪞✨ Espelho Luxo com Organizador de Maquiagem',
  price: 199.90,
  originalPrice: 249.90, // Preço promocional
  images: [
    'img/espelho2.png',
    'img/espelho1.png',
    'img/espelho3.png',
    'img/espelho2.png',
    'img/espelho3.png'
  ],
  video: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef',
  description: `
✔️ Espelho duplo com base giratória  
✔️ Organizador com divisórias para batons, pincéis, makes e bijus  
✔️ Material acrílico de alta qualidade  
✔️ Design clean e moderno que combina com qualquer quarto  
✔️ Ideal para sua penteadeira, estúdio ou até como presente 💝  

💖 A cantora @gabisaiury (1,4 MILHÃO de seguidores) usou e amou!

📦 Produto com alta saída – estoque vai acabar ainda hoje!
  `,
  category: 'beleza',
  whatsappText: 'Olá! Tenho interesse em saber mais e o valor do 🪞✨ Espelho Luxo com Organizador de Maquiagem (R$ 199,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
}
];

// Seletor para o container onde os produtos serão exibidos
const listaProdutosEletronicos = document.getElementById('lista-produtos-eletronicos');
// Seletor para os botões de filtro de categoria
const filterButtons = document.querySelectorAll('.filter-btn');
// Seletor para o campo de pesquisa
const searchInput = document.getElementById('searchInput');

/**
 * Função para criar o HTML de um card de produto.
 * @param {Object} produto - O objeto produto a ser renderizado.
 * @returns {string} - O HTML do card do produto.
 */
function criarCardProduto(produto) {
    // Verifica se há preço original para exibir como "de/por"
    const precoOriginalHtml = produto.originalPrice
        ? `<span class="text-muted text-decoration-line-through me-2">R$ ${produto.originalPrice.toFixed(2).replace('.', ',')}</span>`
        : '';

    return `
        <div class="col-md-6 col-lg-4 col-xl-3 mb-4" data-category="${produto.category}">
            <div class="card h-100 product-card shadow-sm">
                <img src="${produto.images[0]}" class="card-img-top" alt="Imagem de ${produto.name}" loading="lazy">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-roxo">${produto.name}</h5>
                    <p class="product-price flex-grow-1">
                        ${precoOriginalHtml}
                        <span class="text-laranja">R$ ${produto.price.toFixed(2).replace('.', ',')}</span>
                    </p>
                    <button class="btn btn-card-buy btn-lg mt-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                            data-product-id="${produto.id}">
                        Comprar ou Saber Mais
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Função para renderizar os produtos na página.
 * @param {Array<Object>} produtosParaExibir - O array de produtos a serem exibidos.
 */
function renderizarProdutos(produtosParaExibir) {
    listaProdutosEletronicos.innerHTML = ''; // Limpa o container antes de adicionar novos produtos
    if (produtosParaExibir.length === 0) {
        listaProdutosEletronicos.innerHTML = `
            <div class="col-12 text-center text-white">
                <p class="lead">Nenhum produto encontrado nesta categoria ou com este termo de pesquisa.</p>
            </div>
        `;
        return;
    }
    produtosParaExibir.forEach(produto => {
        listaProdutosEletronicos.innerHTML += criarCardProduto(produto);
    });

    // Adiciona o evento de clique aos botões "Ver Detalhes"
    adicionarEventosModalProdutos();
}

/**
 * Função para adicionar os eventos de clique aos botões "Ver Detalhes" dos produtos.
 * Isso garante que o modal seja preenchido corretamente com as informações do produto clicado.
 */
function adicionarEventosModalProdutos() {
    const detailButtons = document.querySelectorAll('.btn-card-buy');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const produtoSelecionado = eletronicosDiadosPais.find(p => p.id === productId);

            if (produtoSelecionado) {
                document.getElementById('modalProductName').textContent = produtoSelecionado.name;

                let modalPriceHtml = '';
                if (produtoSelecionado.originalPrice) {
                    modalPriceHtml += `<span class="text-muted text-decoration-line-through me-2">R$ ${produtoSelecionado.originalPrice.toFixed(2).replace('.', ',')}</span>`;
                }
                modalPriceHtml += `<span class="text-laranja">R$ ${produtoSelecionado.price.toFixed(2).replace('.', ',')}</span>`;
                document.getElementById('modalProductPrice').innerHTML = modalPriceHtml;

                document.getElementById('modalProductDescription').textContent = produtoSelecionado.description;

                // ===== Construindo o Carrossel de Imagens no Modal =====
                const carouselInner = document.getElementById('modalProductImagesCarouselInner');
                carouselInner.innerHTML = ''; // Limpa imagens anteriores
                produtoSelecionado.images.forEach((imageSrc, index) => {
                    const carouselItem = document.createElement('div');
                    carouselItem.classList.add('carousel-item');
                    if (index === 0) {
                        carouselItem.classList.add('active');
                    }
                    carouselItem.innerHTML = `<img src="${imageSrc}" class="d-block w-100 rounded" alt="Imagem ${index + 1} de ${produtoSelecionado.name}" loading="lazy">`;
                    carouselInner.appendChild(carouselItem);
                });

                // Se houver mais de uma imagem, ativa os controles do carrossel
                const carouselControls = document.getElementById('modalProductImagesCarouselControls');
                if (produtoSelecionado.images.length > 1) {
                    carouselControls.style.display = 'block'; // Mostra os controles
                } else {
                    carouselControls.style.display = 'none'; // Esconde os controles se houver apenas uma imagem
                }


                // ===== Adicionando o Vídeo (se existir) no Modal =====
                const modalProductVideoContainer = document.getElementById('modalProductVideoContainer');
                if (produtoSelecionado.video) {
                    modalProductVideoContainer.innerHTML = `
                        <div class="ratio ratio-16x9 mt-3">
                            <iframe src="${produtoSelecionado.video}"
                                    title="Vídeo de ${produtoSelecionado.name}"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen>
                            </iframe>
                        </div>
                    `;
                    modalProductVideoContainer.style.display = 'block'; // Mostra o container do vídeo
                } else {
                    modalProductVideoContainer.innerHTML = ''; // Limpa qualquer vídeo anterior
                    modalProductVideoContainer.style.display = 'none'; // Esconde o container do vídeo
                }


                // Configura o link do WhatsApp para o produto específico
                const whatsappLink = `https://wa.me/5561999602738?text=${encodeURIComponent(produtoSelecionado.whatsappText)}`;
                document.getElementById('whatsappBuyButton').href = whatsappLink;
            }
        });
    });
}

/**
 * Função para configurar os eventos de clique nos botões de filtro e a pesquisa.
 */
function configurarFiltrosEPesquisa() {
    let currentCategory = 'todos'; // Variável para rastrear a categoria atual

    // Evento de clique para os botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');

            currentCategory = this.getAttribute('data-category');
            filtrarEBuscarProdutos(currentCategory, searchInput.value);
        });
    });

    // Evento para o campo de pesquisa
    searchInput.addEventListener('input', () => {
        filtrarEBuscarProdutos(currentCategory, searchInput.value);
    });
}

/**
 * Função principal que filtra e busca os produtos com base na categoria e no termo de pesquisa.
 * @param {string} category - A categoria selecionada.
 * @param {string} searchTerm - O termo de pesquisa.
 */
function filtrarEBuscarProdutos(category, searchTerm) {
    let produtosFiltrados = eletronicosDiadosPais;

    // Primeiro, filtra por categoria
    if (category !== 'todos') {
        produtosFiltrados = produtosFiltrados.filter(produto => produto.category === category);
    }

    // Em seguida, filtra pelo termo de pesquisa (se houver)
    if (searchTerm.trim() !== '') {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        produtosFiltrados = produtosFiltrados.filter(produto => 
            produto.name.toLowerCase().includes(lowercasedSearchTerm) ||
            produto.description.toLowerCase().includes(lowercasedSearchTerm)
        );
    }

    renderizarProdutos(produtosFiltrados);
}

// Inicialização: Renderiza todos os produtos e configura os filtros quando o DOM estiver pronto.
document.addEventListener('DOMContentLoaded', () => {
    filtrarEBuscarProdutos('todos', ''); // Exibe todos os produtos por padrão
    configurarFiltrosEPesquisa();
});