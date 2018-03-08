'use strict';

module.exports = function (sequelize, DataTypes) {
	var planDetail = sequelize.define('planDetail', {
		lang: DataTypes.STRING,
		name: DataTypes.STRING,
		catchphrase: DataTypes.TEXT,
		desc: DataTypes.TEXT,
		seoTitle: DataTypes.STRING,
		seoDesc: DataTypes.TEXT,
		seoKeywords: DataTypes.TEXT,
	}, {
		freezeTableName: true,
		tableName: 'planDetail',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				planDetail.hasOne(models.plan, {
					foreignKey: 'id'
				});
			}
		}
	});

	return planDetail;
};
