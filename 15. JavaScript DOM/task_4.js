document.querySelectorAll('img[width][height]').forEach(img => {
    img.removeAttribute('width');
    img.removeAttribute('height');
    img.classList.add('pict');
});
