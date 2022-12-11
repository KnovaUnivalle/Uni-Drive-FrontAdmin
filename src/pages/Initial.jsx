import { Typography } from '@mui/material';
import SignIn from '../components/buttons/SignIn';

export default function Initial() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<header
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '0.5rem 2rem',
				}}
			>
				<Typography variant='h6'>UniDrive Manager</Typography>
				<SignIn />
			</header>
			<section>
				<h1>This is the Home Page</h1>
			</section>
		</div>
	);
}
