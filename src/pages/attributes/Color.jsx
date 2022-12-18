import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import AttributeCard from '../../components/cards/AttributeCard';
import { useFetch } from '../../hooks/useFetch';

export default function Color() {
	const { get } = useFetch();
	const [colors, setColors] = useState([]);

	const loadColors = async () => {
		const res = await get('vehicle/allColor');
		setColors(res);
	};

	useEffect(() => {
		loadColors();
	}, []);

	return (
		<>
			<Box style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{colors.map(color => (
					<AttributeCard attribute={color} key={color.id} />
				))}
			</Box>
		</>
	);
}
