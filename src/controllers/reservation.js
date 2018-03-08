import {
	guide as mGuide,
	reservation as mReservation,
	plan as mPlan
} from '../models';

function list() {
	const clause = {
		include: [ mGuide, mPlan ]
	};

	return mReservation.findAll(clause);
}

function get(id) {
	return mReservation.findById(id, { include: [ mGuide, mPlan ] });
}

function create(data) {
	return mReservation.create(data);
}

function update(id, data) {
	const clause = {
		where: {
			id: id
		}
	};

	return mReservation.update(data, clause);
}

function remove(id) {
	const clause = {
		where: {
			id: id
		}
	};

	return mReservation.destroy(clause);
};

export { list, get, create, update, remove };
