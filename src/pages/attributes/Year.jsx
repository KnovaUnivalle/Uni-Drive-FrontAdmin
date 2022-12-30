import { useEffect, useState } from 'react';
import AddAttribute from '../../components/dialogs/AddAttribute';
import AttributeCard from '../../components/cards/AttributeCard';
import { useFetch } from '../../hooks/useFetch';

const route = 'vehicle/year';

export default function Year() {
	const { get } = useFetch();
	const [years, setYears] = useState([]);

	const loadYears = async () => {
		const res = await get(route);
		setYears(res);
	};

	const setNewYear = data => {
		setYears([...years, data]);
	};

	useEffect(() => {
		loadYears();
	}, []);

	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{years.map(year => (
					<AttributeCard attribute={year} key={year.id} route={route} />
				))}
			</div>
			<AddAttribute route={route} addFunction={setNewYear} />
		</>
	);
}
