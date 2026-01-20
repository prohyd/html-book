document.querySelectorAll('ol').forEach(ol => {
    Array.from(ol.children).forEach((li, index) => {
        if ((index + 1) % 2 === 0) {
            li.style.display = 'none';
        }
    });
});
