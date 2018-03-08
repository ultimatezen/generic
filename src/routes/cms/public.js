import { login as cLogin } from '../../controllers/authentication';
import * as cAdmin from '../../controllers/admin';

function signup(req, res) {
	const body = req.body;
	const name = body.name;
	const username = body.username;
	const email = body.email;
	const password = body.password;

	if (!password || password.length < 8) {
		req.flash('error', 'password has to be more than 8 charactors!');
		return res.redirect('/cms/signup');
	}

	const data = {
		username: username,
		email: email,
		password: password
	};

	return cAdmin.create(data)
		.then(admin => {
			req.session.authenticated = true;
			return res.redirect('/cms/secure');
		})
		.catch(error => {
			req.flash('error', 'The user already exists.');
			return res.redirect('/cms/signup');
		});
}

export { signup };
