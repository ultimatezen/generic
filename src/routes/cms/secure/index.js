import express from 'express';
import passport from 'passport';
import rAdmin from './admin';
import rUser from './user';
import rGuide from './guide';
import rPlan from './plan';
import rReservation from './reservation';

export default () => {
	const router = express.Router();

	// authenticate with jwt
	function authenticateJwt(req, res, next) {
		return passport.authenticate('jwt', { session: false }, (err, user, info) => {
			if (err) {
				return res.sendStatus(501);
			}

			// TODO: add something to check iat so we can expire all tokens at once
			if (!user) {
				return res.sendStatus(401);
			}

			return next();
		})(req, res, next);
	}

	router.use(authenticateJwt);

	router.use('/admin', rAdmin());
	router.use('/user', rUser());
	router.use('/guide', rGuide());
	router.use('/plan', rPlan());
	router.use('/reservation', rReservation());

	return router;
};
