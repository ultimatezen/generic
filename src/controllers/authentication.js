import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import bcrypt from 'bcrypt';
import session from 'express-session';
import { admin as mAdmin } from '../models';
import jwt from 'jsonwebtoken';

const jwtOptions = {
	// passport-jwt uses the JWT scheme by default for some reason...
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
	// TODO: move to config
	secretOrKey: 'testing'
};

function init() {
	passport.serializeUser((user, cb) => {
		return cb(null, user.email);
	});

	passport.deserializeUser((email, cb) => {
		// TODO: use redis or mongo to store/retrieve session data
		const clause = {
			where: {
				email: email
			}
		};

		return mAdmin.findOne(clause)
			.then(admin => {
				if (!admin) {
					return cb(null, false);
				}

				return cb(null, admin.get());
			})
			.catch(error => {
				return cb(error);
			});
	});

	passport.use('jwt', new JwtStrategy(jwtOptions, (payload, done) => {
		// if payload is received, the token was good
		return done(null, payload);
	}));

	// use local-login for login to obtain a jwt token
	passport.use('local-login', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password'
	}, (username, password, cb) => {
		const clause = {
			where: {
				username: username
			}
		};

		return mAdmin.findOne(clause)
			.then(admin => {
				if (!admin) {
					return cb(null, false);
				}

				bcrypt.compare(password, admin.password, (error, response) => {
					if (error) {
						return cb(error);
					}

					if (response !== true) {
						return cb(null, false);
					}

					return cb(null, admin.get());
				});
			});		
	}));
}

export { init };
