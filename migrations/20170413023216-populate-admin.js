'use strict';

var testAdmin = {
	username: 'test',
	email: 'test@test.com',
	password: '$2a$10$OoLwa0ZRTv14wzU1PsFm..ZPYr1J5xxInvPH6YPk.zeOXXUB529Pq',
	status: 0,
	createdAt: new Date(),
	updatedAt: new Date()
};

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('admin', [ testAdmin ]);
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('admin', null, {});
	}
};

