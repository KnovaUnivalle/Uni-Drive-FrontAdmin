import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Fab,
	Switch,
	TextField,
	Tooltip,
	Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import WarningAlert from '../alerts/WarningAlert';
import InfoAlert from '../alerts/InfoAlert';

export default function AddAttributeDialog({ route, addFunction }) {
	const { create } = useFetch();
	const [openDialog, setOpenDialog] = useState(false);
	const [alert, setAlert] = useState({ info: false, warning: false });
	const [data, setData] = useState({
		active: true,
		description: '',
	});

	const handleWarningAlertClose = () =>
		setAlert({
			...alert,
			warning: false,
		});

	const handleInfoAlertClose = () =>
		setAlert({
			...alert,
			info: false,
		});

	const handleChangeSwitch = e => {
		const { checked } = e.target;
		setData({
			...data,
			active: checked,
		});
	};

	const handleChangeText = e => {
		const { value } = e.target;
		const capitalize = value.charAt(0).toUpperCase() + value.slice(1);
		setData({
			...data,
			description: capitalize,
		});
	};

	const handleClickOpenDialog = () => {
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setData({
			active: true,
			description: '',
		});
		setOpenDialog(false);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const res = await create(route, data);
		if (res.status === 201) {
			handleCloseDialog();
			addFunction(await res.json());
			setAlert({ ...alert, info: true });
		} else if (res.status === 409) {
			setAlert({ ...alert, warning: true });
		}
	};

	return (
		<>
			<Tooltip title='Añadir'>
				<Fab
					onClick={handleClickOpenDialog}
					sx={{ position: 'fixed', bottom: 18, right: 16 }}
				>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Dialog open={openDialog} onClose={handleCloseDialog}>
				<DialogTitle>Añadir Elemento</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Para crear un elemento proporcione una descripción y su estado
						inicial, activo por defecto.
					</DialogContentText>
					<form onSubmit={handleSubmit}>
						{' '}
						<div
							style={{
								display: 'flex',
							}}
						>
							<TextField
								margin='dense'
								name='description'
								label='Descripción'
								variant='standard'
								value={data.description}
								onChange={handleChangeText}
								fullWidth
							/>

							<Typography mt={2}>Estado:</Typography>
							<div style={{ display: 'block' }}>
								<Switch
									checked={data.active}
									description={'active'}
									onChange={handleChangeSwitch}
								/>
								<Typography align='center'>
									{data.active ? 'Activo' : 'Inactivo'}
								</Typography>
							</div>
						</div>
						<DialogActions style={{ paddingBottom: '0' }}>
							<Button color='error' onClick={handleCloseDialog}>
								Cancelar
							</Button>
							<Button type='submit' disabled={data.description.length === 0}>
								Añadir
							</Button>
						</DialogActions>
					</form>
				</DialogContent>
			</Dialog>
			<WarningAlert
				open={alert.warning}
				onClose={handleWarningAlertClose}
				message={'Elemento duplicado, cambia la descripción.'}
			/>
			<InfoAlert
				open={alert.info}
				onClose={handleInfoAlertClose}
				message={'Creado con éxito.'}
			/>
		</>
	);
}
