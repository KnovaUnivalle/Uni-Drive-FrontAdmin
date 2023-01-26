import { Box } from '@mui/material';
import BarFrequent from '../../components/charts/BarFrequent';
import PieActive from '../../components/charts/PieActive';
import PieToUniversity from '../../components/charts/PieToUniversity';

export default function Principal() {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
			<BarFrequent />
			<PieActive />
			<PieToUniversity />
		</Box>
	);
}
