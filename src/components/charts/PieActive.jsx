import { Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';
import { useFetch } from '../../hooks/useFetch';

export default function PieActive({
	route = 'color',
	title,
	colors = ['orange', 'navy'],
}) {
	const { get } = useFetch();
	const [data, setData] = useState([]);

	const loadData = async () => {
		const res = await get('report/active/' + route);
		const resData = await res.json();
		setData(resData);
	};

	useEffect(() => {
		loadData();
	}, [route]);

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
				<b>{title} Activos e Inactivos</b>
			</Typography>
			<VictoryPie data={data} colorScale={colors} padding={80} />
		</Paper>
	);
}
