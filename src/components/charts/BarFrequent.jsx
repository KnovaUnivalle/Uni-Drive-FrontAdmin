import { Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import { useFetch } from '../../hooks/useFetch';

export default function BarFrequent({
	route = 'color',
	title,
	color = '#c43a31',
}) {
	const { get } = useFetch();
	const [data, setData] = useState([]);

	const loadData = async () => {
		const res = await get('report/frequent/' + route);
		const resData = await res.json();
		setData(resData);
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
				pt: '0.5rem',
			}}
		>
			<Typography align='center' variant='h5'>
				<b>{title} Más Frecuentes</b>
			</Typography>
			<VictoryChart domainPadding={20} theme={VictoryTheme.material}>
				<VictoryBar
					data={data}
					x='name'
					y='count'
					style={{ data: { fill: color } }}
					labels={({ datum }) => datum.earnings}
				/>
			</VictoryChart>
		</Paper>
	);
}
