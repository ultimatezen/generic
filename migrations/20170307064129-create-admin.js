'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('admin', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			email: {
				unique: true,
				type: Sequelize.STRING
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING
			},
			/* TODO: implement salt
			salt: {
				allowNull: false,
				type: Sequelize.STRING
			},
			*/
			username: {
				unique: true,
				type: Sequelize.STRING
			},
			status: {
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
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('admin');
	}
};

