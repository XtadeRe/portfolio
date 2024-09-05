const items = document.querySelectorAll('.time > h4');
const countdownElement = document.querySelector('.countdown');
// Начинаем отсчет
let countdownDate = new Date(2024, 7, 28, 14, 17, 0).getTime();

function getCountdownTime() {
    // Текущее время
    const now = new Date().getTime();

    // Найти разницу времени
    const distance = countdownDate - now;

    //1s = 1000ms
    //1m = 60s
    //1h = 60m
    //1d = 24h

    //Создаем переменные в милисекундах
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    //Получаем кол-во дней, часов, минут, секунд
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / oneSecond);

    //Массив с переменными
    const values = [days, hours, minutes, seconds];
    console.log(values);

    //Заполняем значения
    items.forEach(function (item, index) {
        item.textContent = values[index];
    });
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = '<h4 class="expired">Время вышло!</h4>';
    }
}
    //обновление счетчика
    let countdown = setInterval(function () { getCountdownTime() }, 1000); getCountdownTime();

    //инициализация текущего времени
    getCountdownTime();