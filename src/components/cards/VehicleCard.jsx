import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function VehicleCard({ data, route }) {
	const navigate = useNavigate();

	const handleButton = e => {
		navigate(route + '/' + data.id);
	};

	return (
		<Card
			sx={{
				m: '0.5rem',
				width: { sm: '45%', md: '30%', lg: '24%', xs: '100%' },
				maxWidth: { lg: '35%' },
			}}
			elevation={3}
		>
			<CardContent>
				<Box>
					<Typography textAlign={'right'}>
						<b>ID:</b> 1
					</Typography>
				</Box>
				<Box sx={{ display: 'flex' }}>
					<Box sx={{ width: '50%' }}>
						<Typography variant=''>
							<b>Nombre Coductor:</b>
						</Typography>
						<Typography>
							<b>ID Coductor:</b>
						</Typography>
						<Typography>
							<b>Placa vehiculo:</b>
						</Typography>
					</Box>

					<Box sx={{ width: '50%' }}>
						<Typography textAlign={'right'}>Jose Antonio</Typography>
						<Typography textAlign={'right'}>26</Typography>
						<Typography textAlign={'right'}>343243</Typography>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '0.5rem' }}>
					<Button variant='contained' onClick={handleButton}>
						Ver más
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
