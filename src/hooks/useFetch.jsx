import { createContext, useContext, useMemo } from 'react';
import { useAuth } from './useAuth';

const host = import.meta.env.VITE_HOST || 'http://localhost:3000/';

export const FetchContext = createContext(null);

export function FetchProvider({ children }) {
	const { token } = useAuth();

	/**
	 * To call fetch GET
	 * @param {String} route
	 * @returns
	 */
	const get = async route => {
		try {
			return await fetch(host + route, {
				method: 'GET',
				mode: 'no-cors',
				cache: 'default',
				credentials: 'same-origin',
				headers: {
					Authorization: token,
				},
			}).then(res => res);
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * To call fetch POST
	 * @param {String} route
	 * @param {Object} data
	 * @returns
	 */
	const create = async (route, data) => {
		try {
			return await fetch(host + route, {
				method: 'POST',
				mode: 'no-cors',
				cache: 'default',
				credentials: 'same-origin',
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then(res => res);
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * To call fetch PUT
	 * @param {String} route
	 * @param {Object} data
	 * @returns
	 */
	const update = async (route, data) => {
		try {
			return await fetch(host + route, {
				method: 'PUT',
				mode: 'no-cors',
				cache: 'default',
				credentials: 'same-origin',
				headers: {
					Authorization: token,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then(res => res);
		} catch (error) {
			console.log(error);
		}
	};

	const value = useMemo(() => ({ get, create, update }), []);
	return (
		<>
			<FetchContext.Provider value={value}>{children}</FetchContext.Provider>
		</>
	);
}

export const useFetch = () => {
	return useContext(FetchContext);
};
