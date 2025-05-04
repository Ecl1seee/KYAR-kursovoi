// Функция для отображения уведомления
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Добавляем класс для анимации появления
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация кнопок добавления в корзину
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Товар добавлен в корзину');
        });
    });

    // Инициализация кнопок "Купить сейчас"
    const buyNowButtons = document.querySelectorAll('.buy-now');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('Покупка успешно оформлена');
        });
    });
});