// Exemplo: Alertas interativos (opcional)
document.addEventListener('DOMContentLoaded', function() {
  // Exibir alerta ao clicar em "Comprar"
  const botoesComprar = document.querySelectorAll('.btn-laranja.btn-sm');
  botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
      alert('Produto adicionado ao carrinho! 🛒');
    });
  });

  // Animação simples para o newsletter
  const formNewsletter = document.querySelector('form');
  formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado por se inscrever! Em breve você receberá nossas ofertas. 😊');
    formNewsletter.reset();
  });
});