'use strict';

module.exports = function (sequelize, DataTypes) {
	var genreDetail = sequelize.define('genreDetail', {
		lang: DataTypes.STRING,
		name: DataTypes.STRING
	}, {
		freezeTableName: true,
		tableName: 'genreDetail',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				genreDetail.hasOne(models.genre, {
					foreignKey: 'id'
				});
			}
		}
	});

	return genreDetail;
};

