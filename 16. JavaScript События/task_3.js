const div = document.querySelector('div');

const style = getComputedStyle(div);
const paddingTop = parseFloat(style.paddingTop);
const paddingBottom = parseFloat(style.paddingBottom);

div.addEventListener('mouseenter', () => {
  div.style.paddingTop = paddingTop * 1.1 + 'px';
  div.style.paddingBottom = paddingBottom * 1.1 + 'px';
});

div.addEventListener('mouseleave', () => {
  div.style.paddingTop = paddingTop + 'px';
  div.style.paddingBottom = paddingBottom + 'px';
});
