const imgs = document.querySelectorAll('.slider-img');
const dots = document.querySelectorAll('.slider-dots .dot');
let current = 0;

function showSlide(idx) {
  imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
  current = idx;
}

document.querySelector('.slider-btn.prev').onclick = () => {
  showSlide((current - 1 + imgs.length) % imgs.length);
};
document.querySelector('.slider-btn.next').onclick = () => {
  showSlide((current + 1) % imgs.length);
};
dots.forEach((dot, i) => {
  dot.onclick = () => showSlide(i);
});

// Troca automática a cada 5s
setInterval(() => {
  showSlide((current + 1) % imgs.length);
}, 5000);