import express from 'express';
import * as cSearch from '../../controllers/search';

export default () => {
	const router = express.Router();

	router.get('/', (req, res) => {
		const query = req.query.query;
		const type = req.query.type || null;
		const lang = req.query.lang || 'en';

		cSearch.search(query, type, lang)
			.then(plans => {
				function serialize(plan) {
					return cSearch.serialize(plan, lang);
				}

				return res.json(plans.map(serialize));
			})
			.catch(error => {
				console.log(error);
				return res.sendStatus(500);
			});
	});

	return router;
};

