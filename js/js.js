// js/js.js

document.addEventListener('DOMContentLoaded', function() {
  // Ativar o carrossel de promoções
  const promoCarousel = document.getElementById('promoCarousel');
  if (promoCarousel) {
    new bootstrap.Carousel(promoCarousel, {
      interval: 5000, // Troca de slide a cada 5 segundos
      pause: 'hover' // Pausa o carrossel ao passar o mouse
    });
  }

  // Lógica para o Modal de Detalhes do Produto
  const productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.addEventListener('show.bs.modal', function (event) {
      // Botão que acionou o modal
      const button = event.relatedTarget;

      // Extrair informações dos atributos data-*
      const productId = button.closest('.product-card').dataset.productId;
      const productName = button.closest('.product-card').dataset.name;
      const productPrice = button.closest('.product-card').dataset.price;
      const productDescription = button.closest('.product-card').dataset.description;
      const productImage = button.closest('.product-card').dataset.image;

      // Atualizar o conteúdo do modal
      const modalTitle = productModal.querySelector('#productModalLabel');
      const modalImage = productModal.querySelector('#modalProductImage');
      const modalProductName = productModal.querySelector('#modalProductName');
      const modalProductPrice = productModal.querySelector('#modalProductPrice');
      const modalProductDescription = productModal.querySelector('#modalProductDescription');
      const whatsappBuyButton = productModal.querySelector('#whatsappBuyButton');

      modalTitle.textContent = productName;
      modalImage.src = productImage;
      modalImage.alt = productName;
      modalProductName.textContent = productName;
      modalProductPrice.textContent = `R$ ${parseFloat(productPrice).toFixed(2).replace('.', ',')}`;
      modalProductDescription.textContent = productDescription;

      // Montar a mensagem do WhatsApp (você pode personalizar esta mensagem)
      const whatsappNumber = '55XXYYYYYYYYY'; // Substitua XX pelo DDD e YYYYYYYYY pelo número de telefone
      const whatsappMessage = encodeURIComponent(`Olá, tenho interesse no produto: ${productName} (ID: ${productId}). Poderia me dar mais informações e como faço para comprar?`);
      whatsappBuyButton.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    });
  }

  // Validação do formulário de Newsletter (Bootstrap 5)
  const newsletterForm = document.querySelector('#contato form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
      if (!newsletterForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      newsletterForm.classList.add('was-validated');
    }, false);
  }

  // Adicionar scroll suave para os links da navegação
  document.querySelectorAll('a.nav-link[href^="#"], .btn[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Adicionar classe 'active' ao link da navegação ao rolar
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) { // Ajuste para quando a seção entra na tela
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Efeito de sombra na navbar ao rolar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adiciona sombra após rolar 50px
      navbar.classList.add('shadow-sm');
    } else {
      navbar.classList.remove('shadow-sm');
    }
  });

});