'use strict';

module.exports = function (sequelize, DataTypes) {
	var spotDetail = sequelize.define('spotDetail', {
		lang: DataTypes.STRING,
		name: DataTypes.STRING,
		url: DataTypes.STRING
	}, {
		freezeTableName: true,
		tableName: 'spotDetail',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				spotDetail.hasOne(models.spot, {
					foreignKey: 'id'
				});
			}
		}
	});

	return spotDetail;
};

