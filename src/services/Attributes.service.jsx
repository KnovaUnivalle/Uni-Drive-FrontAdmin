const host = import.meta.env.VITE_HOST || 'http://localhost:3000/';

/**
 * Request to get colors
 * @param {String} token
 * @returns array of objects
 */
export const getColors = async token => {
	return await fetch(host + 'vehicle/allColor', {
		method: 'GET',
		mode: 'cors',
		cache: 'default',
		credentials: 'same-origin',
		headers: {
			Authorization: token,
		},
	}).then(res => res.json());
};
