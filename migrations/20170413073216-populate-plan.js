'use strict';

var testPlans = [
	{
		maxPeople: 10,
		duration: 180,
		timeStart: 10,
		timeEnd: 20,
		notice: '猫に注意',
		comment: '少人数おすすめ',
		approvalStatus: 2,
		status: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		maxPeople: 15,
		duration: 90,
		timeStart: 12,
		timeEnd: 16,
		notice: '猫に注意',
		comment: '少人数おすすめ',
		approvalStatus: 2,
		status: 1,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		maxPeople: 12,
		duration: 240,
		timeStart: 8,
		timeEnd: 14,
		notice: '猫に注意',
		comment: '少人数おすすめ',
		approvalStatus: 0,
		status: 0,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		maxPeople: 30,
		duration: 60,
		timeStart: 8,
		timeEnd: 22,
		notice: '猫に注意',
		comment: '少人数おすすめ',
		approvalStatus: 1,
		status: 0,
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		maxPeople: 3,
		duration: 480,
		timeStart: 8,
		timeEnd: 12,
		notice: '猫に注意',
		comment: '少人数おすすめ',
		approvalStatus: 2,
		status: 0,
		createdAt: new Date(),
		updatedAt: new Date()
	}
];

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('plan', testPlans);
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('plan', null, {});
	}
};

