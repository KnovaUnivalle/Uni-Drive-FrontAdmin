import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const host = import.meta.env.VITE_HOST || 'http://localhost:3000/';
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
	const [token, setToken] = useState(() => {
		const token = localStorage.getItem('token');
		if (token) {
			console.log(token);
			return token;
		}
		return null;
	});

	const navigate = useNavigate();

	/**
	 * request to login
	 * @param {String} email
	 * @param {String} password
	 * @param {String} type
	 * @returns jwt
	 */
	const login = async data => {
		const comp = 'admin/login';
		return await fetch(host + comp, {
			method: 'POST',
			mode: 'cors',
			cache: 'default',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(res => {
				if (res.jwt) {
					localStorage.setItem('token', res.jwt);
					setToken(res.jwt);
					navigate('/home');
				} else {
					alert(res.errors);
				}
			});
	};

	const logout = async () => {
		localStorage.removeItem('token');
		setToken(null);
		navigate('/login');
	};

	return (
		<>
			<AuthContext.Provider value={{ token, login, logout }}>
				{children}
			</AuthContext.Provider>
		</>
	);
};

export default AuthContext;
