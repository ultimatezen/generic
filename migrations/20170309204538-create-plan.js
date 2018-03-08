'use strict';
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('plan', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			maxPeople: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			duration: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			timeStart: {
				allowNull: null,
				type: Sequelize.INTEGER
			},
			timeEnd: {
				allowNull: null,
				type: Sequelize.INTEGER
			},
			notice: {
				type: Sequelize.TEXT
			},
			comment: {
				type: Sequelize.TEXT
			},
			approvalStatus: {
				allowNull: null,
				type: Sequelize.INTEGER
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
		return queryInterface.dropTable('plan');
	}
};
