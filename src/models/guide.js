'use strict';

module.exports = function (sequelize, DataTypes) {
	var guide = sequelize.define('guide', {
		username: DataTypes.STRING,
		firstname: DataTypes.STRING,
		lastname: DataTypes.STRING,
		password: DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.STRING,
		lastlogin: DataTypes.DATE,
		status: DataTypes.INTEGER,
		lang: DataTypes.STRING,
		warningLevel: DataTypes.INTEGER,
		translatorLicense: DataTypes.INTEGER,
		lastLogin: DataTypes.INTEGER
	}, {
		freezeTableName: true,
		tableName: 'guide',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				guide.hasMany(models.reservation, {
					foreignKey: 'id'
				});

				guide.hasMany(models.guideDetail, {
					foreignKey: 'id'
				});
			}
		}
	});

	return guide;
};

