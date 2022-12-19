import { useEffect, useState } from 'react';
import AddAttribute from '../../components/buttons/AddAttribute';
import AttributeCard from '../../components/cards/AttributeCard';
import { useFetch } from '../../hooks/useFetch';

const route = 'trip/city';

export default function City() {
	const { get } = useFetch();
	const [cities, setCities] = useState([]);

	const loadCity = async () => {
		const res = await get(route);
		setCities(res);
	};

	const setNewCity = data => {
		setCities([...cities, data]);
	};

	useEffect(() => {
		loadCity();
	}, []);

	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{cities.map(city => (
					<AttributeCard attribute={city} key={city.id} route={route} />
				))}
			</div>
			<AddAttribute route={route} addFunction={setNewCity} />
		</>
	);
}
