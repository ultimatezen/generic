'use strict';

module.exports = function (sequelize, DataTypes) {
	var admin = sequelize.define('admin', {
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		username: DataTypes.STRING,
		status: DataTypes.INTEGER
	}, {
		freezeTableName: true,
		tableName: 'admin',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		}
	});

	return admin;
};

