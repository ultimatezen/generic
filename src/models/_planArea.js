'use strict';

module.exports = function (sequelize, DataTypes) {
	var planArea = sequelize.define('planArea', {
	}, {
		freezeTableName: true,
		tableName: 'planArea',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		}
	});

	return planArea;
};

