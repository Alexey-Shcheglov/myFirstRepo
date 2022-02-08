
	const isNumder = function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num) && num != ' ';
	};

const appData = {
	
	title: ' ',
	screens: ' ',
	adaptive: true,
	screenPrice: 0,
	rollback: 10,

	service1: ' ',
	service2: ' ',
	servicePrice: 0,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,

	
	asking: function () {
		appData.title = prompt('Как называется Ваш проект?', 'КалькУлятоР Верстки');
		appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
		appData.adaptive = confirm('Нужен ли адаптив на сайте?');
	
		do {
			appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
		} 
	
		while (!isNumder(appData.screenPrice)); 
	
	},

	getAllServicePrices: function () {
		let sum = 0;
	
		 for (let i = 0; i < 2; i++) {
	
			if(i === 0) {
				appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
			} else  if(i === 1) {
				appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
			}
	
			do {
				appData.servicePrice = +prompt('Сколько это будет стоить?');
			}
	
			while (!isNumder(appData.servicePrice));
			sum += appData.servicePrice;
			
		}
	
		 return sum;
	},
	
	getFullPrice: function  () {
		return (appData.allServicePrices + appData.screenPrice);
	},

	getTitle: function () {
		return (appData.title.trim()[0].toUpperCase() + appData.title.slice(1).toLowerCase());
	},

	getServicePercentPrices: function () {
		return (Math.round(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))));
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


	start: function () {
		appData.asking();
		appData.allServicePrices = appData.getAllServicePrices();
		appData.fullPrice = appData.getFullPrice();
		appData.getTitle();
		appData.servicePercentPrice = appData.getServicePercentPrices();
		appData.getRollBackMassage();
		appData.logger();
		
	},

	logger: function () {
		for (let key in appData) {
			console.log(key + ': ' + appData[key]);
		}

		console.log(appData.screenPrice);
	}

};

appData.start();











