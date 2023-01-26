import { Box } from '@mui/material';
import PieToUniversity from '../../components/charts/PieToUniversity';

export default function BidderReport() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			<PieToUniversity colors={['#D48ED3', '#8ed48f']} />
		</Box>
	);
}
