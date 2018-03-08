'use strict';

module.exports = function (sequelize, DataTypes) {
	var reservation = sequelize.define('reservation', {
		status: DataTypes.INTEGER
	}, {
		freezeTableName: true,
		tableName: 'reservation',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				reservation.hasOne(models.plan, {
					foreignKey: 'id',
					onUpdate: 'CASCADE',
					onDelete: 'RESTRICT'
				});

				reservation.hasOne(models.user, {
					foreignKey: 'id',
					onUpdate: 'CASCADE',
					onDelete: 'RESTRICT'
				});

				reservation.hasOne(models.guide, {
					foreignKey: 'id',
					onUpdate: 'CASCADE',
					onDelete: 'RESTRICT'
				});
			}
		}
	});

	return reservation;
};
