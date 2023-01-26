import { Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { VictoryPie } from 'victory';
import { useFetch } from '../../hooks/useFetch';

export default function PieActive({
	route = 'report/active/color',
	title,
	colors = ['orange', 'navy'],
}) {
	const { get } = useFetch();
	const [data, setData] = useState([]);

	const loadData = async () => {
		const res = await get(route);
		const resData = await res.json();
		setData([
			{ x: 1, y: resData.active, label: 'Activo' },
			{ x: resData.active, y: resData.noActive, label: 'Inactivo' },
		]);
		console.log(resData);
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
			}}
		>
			<Typography mt='1rem' align='center' variant='h5'>
				{title} Activos e Inactivos
			</Typography>
			<VictoryPie data={data} colorScale={colors} />
		</Paper>
	);
}
