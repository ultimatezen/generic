'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('planGenre', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			planId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'plan',
					key: 'id'
				}
			},
			genreId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'genre',
					key: 'id'
				}
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
		return queryInterface.dropTable('planGenre');
	}
};

