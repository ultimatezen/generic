'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
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
    return queryInterface.dropTable('user');
  }
};