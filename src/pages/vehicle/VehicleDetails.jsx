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
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Load from '../../components/tools/Load';
import { useFetch } from '../../hooks/useFetch';
import { homeRoute } from '../../utils/RoutesNotFound';
import NotFound from '../NotFound';

const route = 'vehicle/';
const routesNotFound = [
	...homeRoute,
	{ link: '/home/vehicle', name: 'VEHICULOS' },
];

export default function VehicleDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { update, get } = useFetch();
	const [data, setData] = useState({});
	const [active, setActive] = useState(false);
	const [change, setChange] = useState(true);
	const [charging, setCharging] = useState(true);
	const [notElements, setNotElements] = useState(false);

	const loadData = async () => {
		setCharging(true);
		const res = await get(route + id);
		if (res.status === 404) {
			setCharging(false);
			setNotElements(true);
		} else {
			const dataRes = await res.json();
			setData(dataRes);
			setActive(dataRes.active);
			setCharging(false);
		}
	};

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

	useEffect(() => {
		setNotElements(false);
		loadData();
	}, [id]);

	if (charging) {
		return <Load />;
	}

	if (notElements) {
		return (
			<NotFound routes={routesNotFound} title={'Elementos no encontrados'} />
		);
	}

	return (
		<Container maxWidth={'sm'}>
			<Card sx={{ m: '2rem' }} elevation={3}>
				<CardContent>
					<Typography mt='1rem' textAlign={'center'} variant={'h5'}>
						<b>Detalles de vehiculo</b>
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
							label={active ? 'Activo' : 'Inactivo'}
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
								<span>
									{data.Bidder.firstName + ' ' + data.Bidder.lastName}
								</span>
								<br />
								<span>{data.Bidder.id}</span>
								<br />
								<span>{data.plate}</span>
								<br />
								<span>{data.ColorVehicle.description}</span>
								<br />
								<span>{data.TypeVehicle.description}</span>
								<br />
								<span>{data.YearVehicle.description}</span>
								<br />
								<span>{data.BrandVehicle.description}</span>
								<br />
								<span>{data.available}</span>
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
