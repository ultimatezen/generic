'use strict';
module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('planDetail', {
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
			lang: {
				allowNull: false,
				type: Sequelize.STRING
			},
			name: {
				type: Sequelize.STRING
			},
			catchphrase: {
				type: Sequelize.TEXT
			},
			desc: {
				type: Sequelize.TEXT
			},
			seoTitle: {
				type: Sequelize.STRING
			},
			seoDesc: {
				type: Sequelize.TEXT
			},
			seoKeywords: {
				type: Sequelize.TEXT
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
		return queryInterface.dropTable('planDetail');
	}
};
