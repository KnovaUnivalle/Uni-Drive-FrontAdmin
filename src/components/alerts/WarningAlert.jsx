import { Alert, Snackbar } from '@mui/material';

export default function WarningAlert({ open, onClose, message }) {
	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			onClose={onClose}
		>
			<Alert variant='filled' severity='warning'>
				<b>Advertencia: </b>
				{message}
			</Alert>
		</Snackbar>
	);
}
