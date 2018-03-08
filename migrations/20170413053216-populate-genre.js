'use strict';

var testGenres = [
	{
		name: JSON.stringify({ en: 'Food', ja: '食事' }),
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: JSON.stringify({ en: 'Culture', ja: '文化' }),
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: JSON.stringify({ en: 'Sports', ja: 'スポーツ' }),
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: JSON.stringify({ en: 'Movies', ja: '映画' }),
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		name: JSON.stringify({ en: 'Health', ja: '健康' }),
		createdAt: new Date(),
		updatedAt: new Date()
	}
];

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('genre', testGenres);
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('genre', null, {});
	}
};

