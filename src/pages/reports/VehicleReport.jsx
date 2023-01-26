import { Box } from '@mui/material';
import BarFrequent from '../../components/charts/BarFrequent';
import PieActive from '../../components/charts/PieActive';

const route = 'vehicle';
const title = 'Vehiculos';

export default function RiderReport() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			<BarFrequent route={route} title={title} color='#9FCBDA' />
			<PieActive route={route} title={title} />
		</Box>
	);
}
