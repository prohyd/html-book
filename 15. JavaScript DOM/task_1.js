const result = [];

document.querySelectorAll('*').forEach(el => {
    if (el.children.length === 3) {
        result.push(el);
    }
});

console.log(result);
