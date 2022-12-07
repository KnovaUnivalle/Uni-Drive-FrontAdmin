import {
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
	Alert,
	Snackbar,
} from '@mui/material';
import { Container } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import loginService from '../services/Login.service';
import { Navigate } from 'react-router-dom';
import ErrorAlert from '../components/alerts/ErrorAlert';
import { validateEmail, validatePassword } from '../utils/Validate';

const theme = createTheme({
	palette: {
		primary: red,
	},
});

export default function Login() {
	const { token, login } = useAuth();
	if (token) {
		return <Navigate to='/'></Navigate>;
	}
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const [validCredentials, setValidCredentials] = useState({
		email: true,
		password: true,
	});
	const [alert, setAlert] = useState(false);
	const [validEmail, setValidEmail] = useState(true);

	const handleChange = e => {
		setAlert(false);
		const { name, value } = e.target;
		setCredentials({
			...credentials,
			[name]: value,
		});
		setValidCredentials({
			...validCredentials,
			[name]:
				value.length === 0
					? true
					: name === 'email'
					? validateEmail(value)
					: validatePassword(value),
		});
	};

	const handleAlertClose = () => setAlert(false);

	const handleSubmit = async e => {
		e.preventDefault();
		if (validCredentials.email && validCredentials.password) {
			const res = await loginService(credentials);
			if (res.jwt) {
				login(res.jwt);
			} else {
				setAlert(true);
			}
		} else {
			setAlert(true);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth='sm'>
				<Card>
					<CardContent
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: '20rem',
							width: '20rem',
							justifyContent: 'space-around',
						}}
					>
						<Typography variant='h4'>
							<strong>Inicio de sesión</strong>
						</Typography>
						<form onSubmit={handleSubmit}>
							<TextField
								key={'email'}
								name={'email'}
								value={credentials.email}
								label='Correo electrónico'
								variant='filled'
								style={{
									marginBottom: '1rem',
								}}
								onChange={handleChange}
								fullWidth
								required
								helperText={
									validCredentials.email ? null : 'Formato de correo no valido'
								}
							></TextField>
							<TextField
								key={'password'}
								name={'password'}
								value={credentials.password}
								label='Contraseña'
								variant='filled'
								type='password'
								onChange={handleChange}
								style={{ marginBottom: '1rem' }}
								fullWidth
								required
								helperText={
									validCredentials.password
										? null
										: 'Formato de contraseña no valido'
								}
							></TextField>
							<Button variant='contained' type='submit'>
								Iniciar sesión
							</Button>
						</form>
					</CardContent>
				</Card>
			</Container>
			<ErrorAlert
				open={alert}
				onClose={handleAlertClose}
				message={'Credenciales incorrectas'}
			/>
		</ThemeProvider>
	);
}
