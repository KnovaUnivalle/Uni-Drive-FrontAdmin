import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RouteGuard = ({ children }) => {
	const { token } = useAuth();
	if (token) {
		return children;
	}
	return <Navigate to='/'></Navigate>;
};
