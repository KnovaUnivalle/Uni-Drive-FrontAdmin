import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import AttributeCard from '../../components/cards/AttributeCard';
import { useAuth } from '../../hooks/useAuth';
import { getColors } from '../../services/Attributes.service';

export default function Color() {
	const [colors, setColors] = useState([]);
	const { token } = useAuth();

	const loadColors = async key => {
		const res = await getColors(key);
		setColors(res);
		console.log(res);
	};

	useEffect(() => {
		loadColors(token);
	}, [token]);

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
