import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

export default function VehicleDetails() {
	const { id } = useParams();

	return (
		<Container maxWidth={'sm'}>
			<Card sx={{ mt: '2rem' }} elevation={3}>
				<CardContent>
					<Typography mt='1rem' textAlign={'center'} variant={'h5'}>
						Detalles de vehiculo
					</Typography>
					<Box>
						<Typography textAlign={'right'}>
							<b>ID:</b> {id}
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
								<br />
								<b>Color vehiculo:</b>
								<br />
								<b>Tipo vehiculo:</b>
								<br />
								<b>Modelo vehiculo:</b>
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
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{ display: 'flex', justifyContent: 'flex-end', mt: '0.5rem' }}
					>
						<Button variant='contained'>Ver más</Button>
					</Box>
				</CardContent>
			</Card>
		</Container>
	);
}
