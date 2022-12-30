import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import AttributeCard from '../cards/AttributeCard';
import AddAttributeDialog from '../dialogs/AddAttributeDialog';

export default function AttributeDeck({ route }) {
	const { get } = useFetch();
	const [attributes, setAttributes] = useState([]);

	const loadAttributes = async () => {
		const res = await get(route);
		setAttributes(res);
	};

	const setNewBrand = data => {
		setAttributes([...attributes, data]);
	};

	useEffect(() => {
		loadAttributes();
	}, []);

	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{attributes.map(attribute => (
					<AttributeCard
						attribute={attribute}
						key={attribute.id}
						route={route}
					/>
				))}
			</div>
			<AddAttributeDialog route={route} addFunction={setNewBrand} />
		</>
	);
}
