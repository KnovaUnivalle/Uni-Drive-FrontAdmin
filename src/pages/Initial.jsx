import { IconButton, Tooltip, Typography } from '@mui/material';
import SignInButton from '../components/buttons/SignInButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles/Initial.css';

export default function Initial() {
	return (
		<div className='back'>
			<header>
				<div className='banner'>
					<Typography variant='h6'>UniDrive Manager</Typography>
					<SignInButton />
				</div>
				<h1 style={{ textAlign: 'center' }}>Bienvenido</h1>
			</header>
			<section className='filled'></section>
			<section>
				<p className='paragraph'>
					Aplicación desarrollada con el proposito de administrar UniDrive.
					<br />
					<a href='https://github.com/ProgramadoresAnonimosUnivalle'>
						Enlace a UniDrive
					</a>
				</p>
			</section>
			<footer className='banner'>
				<div>
					<p className='paragraph'>
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
							<Tooltip title='GitHub'>
								<GitHubIcon fontSize='large' color='action' />
							</Tooltip>
						</a>
					</IconButton>
				</div>
			</footer>
		</div>
	);
}
