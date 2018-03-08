'use strict';

module.exports = function (sequelize, DataTypes) {
	var media = sequelize.define('media', {
		name: DataTypes.STRING,
		desc: DataTypes.TEXT,
		src: DataTypes.STRING,
		status: DataTypes.INTEGER
	}, {
		freezeTableName: true,
		tableName: 'media',
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				media.hasOne(models.plan, {
					foreignKey: 'id'
				});
			}
		}
	});

	return media;
};
