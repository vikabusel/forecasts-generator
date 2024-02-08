/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const button = document.querySelector('.forecast-btn');
const forecasts = document.querySelector ('.forecasts');
const forecastItems = document.querySelector('#forecast-item');
const probability = document.querySelector('.current-forecast p');
const prediction = document.querySelector ('.current-forecast h1');
let predictionText = '';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener('click', function() {
    const predictionNumber = getRandomNumber(1, 6);
    const randomProbability = getRandomNumber(0, 101);

    if (predictionText) {
    const items = forecastItems.content.cloneNode(true);
    const predictionParagraph = items.querySelector('p');
    predictionParagraph.textContent = predictionText;
    forecasts.prepend(items);
    }

    if (predictionNumber === 1) {
        predictionText = "Пришло время действовать!";
      } else if (predictionNumber === 2) {
        predictionText = "Что ни делается - все к лучшему";
      } else if (predictionNumber === 3) {
        predictionText = "Делай что пожелаешь и не жалей!"; 
      } else if (predictionNumber === 4) {
        predictionText = "Ты уедешь в путешествие очень скоро";
      } else {
        predictionText = "Вскоре к вам явится кто-то неожиданный";
      }
   
    prediction.textContent = predictionText;
    probability.textContent = `Вероятность: ${randomProbability}%`;
});

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */


/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
