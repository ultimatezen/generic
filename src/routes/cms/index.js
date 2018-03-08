import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import * as rPublic from './public';
import rSecure from './secure';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { init as passportInit } from '../../controllers/authentication';

export default () => {
	let cms = express();
	let sess = session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie: {}
	});

	cms.use(cookieParser());

	// template engine
	cms.set('view engine', 'pug');
	cms.set('views', './src/views');

	if (cms.get('env') === 'production') {
		cms.set('trust proxy', 1) // trust first proxy
		sess.cookie.secure = true // serve secure cookies
	}

	cms.use(sess)
	cms.use(passport.initialize())
	cms.use(passport.session());
	cms.use(flash());


	// register passport strategies
	passportInit();

	// perhaps expose some API metadata at the root
	cms.get('/', (req, res) => {
		res.render('public/index', { title: 'Welcome to Generic CMS!' });
	});

	// render signup/login pages for now
	cms.get('/signup', (req, res) => {
		res.render('public/signup', { title: 'Register your information', flash: req.flash() });
	});

	cms.get('/login', (req, res) => {
		res.render('public/login', { title: 'Login to CMS', flash: req.flash() });
	});

	// public logout
	cms.get('/logout', (req, res) => {
		req.session.authenticated = false;
		return res.redirect('/cms/');
	});

	cms.post('/signup', rPublic.signup);
	cms.post('/login', 	passport.authenticate('local-login'), (req, res) => {
		// TODO: move this into config
		const secret = 'testing';
		const payload = { id: req.user.id };
		const token = jwt.sign(payload, secret);

		res.json({ token: token });
	});

	cms.use('/secure', rSecure());

	return cms;
}
