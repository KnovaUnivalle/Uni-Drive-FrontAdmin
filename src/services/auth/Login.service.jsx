const host = import.meta.env.VITE_HOST || 'http://localhost:3000/';

/**
 * Request to login
 * @param {JSON} data email, password
 * @returns jwt {String}
 */
const Login = async data => {
	return await fetch(host + 'admin/login', {
		method: 'POST',
		mode: 'cors',
		cache: 'default',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(res => res.json());
};

export default Login;
