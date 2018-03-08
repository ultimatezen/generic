import express from 'express';
import * as cUser from '../../../controllers/user';

// user routes
export default () => {
	const router = express.Router();

	router.get('/', (req, res) => {
		cUser.list()
			.then(users => {
				res.render('secure/user/list', { users: users });
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.get('/create', (req, res) => {
		res.render('secure/user/create', { errors: [] });
	});

	router.get('/:id', (req, res) => {
		const id = req.params.id;

		cUser.get(id)
			.then(user => {
				const detail = user ? user.get() : null;
				res.render('secure/user/detail', detail);
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.post('/', (req, res) => {
		const data = req.body;

		cUser.create(data)
			.then(user => {
				res.redirect('/cms/secure/user/' + user.get('id'));
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.put('/', cUser.update);

	router.post('/:id/delete', (req, res) => {
		const id = req.params.id;

		cUser.remove(id)
			.then(() => {
				res.redirect('/cms/secure/user');
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	return router;
};
