'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('spotDetail', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			spotId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'spot',
					key: 'id'
				}
			},
			lang: {
				type: Sequelize.STRING
			},
			name: {
				type: Sequelize.STRING
			},
			url: {
				type: Sequelize.STRING
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
		return queryInterface.dropTable('spotDetail');
	}
};

