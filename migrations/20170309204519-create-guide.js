'use strict';
module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('guide', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			username: {
				type: Sequelize.STRING
			},
			firstname: {
				type: Sequelize.STRING
			},
			lastname: {
				type: Sequelize.STRING
			},
			password: {
				type: Sequelize.STRING
			},
			/* TODO: implement salt
			salt: {
				type: Sequelize.STRING
			},
			*/
			email: {
				type: Sequelize.STRING
			},
			phone: {
				type: Sequelize.STRING
			},
			status: {
				type: Sequelize.INTEGER
			},
			lang: {
				type: Sequelize.STRING
			},
			warningLevel: {
				type: Sequelize.INTEGER
			},
			translatorLicense: {
				type: Sequelize.INTEGER
			},
			lastLogin: {
				type: Sequelize.INTEGER
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
	  		deletedAt: {
				type: Sequelize.DATE
			}
		});
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('guide');
	}
};
