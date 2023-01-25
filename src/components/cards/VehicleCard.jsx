import {
	Box,
	Button,
	Card,
	CardContent,
	FormControlLabel,
	Switch,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export default function VehicleCard({ data, route }) {
	const navigate = useNavigate();
	const { update } = useFetch();
	const [active, setActive] = useState(data.active);
	const [original, setOriginal] = useState(data.active);
	const [change, setChange] = useState(true);

	const handleButton = e => {
		navigate('/home/' + route + data.id);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const res = await update(route + 'active/' + data.id + '?active=' + active);
		if (res.status === 201) {
			setChange(true);
			setOriginal(active);
			// setAlert({ ...alert, info: true });
		} else if (res.status === 500) {
			console.log('fallo');
			// setAlert({ ...alert, warning: true });
		}
	};

	const handleChangeSwitch = e => {
		const { checked } = e.target;
		setActive(checked);
		if (checked === original) {
			setChange(true);
		} else {
			setChange(false);
		}
	};

	return (
		<Card
			sx={{
				m: '0.5rem',
				width: { sm: '45%', md: '30%', lg: '23.75%', xs: '100%' },
				maxWidth: { lg: '35%' },
			}}
			elevation={3}
		>
			<CardContent>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<FormControlLabel
						control={
							<Switch
								checked={active}
								onChange={handleChangeSwitch}
								description={'active'}
							/>
						}
						label={active ? 'Activo' : 'Inactivo'}
					/>
					<Typography mt='0.5rem' textAlign={'right'}>
						<b>ID:</b> {data.id}
					</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<Box sx={{ width: '50%' }}>
						<Typography>
							<b>Nombre Coductor:</b>
							<br />
							<b>ID Coductor:</b>
							<br />
							<b>Placa vehiculo:</b>
						</Typography>
					</Box>

					<Box sx={{ width: '50%' }}>
						<Typography textAlign={'right'}>
							<span>{data.Bidder.firstName}</span>
							<br />
							<span>{data.Bidder.id}</span>
							<br />
							<span>{data.plate}</span>
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						mt: '0.5rem',
					}}
				>
					<Button variant='contained' disabled={change} onClick={handleSubmit}>
						Guardar
					</Button>
					<Button variant='contained' onClick={handleButton}>
						Ver más
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
