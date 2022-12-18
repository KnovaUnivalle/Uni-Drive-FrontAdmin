import { createContext, useContext, useMemo } from 'react';
import { useAuth } from './useAuth';

const host = import.meta.env.VITE_HOST || 'http://localhost:3000/';

export const FetchContext = createContext(null);

export function FetchProvider({ children }) {
	const { token } = useAuth();

	/**
	 * To call fetch
	 * @param {String} route
	 * @returns
	 */
	const get = async route => {
		return await fetch(host + route, {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
			credentials: 'same-origin',
			headers: {
				Authorization: token,
			},
		}).then(res => res.json());
	};
	/**
	 * To call fetch
	 * @param {String} route
	 * @param {Object} data
	 * @returns
	 */
	const create = async (route, data) => {
		return await fetch(host + route, {
			method: 'POST',
			mode: 'cors',
			cache: 'default',
			credentials: 'same-origin',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(res => res.json());
	};

	const value = useMemo(() => ({ get, create }), []);
	return (
		<>
			<FetchContext.Provider value={value}>{children}</FetchContext.Provider>
		</>
	);
}

export const useFetch = () => {
	return useContext(FetchContext);
};
