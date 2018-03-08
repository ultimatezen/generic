require('dotenv').config();

module.exports = {
	development: {
		dialect: process.env.DB_DIALECT,
		storage: process.env.DB_STORAGE
	},
	test: {
		url: process.env.DB_CONNECTION_STRING
	},
	production: {
		url: process.env.DB_CONNECTION_STRING
	}
};

