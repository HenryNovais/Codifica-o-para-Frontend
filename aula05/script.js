// Seleciona todos os elementos <details>
const detailsElements = document.querySelectorAll('details');

// Adiciona um evento de 'click' para cada elemento <details>
detailsElements.forEach(detail => {
  detail.addEventListener('click', () => {
    // Fecha todos os outros elementos <details>, exceto o que foi clicado
    detailsElements.forEach(otherDetail => {
      if (otherDetail !== detail) {
        otherDetail.removeAttribute('open');
      }
    });
  });
});
