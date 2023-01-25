import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import NotFound from '../../pages/NotFound';
import VehicleCard from '../cards/VehicleCard';
import Load from '../tools/Load';

export default function VehicleDeck({ route, routesNotFound = [] }) {
	const { get } = useFetch();
	const [vehicles, setVehicles] = useState([]);
	const [charging, setCharging] = useState(true);
	const [notElements, setNotElements] = useState(false);

	const loadVehicles = async () => {
		setCharging(true);
		const res = await get(route);
		if (res.status === 404) {
			setCharging(false);
			setNotElements(true);
		} else {
			const dataVehicle = await res.json();
			setVehicles(dataVehicle);
			setCharging(false);
		}
	};

	useEffect(() => {
		setNotElements(false);
		loadVehicles();
	}, []);

	if (charging) {
		return <Load />;
	}

	if (notElements) {
		return (
			<NotFound routes={routesNotFound} title={'Elementos no encontrados'} />
		);
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
