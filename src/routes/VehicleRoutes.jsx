import { Route, Routes } from 'react-router-dom';
import Vehicle from '../pages/vehicle/Vehicle';
import NotFound from '../pages/NotFound';
import VehicleDetails from '../pages/vehicle/VehicleDetails';

export default function VehicleRoutes() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Vehicle />} />
			<Route path=':id' element={<VehicleDetails />} />
		</Routes>
	);
}
