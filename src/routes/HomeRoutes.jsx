import { Route, Routes } from 'react-router-dom';
import Attributes from '../pages/Attributes';
import DashBoard from '../pages/DashBoard';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';

export default function HomeRoutes() {
	return (
		<Routes>
			<Route path='profile' element={<Profile />} />
			<Route path='/' element={<DashBoard />} />
			<Route path='*' element={<NotFound />} />
			<Route path='attributes/*' element={<Attributes />} />
		</Routes>
	);
}
