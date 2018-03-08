'use strict';
import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename = path.basename(module.filename);

// hack since sequelize can't parse uri's correctly
const connectionOptions = process.env.DB_CONNECTION_STRING || { dialect: process.env.DB_DIALECT, storage: process.env.DB_STORAGE };

let db = {};
let sequelize = new Sequelize(connectionOptions);

fs
	.readdirSync(__dirname)
	.filter(function (file) {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(function (file) {
		var model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(function (modelName) {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
