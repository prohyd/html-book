const input = document.getElementById('text');

input.addEventListener('focus', () => {
  console.log('Поле активировано');
});

input.addEventListener('keydown', e => {
  console.log('Нажата клавиша:', e.key);
});

input.addEventListener('input', () => {
  console.log('Текущее значение:', input.value);
});

input.addEventListener('blur', () => {
  console.log('Ввод завершён');
});
