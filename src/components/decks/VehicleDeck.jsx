import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import VehicleCard from '../cards/VehicleCard';
import Load from '../tools/Load';

export default function VehicleDeck({ route }) {
	const { get } = useFetch();
	const [vehicles, setVehicles] = useState([]);
	const [charging, setCharging] = useState(true);

	const loadVehicles = async () => {
		setCharging(true);
		const res = await get(route);
		if (res.status === 404) {
			console.log('error');
		} else {
			const dataVehicle = await res.json();
			setVehicles(dataVehicle);
			setCharging(false);
		}
	};

	useEffect(() => {
		loadVehicles();
	}, []);

	if (charging) {
		return <Load />;
	}

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
