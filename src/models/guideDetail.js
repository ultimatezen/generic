'use strict';

module.exports = function (sequelize, DataTypes) {
	var guideDetail = sequelize.define('guideDetail', {
		lang: DataTypes.STRING,
		desc: DataTypes.TEXT
	}, {
		freezeTableName: true,
		tableName: 'guideDetail',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				guideDetail.hasOne(models.guide, {
					foreignKey: 'id'
				});
			}
		}
	});

	return guideDetail;
};
