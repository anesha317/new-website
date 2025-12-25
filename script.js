function buyTicket(movieName, time, hall) {
    const alertBox = document.getElementById('custom-alert');
    const alertText = document.getElementById('alert-text');
    
    // Формируем текст с данными фильма
    alertText.innerHTML = `Отлично! Вы купили билет на <b>"${movieName}"</b>.<br><br>Ждем вас вечером в нашем зале под номером <b>${hall}</b> в <b>${time}</b>!`;
    
    // Показываем окно
    alertBox.classList.remove('hidden');
}

function closeAlert() {
    document.getElementById('custom-alert').classList.add('hidden');
}

// Плавный скролл при клике на меню уже работает благодаря HTML href="#" и CSS scroll-behavior
// Функция для появления контента при скролле
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Слушаем событие прокрутки
window.addEventListener("scroll", reveal);

// Запускаем один раз при загрузке, чтобы верхние карточки сразу появились
reveal();
// Автоматически добавляем цены в карточки при загрузке
document.querySelectorAll('.movie-card').forEach((card, index) => {
    const info = card.querySelector('.info');
    const priceDiv = document.createElement('div');
    priceDiv.className = 'price-tag';
    
    // Распределяем цены: первым 4 фильмам 450р, остальным 350р и 300р
    if (index < 4) priceDiv.innerText = '450₽';
    else if (index < 8) priceDiv.innerText = '350₽';
    else priceDiv.innerText = '300₽';
    
    // Вставляем цену перед кнопкой
    info.insertBefore(priceDiv, card.querySelector('.card-btn'));
});

// Обновляем функцию покупки, чтобы она учитывала цену
const originalBuyTicket = buyTicket;
buyTicket = function(movieName, time, hall) {
    // Вызываем старую логику, но с новым текстом
    const alertBox = document.getElementById('custom-alert');
    const alertText = document.getElementById('alert-text');
    
    // Определяем цену для чека
    let finalPrice = "450₽";
    if (hall == '3' || hall == '5') finalPrice = "350₽";
    if (['8','2','1','7'].includes(hall)) finalPrice = "300₽";

    alertText.innerHTML = `
        <h3 style="color:#ff3c00; margin-bottom:10px;">БИЛЕТ ЗАБРОНИРОВАН</h3>
        <p>Фильм: <b>${movieName}</b></p>
        <p>Зал №<b>${hall}</b> | Время: <b>${time}</b></p>
        <p>К оплате: <span style="color:#00ff88; font-weight:900;">${finalPrice}</span></p>
        <br>
        <p>Отлично, ждем вас вечером!</p>
    `;
    alertBox.classList.remove('hidden');
};
// Переписываем логику цен на гривны
document.querySelectorAll('.movie-card').forEach((card, index) => {
    const priceDiv = card.querySelector('.price-tag');
    if (priceDiv) {
        // Устанавливаем цены в грн
        if (index < 4) priceDiv.innerText = '600 грн';
        else if (index < 8) priceDiv.innerText = '450 грн';
        else priceDiv.innerText = '400 грн';
    }
});

// Обновляем текст в окне покупки
const finalBuyTicket = buyTicket;
buyTicket = function(movieName, time, hall) {
    const alertBox = document.getElementById('custom-alert');
    const alertText = document.getElementById('alert-text');
    
    let priceGrn = "500 грн";
    if (hall == '3' || hall == '5') priceGrn = "500 грн";
    if (['8','2','1','7'].includes(hall)) priceGrn = "400 грн";

    alertText.innerHTML = `
        <h3 style="color:#ff3c00; margin-bottom:10px; font-family:'Montserrat';">БИЛЕТ ЗАБРОНИРОВАН</h3>
        <p>Фильм: <b>${movieName}</b></p>
        <p>Зал №<b>${hall}</b> | Время: <b>${time}</b></p>
        <p>К оплате: <span style="color:#00ff88; font-weight:900; font-size:1.4em;">${priceGrn}</span></p>
        <hr style="border:0.5px solid #333; margin:15px 0;">
        <p>Отлично, ждем вас вечером в Беляевке!</p>
    `;
    alertBox.classList.remove('hidden');
};