'use strict';

module.exports = function (sequelize, DataTypes) {
	var schedule = sequelize.define('schedule', {
		desc: DataTypes.TEXT,
		hours: DataTypes.TEXT
	}, {
		freezeTableName: true,
		tableName: 'schedule',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				schedule.hasMany(models.plan, {
					foreignKey: 'id'
				});
			}
		}
	});

	return schedule;
};
