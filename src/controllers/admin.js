import bcrypt from 'bcrypt';
import { admin as mAdmin } from '../models';

function list() {
	return mAdmin.findAll();
}

function get(id) {
	return mAdmin.findById(id);	
}

function create(data) {
	return new Promise((resolve, reject) => {
		const password = data.password;

		bcrypt.hash(password, 10, (error, hash) => {
			if (error) {
				return reject(error);
			}

			data.password = hash;

			const clause = {
				where: {
					email: data.email
				},
				defaults: data 
			};

			return mAdmin.findOrCreate(clause)
				.spread((admin, created) => {
					if (created === true) {
						return resolve(admin);
					}

					return reject();
				});
		});
	});
}

function update(id, data) {
	const clause = {
        where: {
            id: id
        }
    };

	return mAdmin.update(data, clause);
}

function remove(id) {
	const clause = {
        where: {
            id: id
        }
    };

    return mAdmin.destroy(clause);
}

export { list, get, create, update, remove };
