import express from 'express';
import * as cGuide from '../../../controllers/guide';

// guide routes
export default () => {
	const router = express.Router();

	router.get('/', (req, res) => {
		cGuide.list()
			.then(guides => {
				res.render('secure/guide/list', { guides: guides });
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.get('/create', (req, res) => {
		res.render('secure/guide/create', { errors: [] });
	});

	router.get('/:id', (req, res) => {
		const id = req.params.id;

		cGuide.get(id)
			.then(guide => {
				const detail = guide ? guide.get() : null;
				res.render('secure/guide/detail', detail);
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.post('/', (req, res) => {
		const data = req.body;

		cGuide.create(data)
			.then(guide => {
				res.redirect('/cms/secure/guide/' + guide.get('id'));
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.put('/:id', (req, res) => {
		const id = req.params.id;
		const data = req.body;

		cGuide.update(id, data)
			.then(guide => {
				res.render('secure/guide/detail', guide);
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.post('/:id/delete', (req, res) => {
		const id = req.params.id;

		cGuide.remove(id)
			.then(() => {
				res.redirect('/cms/secure/guide');
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	return router;
};