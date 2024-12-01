const images = document.querySelector('.carousel-images');
const buttons = document.querySelectorAll('.carousel-button');
let index = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('prev')) {
      index = (index > 0) ? index - 1 : images.children.length - 1;
    } else {
      index = (index < images.children.length - 1) ? index + 1 : 0;
    }
    images.style.transform = `translateX(-${index * 100}%)`;
  });
});
