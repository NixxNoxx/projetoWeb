const slides = document.querySelectorAll('.slide');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');
let indice = 0;

function mostrarSlide(n) {
  slides.forEach(slide => slide.classList.remove('ativo'));
  slides[n].classList.add('ativo');
}

btnProximo.addEventListener('click', () => {
  indice = (indice + 1) % slides.length;
  mostrarSlide(indice);
});

btnAnterior.addEventListener('click', () => {
  indice = (indice - 1 + slides.length) % slides.length;
  mostrarSlide(indice);
});

setInterval(() => {
  indice = (indice + 1) % slides.length;
  mostrarSlide(indice);
}, 20000);
