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
	const [alert, setAlert] = useState(false);
	const [validEmail, setValidEmail] = useState(true);

	const handleChange = e => {
		setAlert(false);
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
		if (e.target.name === 'email') {
			if (e.target.value.length === 0) {
				setValidEmail(true);
			} else {
				setValidEmail(e.target.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/));
			}
		}
	};

	const handleAlertClose = () => setAlert(false);

	const handleSubmit = async e => {
		e.preventDefault();
		if (validEmail) {
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
								helperText={validEmail ? null : 'Formato de correo no valido'}
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
							></TextField>
							<Button variant='contained' type='submit'>
								Iniciar sesión
							</Button>
						</form>
					</CardContent>
				</Card>
			</Container>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={alert}
				onClose={handleAlertClose}
			>
				<Alert variant='filled' severity='warning'>
					Credenciales incorrectas
				</Alert>
			</Snackbar>
		</ThemeProvider>
	);
}
