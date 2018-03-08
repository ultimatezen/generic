import {
    guide as mGuide,
	guideDetail as mGuideDetail,
    reservation as mReservation
} from '../models';

function list() {
	const clause = {
		include: [ mGuideDetail, mReservation ]
	};

    return mGuide.findAll(clause);
}

function get(id) {
    return mGuide.findById(id, { include: mReservation });
}

function create(data) {
    return mGuide.create(data);
}

function update(id, data) {
    const clause = {
        where: {
            id: id
        }
    };

    return mGuide.update(data, clause);
}

function remove(id) {
  const clause = {
        where: {
            id: id
        }
    };

    return mGuide.destroy(clause);
}

export { list, get, create, update, remove };
