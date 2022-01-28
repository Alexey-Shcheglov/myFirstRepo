
let title = 'lesson02';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 500;
let rollback = 38;
let fullPrice = 1000;
let adaptive = true;

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

