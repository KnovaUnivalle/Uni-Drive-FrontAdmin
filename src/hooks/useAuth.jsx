import { createContext, useMemo, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [token, setToken] = useLocalStorage('tokenUniDriveAdmin', null);
	const navigate = useNavigate();
	/**
	 * delete token save in local storage
	 */
	const logout = () => {
		setToken(null);
		navigate('/', { replace: true });
	};

	/**
	 *	save token in local storage
	 * @param {string} key
	 */
	const login = key => {
		setToken(key);
		navigate('/home', { replace: true });
	};

	const value = useMemo(() => ({ token, logout, login }), [token]);
	return (
		<>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</>
	);
}

export const useAuth = () => {
	return useContext(AuthContext);
};
