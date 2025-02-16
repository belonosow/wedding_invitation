// Элементы
const cardContainer = document.getElementById('card-container');
const card = document.getElementById('card');
const content = document.getElementById('content');
const navbar = document.querySelector('.navbar');
const photoSidebar = document.querySelector('.photo-sidebar');
const blocks = document.querySelectorAll('.block');

// Шаг 1: Появление открытки
setTimeout(() => {
    cardContainer.style.opacity = '1';

    // Шаг 2: Переворот открытки
    setTimeout(() => {
        card.classList.add('flipped');

        // Шаг 3: Появление навигации, основного контента и бокового блока
        setTimeout(() => {
            navbar.classList.add('visible');
            content.classList.add('visible');
            photoSidebar.classList.add('visible');

            // Появление блоков с задержкой
            blocks.forEach((block, index) => {
                setTimeout(() => {
                    block.classList.add('visible');
                }, index * 300); // Задержка 300 мс между блоками
            });
        }, 1000); // Задержка перед появлением блоков
    }, 1500); // Задержка перед переворотом открытки
}, 500); // Задержка перед появлением открытки

// Функция для плавной прокрутки
function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 800; // Продолжительность анимации (в миллисекундах)
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Функция для плавности (easing function)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Плавная прокрутка для навигационного меню
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение
        const targetId = this.getAttribute('href'); // Получаем ID целевого блока
        smoothScroll(targetId); // Плавная прокрутка
    });
});