import { genre as mGenre } from '../models';

function list() {
	return mGenre.findAll();
}

export { list };
