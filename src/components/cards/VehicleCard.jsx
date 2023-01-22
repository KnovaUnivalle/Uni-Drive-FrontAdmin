import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function VehicleCard({ data, route }) {
	const navigate = useNavigate();

	const handleButton = e => {
		navigate('/home/' + route + data.id);
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
				<Box>
					<Typography textAlign={'right'}>
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
				<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '0.5rem' }}>
					<Button variant='contained' onClick={handleButton}>
						Ver más
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
