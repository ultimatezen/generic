import {
	user as mUser,
	reservation as mReservation
} from '../models';

function list() {
	const clause = {
		include: mReservation
	};

	return mUser.findAll(clause);
}

function get(id) {
	return mUser.findById(id, { include: mReservation });
}

function create(data) {
	return mUser.create(data);
}

function update(id, data) {
	const clause = {
		where: {
			id: id
		}
	};

	return mUser.update(data, clause);
}

function remove(id) {
	const clause = {
		where: {
			id: id
		}
	};

	return mUser.destroy(clause);
}

export { list, get, create, update, remove };
