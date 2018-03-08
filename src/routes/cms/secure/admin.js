
import express from 'express';
import * as cAdmin from '../../../controllers/admin';

export default () => {
	const router = express.Router();

	router.get('/', (req, res) => {
		cAdmin.list()
			.then(admins => {
				res.render('secure/admin/list', { admins: admins });
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.get('/:id', (req, res) => {
		const id = req.params.id;

		cAdmin.get(id)
			.then(admin => {
				const data = {
					title: 'admin page',
					email: admin.email,
					username: admin.username,
					name: admin.name
				};

				res.render('secure/admin/detail', data);
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.get('/logout', (req, res) => {
		req.session.authenticated = false;
		return res.redirect('/cms/');
	});

	return router;
}
