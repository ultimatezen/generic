'use strict';

module.exports = function (sequelize, DataTypes) {
	var area = sequelize.define('area', {
		name: DataTypes.TEXT
	}, {
		freezeTableName: true,
		tableName: 'area',
		paranoid: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				area.hasOne(models.area, {
					foreignKey: 'parentId'
				});

				area.belongsToMany(models.plan, {
					through: models.planArea
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

	return area;
};

