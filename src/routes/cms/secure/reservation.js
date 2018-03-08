import express from 'express';
import * as cReservation from '../../../controllers/reservation';

// reservation routes
export default () => {
	const router = express.Router();

	router.get('/', (req, res) => {
		cReservation.list()
			.then(reservations => {
				res.render('secure/reservation/list', { reservations: reservations });
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.get('/create', (req, res) => {
		res.render('secure/reservation/create', { errors: [] });
	});

	router.get('/:id', (req, res) => {
		const id = req.params.id;

		cReservation.get(id)
			.then(reservation => {
				const detail = reservation ? reservation.get() : null;
				res.render('secure/reservation/detail', detail);
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.post('/', (req, res) => {
		const data = req.body;

		cReservation.create(data)
			.then(reservation => {
				res.redirect('/cms/secure/reservation/' + reservation.get('id'));
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	router.put('/', cReservation.update);

	router.post('/:id/delete', (req, res) => {
		const id = req.params.id;

		cReservation.remove(id)
			.then(() => {
				res.redirect('/cms/secure/reservation');
			})
			.catch(error => {
				console.log(error);
				res.render('error');
			});
	});

	return router;
};
