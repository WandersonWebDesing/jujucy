document.addEventListener('DOMContentLoaded', function() {
  const produtos = [
    {
      id: 1,
      nome: "Smartwatch Inteligente",
      preco: "199.90",
      descricao: "Monitor de saúde completo com rastreamento de atividades, monitoramento de batimentos cardíacos, notificações de aplicativos e chamadas. Perfeito para o dia a dia e para quem busca uma vida mais saudável.",
      tituloCard: "🤩 SMARTWATCH INTELIGENTE DE ÚLTIMA GERAÇÃO 🤩",
      descCard: "Mantenha-se conectado e saudável com o seu novo Smartwatch. Tecnologia no seu pulso!",
      imagens: [
        "img/smartwatch1.jpeg",
        "https://via.placeholder.com/300x200?text=Smartwatch+Imagem+2",
        "https://via.placeholder.com/300x200?text=Smartwatch+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemplo de vídeo embed do YouTube (substitua pelo real)
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Smartwatch%20Inteligente%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 2,
      nome: "Copo Térmico Stanley Personalizado",
      preco: "150.00",
      descricao: "Mantenha suas bebidas na temperatura ideal por horas. Ideal para todas as ocasiões.",
      tituloCard: "🤩 COPO TÉRMICO STANLEY PERSONALIZADO 1200ML 🤩",
      descCard: "🥶🔥 COPO STANLEY PERSONALIZADO 1200ML — SUA BEBIDA NA TEMPERATURA CERTA, COM SEU ESTILO! 🔥🥶",
      imagens: [
        "img/copo-stanley.jpeg",
        "https://via.placeholder.com/300x200?text=Copo+Stanley+Imagem+2",
        "https://via.placeholder.com/300x200?text=Copo+Stanley+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemplo de vídeo
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Copo%20T%C3%A9rmico%20Stanley%20Personalizado%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 3,
      nome: "Fones de Ouvido Bluetooth",
      preco: "99.90",
      descricao: "Liberdade total com fones sem fio de alta qualidade de som e bateria de longa duração.",
      tituloCard: "🎧 FONES DE OUVIDO BLUETOOTH PREMIUM 🎧",
      descCard: "Som imersivo e conforto para o seu dia a dia. Conecte-se sem limites!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Fone+Bluetooth+Imagem+1",
        "https://via.placeholder.com/300x200?text=Fone+Bluetooth+Imagem+2",
        "https://via.placeholder.com/300x200?text=Fone+Bluetooth+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemplo de vídeo
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20os%20Fones%20de%20Ouvido%20Bluetooth%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 4,
      nome: "Massageador Corporal Portátil",
      preco: "120.00",
      descricao: "Alivie tensões e dores musculares com este massageador prático e eficiente.",
      tituloCard: "💆‍♀️ MASSAGEADOR CORPORAL PORTÁTIL 💆‍♂️",
      descCard: "Relaxe a qualquer hora, em qualquer lugar. Seu bem-estar na palma da sua mão!",
      imagens: [
        "img/massageador.jpeg",
        "img/massageador.jpeg",
        "img/massageador.jpeg"
      ],
      video: "img/videos/massageador.mp4",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Massageador%20Corporal%20Port%C3%A1til%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 5,
      nome: "Luminária de Mesa LED",
      preco: "75.00",
      descricao: "Iluminação ajustável para estudo ou trabalho, com design moderno e elegante.",
      tituloCard: "💡 LUMINÁRIA DE MESA LED MULTIFUNCIONAL 💡",
      descCard: "Conforto visual e estilo para o seu ambiente. Perfeita para ler e trabalhar!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Luminaria+Imagem+1",
        "https://via.placeholder.com/300x200?text=Luminaria+Imagem+2",
        "https://via.placeholder.com/300x200?text=Luminaria+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20a%20Lumin%C3%A1ria%20de%20Mesa%20LED%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 6,
      nome: "Carregador Portátil Power Bank",
      preco: "80.00",
      descricao: "Nunca mais fique sem bateria. Carregue seus dispositivos em qualquer lugar.",
      tituloCard: "⚡ CARREGADOR PORTÁTIL POWER BANK ⚡",
      descCard: "Energia extra sempre com você. Compatível com diversos aparelhos!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Powerbank+Imagem+1",
        "https://via.placeholder.com/300x200?text=Powerbank+Imagem+2",
        "https://via.placeholder.com/300x200?text=Powerbank+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Carregador%20Port%C3%A1til%20Power%20Bank%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 7,
      nome: "Caixa de Som Bluetooth",
      preco: "110.00",
      descricao: "Som potente e portátil para suas festas e momentos de lazer.",
      tituloCard: "🔊 CAIXA DE SOM BLUETOOTH POTENTE 🔊",
      descCard: "Leve a festa com você! Áudio de alta qualidade e design compacto.",
      imagens: [
        "https://via.placeholder.com/300x200?text=Caixa+Som+Imagem+1",
        "https://via.placeholder.com/300x200?text=Caixa+Som+Imagem+2",
        "https://via.placeholder.com/300x200?text=Caixa+Som+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20a%20Caixa%20de%20Som%20Bluetooth%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
    id: 8,
    nome: "Mini Projetor Portátil",
    preco: "250.00",
    descricao: "Transforme qualquer parede em uma tela de cinema. Compacto e de alta definição.",
    tituloCard: "📽️ MINI PROJETOR PORTÁTIL HD 📽️",
    descCard: "Sua sala de cinema onde quiser! Filmes, séries e jogos em tela grande.",
    imagens: [
        "img/projetor1.jpeg", // Caminho para sua primeira imagem
        "img/projetor1.jpeg", // Caminho para sua segunda imagem
        "img/projetor1.jpeg"  // Caminho para sua terceira imagem
    ],
    video: "img/videos/projetor1.mp4", // Caminho para seu vídeo
    whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Mini%20Projetor%20Port%C3%A1til%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
},
    {
      id: 9,
      nome: "Câmera de Segurança Smart",
      preco: "180.00",
      descricao: "Monitore sua casa ou escritório de qualquer lugar com acesso via aplicativo.",
      tituloCard: " vigilant CÂMERA DE SEGURANÇA INTELIGENTE vigilance",
      descCard: "Proteção e tranquilidade para sua família. Monitore tudo pelo celular!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Camera+Seguranca+Imagem+1",
        "https://via.placeholder.com/300x200?text=Camera+Seguranca+Imagem+2",
        "https://via.placeholder.com/300x200?text=Camera+Seguranca+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20a%20C%C3%A2mera%20de%20Seguran%C3%A7a%20Smart%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 10,
      nome: "Kit Ferramentas Multiuso",
      preco: "90.00",
      descricao: "Essencial para pequenos reparos e montagens. Tenha tudo à mão.",
      tituloCard: "🔧 KIT FERRAMENTAS MULTIUSO ESSENCIAL 🔧",
      descCard: "Sua caixa de ferramentas completa para qualquer necessidade doméstica.",
      imagens: [
        "https://via.placeholder.com/300x200?text=Ferramentas+Imagem+1",
        "https://via.placeholder.hcom/300x200?text=Ferramentas+Imagem+2",
        "https://via.placeholder.com/300x200?text=Ferramentas+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Kit%20Ferramentas%20Multiuso%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 11,
      nome: "Purificador de Água Portátil",
      preco: "60.00",
      descricao: "Água pura e fresca em qualquer lugar. Ideal para viagens e atividades ao ar livre.",
      tituloCard: "💧 PURIFICADOR DE ÁGUA PORTÁTIL 💧",
      descCard: "Hidrate-se com segurança onde estiver. Água limpa a todo momento!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Purificador+Imagem+1",
        "https://via.placeholder.com/300x200?text=Purificador+Imagem+2",
        "https://via.placeholder.com/300x200?text=Purificador+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Purificador%20de%20%C3%81gua%20Port%C3%A1til%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 12,
      nome: "Mochila Antifurto com USB",
      preco: "140.00",
      descricao: "Design seguro e prático, com porta USB para carregar seus dispositivos em movimento.",
      tituloCard: "🎒 MOCHILA ANTIFURTO COM USB 🎒",
      descCard: "Segurança e praticidade para o seu dia a dia. Carregue seu celular em movimento!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Mochila+Imagem+1",
        "https://via.placeholder.com/300x200?text=Mochila+Imagem+2",
        "https://via.placeholder.com/300x200?text=Mochila+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20a%20Mochila%20Antifurto%20com%20USB%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 13,
      nome: "Robô Aspirador de Pó",
      preco: "350.00",
      descricao: "Limpeza automática e eficiente para sua casa. Programe e deixe ele trabalhar.",
      tituloCard: "🤖 ROBÔ ASPIRADOR DE PÓ INTELIGENTE 🤖",
      descCard: "Casa limpa sem esforço! Programável e eficiente para o seu dia a dia.",
      imagens: [
        "https://via.placeholder.com/300x200?text=Robo+Aspirador+Imagem+1",
        "https://via.placeholder.com/300x200?text=Robo+Aspirador+Imagem+2",
        "https://via.placeholder.com/300x200?text=Robo+Aspirador+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Rob%C3%B4%20Aspirador%20de%20P%C3%B3%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 14,
      nome: "Smart TV Box 4K",
      preco: "160.00",
      descricao: "Transforme sua TV em uma Smart TV com acesso a streamings e aplicativos em 4K.",
      tituloCard: "📺 SMART TV BOX 4K ULTRA HD 📺",
      descCard: "Sua TV com tudo! Acesse filmes, séries e jogos em alta resolução.",
      imagens: [
        "https://via.placeholder.com/300x200?text=TVBox+Imagem+1",
        "https://via.placeholder.com/300x200?text=TVBox+Imagem+2",
        "https://via.placeholder.com/300x200?text=TVBox+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Smart%20TV%20Box%204K%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 15,
      nome: "Teclado e Mouse Sem Fio",
      preco: "70.00",
      descricao: "Conforto e praticidade para seu trabalho ou lazer. Conexão estável.",
      tituloCard: "⌨️ TECLADO E MOUSE SEM FIO ERGONÔMICO 🖱️",
      descCard: "Liberdade e conforto para seu setup. Trabalhe e jogue sem limites!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Teclado+Mouse+Imagem+1",
        "https://via.placeholder.com/300x200?text=Teclado+Mouse+Imagem+2",
        "https://via.placeholder.com/300x200?text=Teclado+Mouse+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Teclado%20e%20Mouse%20Sem%20Fio%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 16,
      nome: "Lâmpada Smart Wi-Fi",
      preco: "45.00",
      descricao: "Controle a iluminação da sua casa pelo celular. Cores e intensidade ajustáveis.",
      tituloCard: "💡 LÂMPADA SMART WI-FI COLORIDA 💡",
      descCard: "Transforme seu ambiente com luzes inteligentes. Controle tudo pelo celular!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Lampada+Smart+Imagem+1",
        "https://via.placeholder.com/300x200?text=Lampada+Smart+Imagem+2",
        "https://via.placeholder.com/300x200?text=Lampada+Smart+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20a%20L%C3%A2mpada%20Smart%20Wi-Fi%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 17,
      nome: "Fone de Ouvido Gamer",
      preco: "130.00",
      descricao: "Áudio imersivo e microfone de alta qualidade para suas sessões de jogo.",
      tituloCard: "🎧 FONE DE OUVIDO GAMER COM MICROFONE 🎧",
      descCard: "Imersão total nos seus jogos. Comunicação clara com seus amigos!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Fone+Gamer+Imagem+1",
        "https://via.placeholder.com/300x200?text=Fone+Gamer+Imagem+2",
        "https://via.placeholder.com/300x200?text=Fone+Gamer+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Fone%20de%20Ouvido%20Gamer%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 18,
      nome: "Drone com Câmera HD",
      preco: "400.00",
      descricao: "Capture momentos incríveis com este drone fácil de pilotar e com câmera de alta definição.",
      tituloCard: "🚁 DRONE COM CÂMERA HD E ESTABILIZADOR 🚁",
      descCard: "Explore os céus e grave imagens espetaculares. Fácil de pilotar!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Drone+Imagem+1",
        "https://via.placeholder.com/300x200?text=Drone+Imagem+2",
        "https://via.placeholder.com/300x200?text=Drone+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Drone%20com%20C%C3%A2mera%20HD%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 19,
      nome: "Câmera de Ação Esportiva 4K",
      preco: "220.00",
      descricao: "Grave suas aventuras em 4K. Resistente à água e com diversos acessórios.",
      tituloCard: "📸 CÂMERA DE AÇÃO ESPORTIVA 4K 📸",
      descCard: "Capture suas aventuras em alta resolução. Durável e pronta para tudo!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Camera+Acao+Imagem+1",
        "https://via.placeholder.com/300x200?text=Camera+Acao+Imagem+2",
        "https://via.placeholder.com/300x200?text=Camera+Acao+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20a%20C%C3%A2mera%20de%20A%C3%A7%C3%A3o%20Esportiva%204K%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    },
    {
      id: 20,
      nome: "Kit de Limpeza para Eletrônicos",
      preco: "35.00",
      descricao: "Mantenha seus gadgets limpos e funcionando perfeitamente.",
      tituloCard: "✨ KIT DE LIMPEZA PARA ELETRÔNICOS ✨",
      descCard: "Seus gadgets sempre impecáveis. Prolongue a vida útil dos seus aparelhos!",
      imagens: [
        "https://via.placeholder.com/300x200?text=Kit+Limpeza+Imagem+1",
        "https://via.placeholder.com/300x200?text=Kit+Limpeza+Imagem+2",
        "https://via.placeholder.com/300x200?text=Kit+Limpeza+Imagem+3"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      whatsappLink: "https://wa.me/556199602738?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20vi%20o%20Kit%20de%20Limpeza%20para%20Eletr%C3%B4nicos%20e%20quero%20saber%20o%20valor%2C%20quanto%20fica%20para%20entregar%3F"
    }
  ];

  const listaProdutosDiv = document.getElementById('lista-produtos');

  function renderizarProdutos() {
    produtos.forEach(produto => {
      const carouselId = `carouselProduto${produto.id}`;
      let carouselInnerHtml = '';
      produto.imagens.forEach((img, index) => {
        carouselInnerHtml += `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100 rounded" alt="${produto.nome} Imagem ${index + 1}" loading="lazy">
          </div>
        `;
      });
      // Adiciona o item de vídeo se houver
      if (produto.video) {
        carouselInnerHtml += `
          <div class="carousel-item">
            <div class="ratio ratio-16x9">
              <iframe src="${produto.video}" title="Vídeo do Produto ${produto.nome}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
            </div>
          </div>
        `;
      }

      const cardHtml = `
        <div class="col-md-4 col-sm-6 col-12 d-flex mb-4">
          <article class="card h-100 border-0 shadow-sm product-card"
                   data-product-id="${produto.id}"
                   data-name="${produto.nome}"
                   data-price="${produto.preco}"
                   data-description="${produto.descricao}"
                   aria-labelledby="product-title-${produto.id}">

            <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner rounded">
                ${carouselInnerHtml}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev" aria-label="Slide anterior para ${produto.nome}">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next" aria-label="Próximo slide para ${produto.nome}">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
              </button>
            </div>

            <div class="card-body d-flex flex-column">
              <h3 class="card-title fw-bold" id="product-title-${produto.id}">${produto.tituloCard}</h3>
              <p class="card-text text-muted flex-grow-1">
                ${produto.descCard}
              </p>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <span class="fw-bold text-roxo fs-5" aria-label="Preço: Descubra o preço agora">🛒 Descubra o preço agora</span>
                <a href="${produto.whatsappLink}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="btn btn-success fw-bold px-4 py-2 rounded-3"
                   aria-label="Falar no WhatsApp sobre ${produto.nome}">
                  📲 Falar no WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      `;
      listaProdutosDiv.innerHTML += cardHtml;
    });
  }

  renderizarProdutos(); // Chama a função para renderizar os produtos ao carregar o DOM

  // Atualiza o ano no rodapé dinamicamente
  document.getElementById('current-year').textContent = new Date().getFullYear();
});