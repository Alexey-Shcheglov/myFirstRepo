'use strict';

const title = document.getElementByTagName('h1');
const handlerBtn = document.getElementsByClassName('.handler_btn');
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percen');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const range = document.querySelector('.rollback input');
const spanRangeValue = document.querySelector('.rollback span');
const totalImput = document.getElementsByClassName('total-input');
const totalImputPriceScreen = totalImput[0];
const totalImputTotalCount = totalImput[1];
const totalImputTotalCountOther = totalImput[2];
const totalImputTotalFullCount = totalImput[3];
const totalImputTotalCountRollback = totalImput[4];

let screens = document.querySelectorAll('.screen');

const appData = {
	title: ' ',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: {},
	start: function () {
		appData.asking();
		appData.addPrices();
		appData.getFullPrice();
		appData.getServicePercentPrices();
		appData.getTitle();
		appData.getRollBackMassage();
		appData.logger();	
	},
	isNumder: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num) && num != ' ';
	},
	isStr: function (str) {
		return isNaN(str) && str != '' && str.trim();
	},
	asking: function () {
		do {
			appData.title = prompt('Как называется Ваш проект?', 'КалькУлятоР Верстки');
		}  while (!appData.isStr(appData.title));
		appData.adaptive = confirm('Нужен ли адаптив на сайте?');

		for (let i = 0; i < 2; i++) {
			let price = 0;
			let name;
			do {
				 name = prompt('Какие типы экранов нужно разработать?');
			} while (!appData.isStr(name));
			
			do {
				price = prompt('Сколько будет стоить данная работа?');
			} while (!appData.isNumder(price));

			appData.screens.push({ id: i, name: name, price: price });
		}

		for (let i = 0; i < 2; i++) {
			let price = 0;
			let name;
			do {
				name = prompt('Какой дополнительный тип услуги нужен?');
			}	while (!appData.isStr(name) || appData.isNumder(name));


			do {
				price = prompt('Сколько это будет стоить?');
			} while (!appData.isNumder(price));

			appData.services[name + ' ' + i] = +price; // что бы не переписывались значения в объекте, добавили уникальные индификаторы равные индексу итеррации

		}
	},
	addPrices: function () {
		for (let screen of appData.screens) {
			appData.screenPrice += +screen.price;
		}

		for (let key in appData.services) {
			appData.allServicePrices += appData.services[key];
		}
	},
	getFullPrice: function  () {
		appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
	},
	getServicePercentPrices: function () {
		appData.servicePercentPrice = Math.round(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
	},
	getTitle: function () {
		appData.title = (appData.title.trim()[0].toUpperCase() + appData.title.slice(1).toLowerCase());
	},
	getRollBackMassage: function (price) {
		if (price >= 30000) {
			return 'Даем скидку 10%';
		} else if (price >= 15000 && price < 30000) {
			return 'Даем скидку 5%';
		} else if (price >= 0 && price < 15000) {
			return 'Скидка не предуссмотрена';
		} else {
			return 'Что-то пошло не так';
		}
	},
	logger: function () {
		console.log(appData.fullPrice);
		console.log(appData.servicePercentPrice);
		console.log(appData.screens);
		console.log(appData.services);
	}
};

appData.start();











