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

export default function AddAttribute({ route, addFunction }) {
	const { create } = useFetch();
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({
		active: true,
		description: '',
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

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const res = await create(route, data);
		if (res.status === 201) {
			setOpen(false);
			addFunction(await res.json());
		}
	};

	const handleClose = () => {
		setData({
			active: true,
			description: '',
		});
		setOpen(false);
	};
	return (
		<>
			<Tooltip title='Añadir'>
				<Fab
					onClick={handleClickOpen}
					sx={{ position: 'fixed', bottom: 18, right: 16 }}
				>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Añadir elemento</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Para crear un elemento proporcione una descripción y su estado
						inicial, activo por defecto.
					</DialogContentText>
					<div
						style={{
							display: 'flex',
						}}
					>
						<TextField
							autoFocus
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
				</DialogContent>
				<DialogActions>
					<Button color='error' onClick={handleClose}>
						Cancelar
					</Button>
					<Button
						type='submit'
						onClick={handleSubmit}
						disabled={data.description.length === 0}
					>
						Guardar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
