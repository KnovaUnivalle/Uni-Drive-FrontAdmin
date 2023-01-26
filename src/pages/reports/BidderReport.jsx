import { Box } from '@mui/material';
import BarFrequent from '../../components/charts/BarFrequent';
import PieActive from '../../components/charts/PieActive';

const route = 'bidder';
const title = 'Conductores';

export default function BidderReport() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			<BarFrequent route={route} title={title} color='#B33836' />
			<PieActive route={route} title={title} colors={['#D48ED3', '#8ed48f']} />
		</Box>
	);
}
