import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	FormControlLabel,
	Switch,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const route = 'vehicle/';

export default function VehicleDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { update } = useFetch();
	const [data, setData] = useState({});
	const [active, setActive] = useState(false);
	const [change, setChange] = useState(true);

	const handleChangeSwitch = e => {
		const { checked } = e.target;

		setActive(checked);
		if (checked === data.active) {
			setChange(true);
		} else {
			setChange(false);
		}
	};

	const handleButton = e => {
		navigate('/home/' + route);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const res = await update(route + 'active/' + id + '?active=' + active);
		if (res.status === 201) {
			setChange(true);
			setData({ ...data, active });
			// setAlert({ ...alert, info: true });
		} else if (res.status === 500) {
			console.log('fallo');
			// setAlert({ ...alert, warning: true });
		}
	};

	return (
		<Container maxWidth={'sm'}>
			<Card sx={{ m: '2rem' }} elevation={3}>
				<CardContent>
					<Typography mt='1rem' textAlign={'center'} variant={'h5'}>
						Detalles de vehiculo
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<FormControlLabel
							control={
								<Switch
									checked={active}
									onChange={handleChangeSwitch}
									description={'active'}
								/>
							}
							label={'Estado'}
						/>
						<Typography mt='0.5rem' textAlign={'right'}>
							<b>ID:</b> {id}
						</Typography>
					</Box>
					<Box sx={{ display: 'flex' }}>
						<Box sx={{ width: '50%' }}>
							<Typography>
								<b>Nombre:</b>
								<br />
								<b>ID:</b>
								<br />
								<b>Placa:</b>
								<br />
								<b>Color:</b>
								<br />
								<b>Tipo:</b>
								<br />
								<b>Modelo:</b>
								<br />
								<b>Marca:</b>
								<br />
								<b>Cupo</b>
								<br />
							</Typography>
						</Box>

						<Box sx={{ width: '50%' }}>
							<Typography textAlign={'right'}>
								<span>Jose Antonio</span>
								<br />
								<span>26</span>
								<br />
								<span>343243</span>
								<br />
								<span>343243</span>
								<br />
								<span>343243</span>
								<br />
								<span>343243</span>
								<br />
								<span>343243</span>
								<br />
								<span>343243</span>
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
						<Button
							variant='contained'
							disabled={change}
							onClick={handleSubmit}
						>
							Guardar
						</Button>
						<Button variant='contained' onClick={handleButton}>
							Volver
						</Button>
					</Box>
				</CardContent>
			</Card>
		</Container>
	);
}
