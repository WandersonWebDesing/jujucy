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
        id: 'smartwatch-fitness',
        name: '🪞✨ Smartwatch Fitness Ultra – Oferta Relâmpago',
        price: 199.90,
        originalPrice: 249.90, // Preço promocional
        images: [
            'img/ARMARINHO.jpeg', // Substitua pela imagem real 1
            'https://via.placeholder.com/600x400?text=Smartwatch+Fitness+Ultra+2', // Imagem de placeholder para demonstração
            'https://via.placeholder.com/600x400?text=Smartwatch+Fitness+Ultra+3' // Imagem de placeholder para demonstração
        ],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef',
        description: 'Mantenha seu pai conectado e saudável com este smartwatch completo. Monitora batimentos, passos, sono e notificações. Resistente à água e com bateria de longa duração, é o presente ideal para pais ativos.',
        category: 'wearables',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Smartwatch Fitness Ultra (R$ 199,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'fone-bluetooth-noise',
        name: 'Fone de Ouvido Bluetooth Premium com Cancelamento de Ruído',
        price: 289.00,
        images: [
            'img/fonesruidos.png',
            'https://via.placeholder.com/600x400?text=Fone+de+Ouvido+Bluetooth+2'
        ],
        video: '',
        description: 'Experiência sonora imersiva e sem distrações com tecnologia de cancelamento de ruído ativo. Perfeito para trabalho, viagens ou relaxamento. Design confortável e bateria de longa duração para horas de música.',
        category: 'fones',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Fone de Ouvido Bluetooth Premium com Cancelamento de Ruído (R$ 289,00) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'mini-projetor-portatil',
        name: 'Mini Projetor Portátil Smart',
        price: 499.00,
        images: [
            'img/projetor1.jpeg',
            'https://via.placeholder.com/600x400?text=Mini+Projetor+2',
            'https://via.placeholder.com/600x400?text=Mini+Projetor+3'
        ],
        video: 'img/videos/projetor1.mp4',
        description: 'Transforme qualquer ambiente em um cinema em segundos! Compacto, fácil de usar e com excelente qualidade de imagem. Conectividade Wi-Fi e espelhamento de tela para o entretenimento do seu pai em qualquer lugar.',
        category: 'diversos',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Mini Projetor Portátil Smart (R$ 499,00) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'teclado-mecanico-gamer',
        name: 'Teclado Mecânico Gamer RGB',
        price: 349.90,
        images: [
            'img/transferir.jpg',
            'https://via.placeholder.com/600x400?text=Teclado+Mecânico+2'
        ],
        video: '',
        description: 'Para o pai gamer, um teclado com switches responsivos e iluminação RGB personalizável. Durabilidade e performance para as sessões de jogo mais intensas. Desempenho profissional para o seu herói.',
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
            'https://via.placeholder.com/600x400?text=Mini+Compressor+2'
        ],
        video: '',
        description: 'O assistente inteligente para a casa do seu pai. Controle músicas, notícias, alarmes e dispositivos smart com a voz. Torne o dia a dia dele mais prático e conectado.',
        category: 'diversos',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Mini Compressor de Ar Digital Lotus LT-A524 (R$ 149,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'powerbank-peining',
        name: 'Modelo Peining WUP-379 com 20.000mAh de potência e carregamento por indução incluso! 🌀📲',
        price: 129.00,
        images: [
            'img/powerbank.jpeg',
            'https://via.placeholder.com/600x400?text=Power+Bank+2'
        ],
        video: '',
        description: 'Nunca mais deixe o celular do seu pai sem bateria. Carregamento rápido e alta capacidade para vários dispositivos. Ideal para viagens e uso diário, garantindo que ele esteja sempre conectado.',
        category: 'diversos',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Power Bank Peining WUP-379 (R$ 129,00) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'mouse-ergonomico-wireless',
        name: 'Mouse Ergonômico Sem Fio Premium',
        price: 89.90,
        images: [
            'img/mouse.jpg',
            'https://via.placeholder.com/600x400?text=Mouse+Ergonômico+2'
        ],
        video: '',
        description: 'Conforto e precisão para o dia a dia do trabalho ou estudo. Design ergonômico que previne dores e oferece alta produtividade. Um presente que cuida da saúde e do bem-estar do seu pai.',
        category: 'perifericos',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Mouse Ergonômico Sem Fio Premium (R$ 89,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'chromecast-hd',
        name: 'Google Chromecast 3a Geração',
        price: 180.00,
        images: [
            'img/chomecast.png',
            'img/chomecast1jpg'
        ],
        video: '',
        description: 'Transforme qualquer TV em Smart TV. Transmita conteúdos do celular, tablet ou computador para a tela grande facilmente. Entretenimento garantido para toda a família com um clique.',
        category: 'diversos',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Google Chromecast 3a Geração (R$ 180,00) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'webcam-fullhd',
        name: 'Webcam Full HD com Microfone Integrado',
        price: 159.90,
        images: [
            'img/webcam.jpg',
            'https://via.placeholder.com/600x400?text=Webcam+Full+HD+2'
        ],
        video: '',
        description: 'Ideal para videochamadas de trabalho ou para matar a saudade da família. Imagem nítida e áudio claro para conexões de alta qualidade. Perfeito para o pai que trabalha em casa ou gosta de conversar com os amigos.',
        category: 'perifericos',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor da Webcam Full HD com Microfone Integrado (R$ 159,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'copo-termico-stanley',
        name: 'COPO TÉRMICO STANLEY PERSONALIZADO 1200ML',
        price: 199.90,
        images: [
            'img/copo-stanley.jpeg',
            'https://via.placeholder.com/600x400?text=Copo+Stanley+2',
            'https://via.placeholder.com/600x400?text=Copo+Stanley+3'
        ],
        video: 'https://www.youtube.com/embed/anotherproductvideo?si=abcdef',
        description: 'Um copo térmico de alta capacidade para manter a bebida do seu pai na temperatura ideal por horas. Ideal para o dia a dia, trabalho ou lazer. Personalizado para um toque especial.',
        category: 'diversos',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Copo Térmico Stanley Personalizado 1200ML (R$ 199,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'controle-bluetooth',
        name: 'Controle Bluetooth para Jogos Mobile',
        price: 79.90,
        images: [
            'img/controle-gamepad.png',
            'https://via.placeholder.com/600x400?text=Controle+Bluetooth+2'
        ],
        video: '',
        description: 'Leve a experiência de jogo do seu pai para outro nível no celular. Compatível com Android e iOS, proporciona precisão e conforto para horas de diversão. O presente perfeito para o pai gamer.',
        category: 'perifericos',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor do Controle Bluetooth para Jogos Mobile (R$ 79,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    },
    {
        id: 'caixa-som-portatil',
        name: 'Caixa de Som Bluetooth Portátil AquaSound',
        price: 119.90,
        images: [
            'img/caixasom1.jpg',
            'https://via.placeholder.com/600x400?text=Caixa+de+Som+AquaSound+2'
        ],
        video: '',
        description: 'Música de qualidade em qualquer lugar! Resistente à água e com som potente para animar os momentos do seu pai. Leve e fácil de transportar para a praia, churrasco ou qualquer aventura.',
        category: 'diversos',
        whatsappText: 'Olá! Tenho interesse em saber mais e o valor da Caixa de Som Bluetooth Portátil AquaSound (R$ 119,90) para o Dia dos Pais. Poderiam me ajudar com a compra e informações sobre a entrega?'
    }
];

// Seletor para o container onde os produtos serão exibidos
const listaProdutosEletronicos = document.getElementById('lista-produtos-eletronicos');
// Seletor para os botões de filtro de categoria
const filterButtons = document.querySelectorAll('.filter-btn');

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
                <p class="lead">Nenhum produto encontrado nesta categoria.</p>
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
 * Função para configurar os eventos de clique nos botões de filtro.
 */
function configurarFiltros() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');
            let produtosFiltrados = [];

            if (selectedCategory === 'todos') {
                produtosFiltrados = eletronicosDiadosPais;
            } else {
                produtosFiltrados = eletronicosDiadosPais.filter(produto => produto.category === selectedCategory);
            }
            renderizarProdutos(produtosFiltrados);
        });
    });
}

// Inicialização: Renderiza todos os produtos e configura os filtros quando o DOM estiver pronto.
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos(eletronicosDiadosPais); // Exibe todos os produtos por padrão
    configurarFiltros();
});