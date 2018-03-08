'use strict';

module.exports = function (sequelize, DataTypes) {
	var genre = sequelize.define('genre', {
		name: DataTypes.TEXT
	}, {
		freezeTableName: true,
		tableName: 'genre',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				genre.hasOne(models.genre, {
					foreignKey: 'parentId'
				});

				genre.belongsToMany(models.plan, {
					through: models.planGenre
				});
			}
		},
		getterMethods: {
			name: function () {
				var name = {};

				try {
					name = JSON.parse(this.getDataValue('name'));
				} catch (err) {
					console.log('Bad data');
				}

				return name;
			}
		},
		setterMethods: {
			name: function (value) {
				var name = JSON.stringify(value);
				this.setDataValue('name', name);
			}
		}
	});

	return genre;
};

