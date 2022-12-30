import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function SignInButton() {
	const { token } = useAuth();
	const navigate = useNavigate();

	const handleButton = () => {
		const route = token ? '/home' : '/login';
		navigate(route, { replace: true });
	};

	return (
		<Button color='secondary' variant='outlined' onClick={handleButton}>
			{token ? 'Página principal' : 'Acceder'}
		</Button>
	);
}
