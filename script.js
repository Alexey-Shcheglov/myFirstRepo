
let title;
let screens;
let adaptive;
let screenPrice;
let rollback = 10;

let service1;
let service2;
let servicePrice;
let allServicePrices;
let fullPrice;
let servicePercentPrice;


const isNumder = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num) && num != ' ';
};

const asking = function () {
	title = prompt('Как называется Ваш проект?', 'КалькУлятоР Верстки');
	screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
	adaptive = confirm('Нужен ли адаптив на сайте?');

	do {
		screenPrice = +prompt('Сколько будет стоить данная работа?');
	} 

	while (!isNumder(screenPrice)); 

};



const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
};


const getAllServicePrices = function () {
	let sum = 0;

	 for (let i = 0; i < 2; i++) {

		if(i === 0) {
			service1 = prompt('Какой дополнительный тип услуги нужен?');
		} else {
			service2 = prompt('Какой дополнительный тип услуги нужен?');
		}

		do {
			servicePrice = +prompt('Сколько это будет стоить?');
		}

		while (!isNumder(servicePrice));
		sum += servicePrice;
		
	}

	 return sum;
};

function getFullPrice () {
	return (allServicePrices + screenPrice);
}


const getTitle = function () {
	return (title.trim()[0].toUpperCase() + title.slice(1).toLowerCase());
};


const getServicePercentPrices = function (fullPrice, rollback) {
	return (Math.round(fullPrice - (fullPrice * (rollback / 100))));
};


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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(screenPrice);
console.log('allServicePrices', allServicePrices);

console.log(screens.toLowerCase().split(' '));
console.log(getRollBackMassage(fullPrice));
console.log(getServicePercentPrices(fullPrice, rollback));







