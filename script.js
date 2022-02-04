
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



const getAllServicePrices = function (s1, s2) {
	return (s1 + s2);
};

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice (aSP, sP ) {
	return (aSP + sP);
}

fullPrice = getFullPrice(allServicePrices, screenPrice);


const getTitle = function (title) {
	return (title[0].toUpperCase() + title.slice(1).toLowerCase());
};

title = getTitle(title.trim());



const getServicePercentPrices = function (fullPrice, rollback) {
	return (Math.round(fullPrice - (fullPrice * (rollback / 100))));
};

servicePercentPrice = getServicePercentPrices(fullPrice, rollback);



const getRollBackMassage = function () {
	if (fullPrice >= 30000) {
		console.log('Даем скидку 10%');
	} else if (fullPrice >= 15000 && fullPrice < 30000) {
		console.log('Даем скидку 5%');
	} else if (fullPrice >= 0 && fullPrice < 15000) {
		console.log('Скидка не предуссмотрена');
	} else {
		console.log('Что-то пошло не так');
	}
};

getRollBackMassage(fullPrice);





console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.toLowerCase().split(' '));
console.log(servicePercentPrice);




