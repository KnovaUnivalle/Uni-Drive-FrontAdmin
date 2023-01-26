import { Route, Routes } from 'react-router-dom';
import Attributes from '../pages/attributes/Attributes';
import DashBoard from '../pages/DashBoard';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Report from '../pages/reports/Report';
import VehicleRoutes from './VehicleRoutes';

export default function HomeRoutes() {
	return (
		<Routes>
			<Route path='profile' element={<Profile />} />
			<Route path='/' element={<DashBoard />} />
			<Route path='*' element={<NotFound />} />
			<Route path='attribute/*' element={<Attributes />} />
			<Route path='vehicle/*' element={<VehicleRoutes />} />
			<Route path='report/*' element={<Report />} />
		</Routes>
	);
}
