'use strict';
module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('media', {
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
			name: {
				type: Sequelize.STRING
			},
			desc: {
				type: Sequelize.TEXT
			},
			src: {
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
			}
		});
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('media');
	}
};
