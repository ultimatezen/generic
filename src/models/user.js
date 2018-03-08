'use strict';

module.exports = function (sequelize, DataTypes) {
	var user = sequelize.define('user', {
		email: DataTypes.STRING,
		status: DataTypes.INTEGER
	}, {
		freezeTableName: true,
		tableName: 'user',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here

				user.hasMany(models.reservation, {
					foreignKey: 'id'
				});

			}
		}
	});

	return user;
};
