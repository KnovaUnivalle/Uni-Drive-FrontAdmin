import { Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';
import { useFetch } from '../../hooks/useFetch';

const route = 'report/toUniversity';

export default function PieToUniversity({ colors = ['#b4ae6f', '#6F75B4 '] }) {
	const { get } = useFetch();
	const [data, setData] = useState([]);

	const loadData = async () => {
		const res = await get(route);
		const resData = await res.json();
		setData(resData);
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<Paper
			elevation={3}
			sx={{
				maxWidth: { md: '45%', lg: '30%', xs: '100%' },
				m: '1rem',
				pt: '0.5rem',
			}}
		>
			<Typography align='center' variant='h5'>
				<b>Tipo de viajes</b>
			</Typography>
			<VictoryPie
				data={data}
				colorScale={colors}
				innerRadius={60}
				padding={90}
			/>
		</Paper>
	);
}
