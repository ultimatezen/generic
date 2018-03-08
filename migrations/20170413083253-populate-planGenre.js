'use strict';

var testGenres = [
	{
		planId: 1,
		genreId: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 2,
		genreId: 2,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 3,
		genreId: 3,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 4,
		genreId: 4,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 5,
		genreId: 5,
		createdAt: new Date(),
		updatedAt: new Date()
	}
];

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('planGenre', testGenres);
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('planGenre', null, {});
	}
};

