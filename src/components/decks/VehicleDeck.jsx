import VehicleCard from '../cards/VehicleCard';

export default function VehicleDeck({ route }) {
	const data = { id: 1 };
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
			<VehicleCard route={route} data={data} />
			<VehicleCard route={route} data={data} />
			<VehicleCard route={route} data={data} />
			<VehicleCard route={route} data={data} />
			<VehicleCard route={route} data={data} />
			<VehicleCard route={route} data={data} />
			<VehicleCard route={route} data={data} />
		</div>
	);
}
