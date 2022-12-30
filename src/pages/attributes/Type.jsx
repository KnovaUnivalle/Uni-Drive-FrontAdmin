import { useEffect, useState } from 'react';
import AddAttribute from '../../components/dialogs/AddAttribute';
import AttributeCard from '../../components/cards/AttributeCard';
import { useFetch } from '../../hooks/useFetch';

const route = 'vehicle/type';

export default function Type() {
	const { get } = useFetch();
	const [types, setTypes] = useState([]);

	const loadTypes = async () => {
		const res = await get(route);
		setTypes(res);
	};

	const setNewType = data => {
		setTypes([...types, data]);
	};

	useEffect(() => {
		loadTypes();
	}, []);

	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{types.map(type => (
					<AttributeCard attribute={type} key={type.id} route={route} />
				))}
			</div>
			<AddAttribute route={route} addFunction={setNewType} />
		</>
	);
}
