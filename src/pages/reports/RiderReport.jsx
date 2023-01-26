import { Box } from '@mui/material';
import BarFrequent from '../../components/charts/BarFrequent';
import PieActive from '../../components/charts/PieActive';

const route = 'rider';
const title = 'Pasajeros';

export default function RiderReport() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			<BarFrequent route={route} title={title} color='#daae9f' />
			<PieActive route={route} title={title} colors={['#5F5EC2', '#C1C25E']} />
		</Box>
	);
}
