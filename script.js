
let title = prompt('Как называется Ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 38;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.round(fullPrice - (fullPrice * (rollback / 100)));

console.log(servicePercentPrice);



if (fullPrice >= 30000) {
	console.log('Даем скидку 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
	console.log('Даем скидку 5%');
} else if (fullPrice >= 0 && fullPrice < 15000) {
	console.log('Скидка не предуссмотрена');
} else {
	console.log('Что-то пошло не так');
}


alert('Первый урок!');
console.log('Привет консоль!');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + '$');
console.log('Стоимость разработки сайта ' + fullPrice + '$');
console.log(screens.toLowerCase());
console.log(fullPrice * (rollback/100));

