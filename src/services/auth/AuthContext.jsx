import { createContext, useState, useMemo } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [jwt, setJwt] = useState('');
	const value = useMemo(() => ({ jwt, setJwt }), [jwt, setJwt]);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
