const host = import.meta.env.VITE_HOST || 'http://localhost:3000/';

/**
 * Request to login
 * @param {JSON} data email, password
 * @returns jwt {String}
 */
const loginService = async data => {
	return await fetch(host + 'login/admin', {
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

export default loginService;
