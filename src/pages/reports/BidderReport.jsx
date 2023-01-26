import { Box } from '@mui/material';
import BarFrequent from '../../components/charts/BarFrequent';
import PieActive from '../../components/charts/PieActive';

export default function BidderReport() {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
			<BarFrequent route='bidder' />
			<PieActive route='bidder' />
		</Box>
	);
}
