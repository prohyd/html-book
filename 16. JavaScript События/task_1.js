const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let startX = 0;
let startY = 0;
let drawing = false;

canvas.addEventListener('mousedown', e => {
  startX = e.offsetX;
  startY = e.offsetY;
  drawing = true;
});

canvas.addEventListener('mousemove', e => {
  if (!drawing) return;
  const width = e.offsetX - startX;
  const height = e.offsetY - startY;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(startX, startY, width, height);
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
});
