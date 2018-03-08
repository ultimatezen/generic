'use strict';

module.exports = function (sequelize, DataTypes) {
	var spot = sequelize.define('spot', {
		cost: DataTypes.TEXT,
		hours: DataTypes.TEXT
	}, {
		freezeTableName: true,
		tableName: 'spot',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		}
	});

	return spot;
};

