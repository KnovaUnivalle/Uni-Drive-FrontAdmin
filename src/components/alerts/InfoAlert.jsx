import { Alert, Snackbar } from '@mui/material';

export default function InfoAlert({ open, onClose, message }) {
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			onClose={onClose}
		>
			<Alert variant='filled' severity='info'>
				<b>Información: </b>
				{message}
			</Alert>
		</Snackbar>
	);
}
