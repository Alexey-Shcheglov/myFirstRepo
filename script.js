
let title = prompt('Как называется Ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice = Math.round(fullPrice - (fullPrice * (rollback / 100)));

const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
};


const getAllServicePrices = function () {
	return (servicePrice1 + servicePrice2);
};

allServicePrices = getAllServicePrices();

function getFullPrice () {
	return (allServicePrices + screenPrice);
}

fullPrice = getFullPrice();


const getTitle = function (title) {
	return (title[0].toUpperCase() + title.slice(1).toLowerCase());
};

title = getTitle(title.trim());


const getServicePercentPrices = function (fullPrice, rollback) {
	return (Math.round(fullPrice - (fullPrice * (rollback / 100))));
};

servicePercentPrice = getServicePercentPrices(fullPrice, rollback);



const getRollBackMassage = function (price) {
	if (price >= 30000) {
		return 'Даем скидку 10%';
	} else if (price >= 15000 && fullPrice < 30000) {
		return 'Даем скидку 5%';
	} else if (price >= 0 && fullPrice < 15000) {
		return 'Скидка не предуссмотрена';
	} else {
		return 'Что-то пошло не так';
	}
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle(title.trim());
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(' '));
console.log(getRollBackMassage(fullPrice));
console.log(getServicePercentPrices(fullPrice, rollback));








