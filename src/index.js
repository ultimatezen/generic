import http from 'http';
import path from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import lessMiddleware from 'less-middleware';
import session from 'express-session';
import flash from 'connect-flash';
import apiRoutes from './routes/api';
import cmsRoutes from './routes/cms';
import config from '../config/config.json';

const bootstrapPath = path.join(__dirname, '..', 'node_modules', 'bootstrap');

let app = express();
let sess = session({
	secret: 'secretkey',
	resave: false,
	saveUninitialized: true,
	cookie: {}
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit: config.bodyLimit
}));

app.use(bodyParser.urlencoded(
	{ extended: true }
));

app.use(cookieParser());
	
if (app.get('env') === 'production') {
	app.set('trust proxy', 1) // trust first proxy
	sess.cookie.secure = true // serve secure cookies
}

app.use(sess);
app.use(flash());

app.use(lessMiddleware(path.join(__dirname, '..', '/public'), {
	dest: path.join(__dirname, '..', 'public'),
	render: {
		paths: [path.join(bootstrapPath, 'less')],
	}
}));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', apiRoutes());
app.use('/cms', cmsRoutes());

let listener = app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${listener.address().port}`);
})

export default app;
