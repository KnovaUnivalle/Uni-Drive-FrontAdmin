import {
	Button,
	Card,
	CardContent,
	Switch,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import WarningAlert from '../alerts/WarningAlert';
import InfoAlert from '../alerts/InfoAlert';

export default function AttributeCard({ attribute, route }) {
	const { update } = useFetch();
	const [edit, setEdit] = useState(true);
	const [alert, setAlert] = useState({ info: false, warning: false });
	const [change, setChange] = useState({
		active: true,
		description: true,
	});
	const [data, setData] = useState({
		active: attribute.active,
		description: attribute.description,
	});
	const [original, setOriginal] = useState({
		active: attribute.active,
		description: attribute.description,
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
		if (checked === original.active) {
			setChange({ ...change, active: true });
		} else {
			setChange({ ...change, active: false });
		}
	};

	const handleChangeText = e => {
		const { value } = e.target;
		const capitalize = value.charAt(0).toUpperCase() + value.slice(1);
		setData({
			...data,
			description: capitalize,
		});
		if (capitalize === original.description || capitalize.length === 0) {
			setChange({ ...change, description: true });
		} else {
			setChange({ ...change, description: false });
		}
	};

	const handleEditButton = e => {
		setEdit(!edit);
		setData(original);
		setChange({
			active: true,
			description: true,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const res = await update(route + '/' + attribute.id, data);
		if (res.status === 201) {
			setEdit(true);
			setChange({
				active: true,
				description: true,
			});
			setOriginal(data);
			setAlert({ ...alert, info: true });
		} else if (res.status === 409) {
			setAlert({ ...alert, warning: true });
		}
	};

	return (
		<Card
			sx={{
				m: '0.5rem',
				maxWidth: { sm: '45%', md: '45%', lg: '31%', xs: '100%' },
			}}
		>
			<CardContent>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Typography>ID: {attribute.id}</Typography>
				</div>
				<form
					onSubmit={handleSubmit}
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label={'Descripción'}
						description={'description'}
						value={data.description}
						onChange={handleChangeText}
						sx={{
							width: { xs: '70%', md: '65%' },
						}}
						disabled={edit}
					/>
					<div style={{ display: 'block' }}>
						<Switch
							checked={data.active}
							onChange={handleChangeSwitch}
							description={'active'}
							disabled={edit}
						/>
						<Typography align='center'>
							{data.active ? 'Activo' : 'Inactivo'}
						</Typography>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							marginTop: '0.5rem',
						}}
					>
						<Button
							variant='contained'
							size='small'
							color={edit ? 'primary' : 'error'}
							onClick={handleEditButton}
						>
							{edit ? 'Editar' : 'Cancelar'}
						</Button>
						<Button
							variant='contained'
							type='submit'
							size='small'
							disabled={change.description && change.active}
						>
							Guardar
						</Button>
					</div>
				</form>
			</CardContent>
			<WarningAlert
				open={alert.warning}
				onClose={handleWarningAlertClose}
				message={'Elemento duplicado, cambia la descripción.'}
			/>
			<InfoAlert
				open={alert.info}
				onClose={handleInfoAlertClose}
				message={'Actualizado con éxito.'}
			/>
		</Card>
	);
}
