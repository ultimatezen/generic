import express from 'express';
import * as cGenre from '../../controllers/genre';
import { getByLang } from '../../controllers/helpers';

export default () => {
	const router = express.Router();

	router.get('/', (req, res) => {
		const lang = req.params.lang || 'en';

		return cGenre.list()
			.then(genres => {
				function serialize(data) {
					return {
						name: getByLang(data.name, lang),
						// TODO: how should we handle genre images?
						imageUrl: 'https://goo.gl/HQsxtw'
					}
				}

				return res.json(genres.map(serialize));
			})
			.catch(error => {
				console.log(error);
				return res.sendStatus(500);
			});
	});

	return router;
};

