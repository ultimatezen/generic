'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('reservation', {
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
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      guideId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'guide',
          key: 'id'
        }
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
    return queryInterface.dropTable('reservation');
  }
};