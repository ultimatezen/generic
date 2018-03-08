'use strict';

module.exports = function (sequelize, DataTypes) {
	var plan = sequelize.define('plan', {
		maxPeople: DataTypes.INTEGER,
		duration: DataTypes.INTEGER,
		timeStart: DataTypes.INTEGER,
		timeEnd: DataTypes.INTEGER,
		notice: DataTypes.TEXT,
		comment: DataTypes.TEXT,
		approvalStatus: DataTypes.INTEGER,
		status: DataTypes.INTEGER,
	}, {
		freezeTableName: true,
		tableName: 'plan',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				plan.hasMany(models.reservation, {
					foreignKey: 'id'
				});

				plan.hasMany(models.media, {
					foreignKey: 'id'
				});

				plan.hasMany(models.planDetail, {
					foreignKey: 'id'
				});

				// lookup tables
				plan.belongsToMany(models.area, {
					through: models.planArea
				});

				plan.belongsToMany(models.genre, {
					through: models.planGenre
				});
			}
		}
	});

	return plan;
};
