const cursor = document.querySelector('.cursor');

// Обновление позиции курсора
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Добавление класса при наведении на интерактивные элементы
const interactiveElements = document.querySelectorAll('a, button, input, textarea, [onclick]');

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});
