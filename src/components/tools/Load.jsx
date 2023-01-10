import { Box, Skeleton, Typography } from '@mui/material';

export default function Load() {
	return (
		<Box sx={{ marginLeft: '2vw', marginRight: '2vw' }}>
			<Typography variant='h1'>
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton />
			</Typography>
		</Box>
	);
}
