const paragraphs = ['C++', 'C#', 'JavaScript'];
const container = document.getElementById('text');

paragraphs.forEach((text, index) => {
    const p = document.createElement('p');
    p.textContent = text;
    container.insertBefore(p, container.children[index]);
});
