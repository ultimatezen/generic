'use strict';

var testAreas = [
	{
		name: JSON.stringify({ en: 'Ikebukuro', ja: '池袋' }),
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: JSON.stringify({ en: 'Shibuya', ja: '渋谷' }),
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: JSON.stringify({ en: 'Shinagawa', ja: '品川' }),
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: JSON.stringify({ en: 'Akihabara', ja: '秋葉原' }),
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: JSON.stringify({ en: 'Tokyo', ja: '東京' }),
		createdAt: new Date(),
		updatedAt: new Date()
	}
];

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('area', testAreas);
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('area', null, {});
	}
};

