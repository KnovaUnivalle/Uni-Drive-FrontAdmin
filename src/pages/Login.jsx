import {
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import loginService from '../services/Login.service';

const theme = createTheme({
	palette: {
		primary: red,
	},
});

export default function Login() {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const { login } = useAuth();

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		console.log(credentials);
		const res = await loginService(credentials);
		login(res.jwt);
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
							></TextField>
							<Button variant='contained' type='submit'>
								Iniciar sesión
							</Button>
						</form>
					</CardContent>
				</Card>
			</Container>
		</ThemeProvider>
	);
}
