import express from 'express';
import * as cPlan from '../../../controllers/plan';

// plan routes
export default () => {
	const router = express.Router();

	router.get('/', (req, res) => {
		cPlan.list()
			.then(plans => {
				return res.json(plans.map(cPlan.serialize));
			})
			.catch(error => {
				console.log(error);
				return res.sendStatus(500);
			});
	});

	router.get('/:id', (req, res) => {
		const id = req.params.id;

		cPlan.get(id)
			.then(plan => {
				return res.json(cPlan.serialize(plan));
			})
			.catch(error => {
				console.log(error);
				return res.sendStatus(500);
			});
	});

	router.post('/', (req, res) => {
		const data = req.body;

		cPlan.create(data)
			.then(plan => {
				return res.json(cPlan.serialize(plan));
			})
			.catch(error => {
				console.log(error);
				return res.sendStatus(500);
			});
	});

	router.put('/', (req, res) => {
		const data = req.body;

		cPlan.update(data)
			.then(plan => {
				return res.json(cPlan.serialize(plan));
			})
			.catch(error => {
				console.log(error);
				return res.sendStatus(500);
			});
	});

	router.post('/:id/delete', (req, res) => {
		const id = req.params.id;

		cPlan.remove(id)
			.then(() => {
				return res.json({});
			})
			.catch(error => {
				console.log(error);
				return res.sendStatus(500);
			});
	});

	return router;
};
