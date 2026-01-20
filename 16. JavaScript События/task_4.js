const img = document.querySelector('img');

img.addEventListener('mouseenter', () => {
  img.classList.add('border');
});

img.addEventListener('mouseleave', () => {
  img.classList.remove('border');
});
