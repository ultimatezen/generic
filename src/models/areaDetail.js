'use strict';

module.exports = function (sequelize, DataTypes) {
	var areaDetail = sequelize.define('areaDetail', {
		lang: DataTypes.STRING,
		name: DataTypes.STRING
	}, {
		freezeTableName: true,
		tableName: 'areaDetail',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				areaDetail.hasOne(models.area, {
					foreignKey: 'id'
				});
			}
		}
	});

	return areaDetail;
};

