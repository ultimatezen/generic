import mMedia from '../models/media';


function list(planId) {
	const clause = {
		where: {
			status: {
				$ne: 0
			},
			planId: planId
		}
	};

	return mMedia.getAll();
}

function get(id) {
	return mMedia.findById(id);
}

function create(data) {
	return mMedia.create(data);
}

function update(id, src) {
	return mMedia.findById(id)
		.then(media => {
			media.set('src', src);
			return media.save();
		});
}

function remove(id) {
	const clause = {
		where: {
			id: id
		}
	};

	return mMedia.destroy(clause);
}

export { list, get, create, update, remove }
