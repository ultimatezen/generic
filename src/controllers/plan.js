import { 
	plan as mPlan,
	planDetail as mPlanDetail,
	area as mArea,
	genre as mGenre,
	media as mMedia
} from '../models';

function list() {
	const clause = {
		include: [ mPlanDetail, mArea, mGenre, mMedia ]
	};

	return mPlan.findAll(clause);
}

function get(id) {
	return mPlan.findById(id);
}

function create(data) {
	return mPlan.create(data);
}

function update(id, data) {
	const clause = {
		where: {
			id: id
		}
	};

	return mPlan.update(data, clause);
}

function remove(id) {
	const clause = {
		where: {
			id: id
		}
	};

	return mPlan.destroy(clause);
}

// to client
function serialize(rawData) {
	if (!rawData) {
		return null;
	}

	return rawData.get();
}

// from client
function deserialize() {
	// transform client data into backend data
}

export { list, get, create, update, remove, serialize, deserialize };
