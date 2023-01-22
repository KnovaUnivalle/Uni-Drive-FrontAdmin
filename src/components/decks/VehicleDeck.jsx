import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import VehicleCard from '../cards/VehicleCard';

export default function VehicleDeck({ route }) {
	const { get } = useFetch();
	const [vehicles, setVehicles] = useState([]);

	const loadVehicles = async () => {
		const res = await get(route);
		if (res.status === 404) {
			console.log('error');
		} else {
			setVehicles(await res.json());
		}
	};

	useEffect(() => {
		loadVehicles();
	}, []);

	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{vehicles.map(vehicle => (
					<VehicleCard key={vehicle.id} data={vehicle} route={route} />
				))}
			</div>
		</>
	);
}
