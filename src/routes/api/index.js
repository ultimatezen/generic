import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import search from './search';
import genre from './genre';

export default () => {
	let api = express();
	let sess = session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie: {}
	});

	api.use(cookieParser());

	if (api.get('env') === 'production') {
		api.set('trust proxy', 1) // trust first proxy
		sess.cookie.secure = true // serve secure cookies
	}

	api.use(sess)

	// expose search and genres apis first
	api.use('/search', search());
	api.use('/genre', genre());

	return api;
}
