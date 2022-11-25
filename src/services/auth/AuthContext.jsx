import { createContext, useState, useMemo } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [token, setToken] = useState(() => {
		const jwt = localStorage.getItem('tokenUniDriveAdmin');
		if (jwt) {
			return jwt;
		}
		return null;
	});

	/**
	 * delete token save in local storage
	 */
	const deleteToken = () => {
		localStorage.removeItem('tokenUniDriveAdmin');
		setToken(null);
	};

	/**
	 *	save token in local storage
	 * @param {string} key
	 */
	const createToken = key => {
		localStorage.setItem('tokenUniDriveAdmin', key);
		setToken(key);
	};

	const value = useMemo(
		() => ({ token, deleteToken, createToken }),
		[token, deleteToken, createToken]
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
