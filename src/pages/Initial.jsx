import { IconButton, Typography } from '@mui/material';
import SignIn from '../components/buttons/SignIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles/Initial.css';

export default function Initial() {
	return (
		<div className='back'>
			<header>
				<div className='banner'>
					<Typography variant='h6'>UniDrive Manager</Typography>
					<SignIn />
				</div>
				<h1>Bienvenido</h1>
			</header>
			<section className='filled'></section>
			<section>
				<p>
					Aplicación desarrollada con el proposito de administrar UniDrive.
					<br />
					<a href='https://github.com/ProgramadoresAnonimosUnivalle'>
						Enlace a UniDrive
					</a>
				</p>
			</section>
			<footer className='banner'>
				<div>
					<p>
						Equipo Knova
						<br />
						Cali, Colombia
						<br />
						Escuela de Ingeniería de Sistemas
						<br />
						Universidad del valle
					</p>
				</div>
				<div>
					<IconButton>
						<a
							href='https://github.com/ProgramadoresAnonimosUnivalle'
							target='_blank'
							rel='noreferrer'
						>
							<GitHubIcon fontSize='large' color='action' />
						</a>
					</IconButton>
				</div>
			</footer>
		</div>
	);
}
