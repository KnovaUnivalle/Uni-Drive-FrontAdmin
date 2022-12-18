import { useEffect, useState } from 'react';
import AddAttribute from '../../components/buttons/AddAttribute';
import AttributeCard from '../../components/cards/AttributeCard';
import { useFetch } from '../../hooks/useFetch';

export default function Color() {
	const { get } = useFetch();
	const [colors, setColors] = useState([]);

	const loadColors = async () => {
		const res = await get('vehicle/allColor');
		setColors(res);
	};

	const setNewColor = data => {
		setColors([...colors, data]);
	};

	useEffect(() => {
		loadColors();
	}, []);

	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{colors.map(color => (
					<AttributeCard attribute={color} key={color.id} />
				))}
			</div>
			<AddAttribute route={'vehicle/color'} addFunction={setNewColor} />
		</>
	);
}
