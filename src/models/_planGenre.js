'use strict';

module.exports = function (sequelize, DataTypes) {
	var planGenre = sequelize.define('planGenre', {
	}, {
		freezeTableName: true,
		tableName: 'planGenre',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		}
	});

	return planGenre;
};

