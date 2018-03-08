'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('scheduleSpot', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			scheduleId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'schedule',
					key: 'id'
				}
			},
			spotId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'spot',
					key: 'id'
				}
			},
			order: {
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
		return queryInterface.dropTable('scheduleSpot');
	}
};

