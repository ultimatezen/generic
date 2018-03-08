'use strict';

var testAreas = [
	{
		planId: 1,
		areaId: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 2,
		areaId: 2,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 3,
		areaId: 3,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 4,
		areaId: 4,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 5,
		areaId: 5,
		createdAt: new Date(),
		updatedAt: new Date()
	}
];

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('planArea', testAreas);
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('planArea', null, {});
	}
};

