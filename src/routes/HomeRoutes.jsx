import { Route, Routes } from 'react-router-dom';
import DashBoard from '../pages/DashBoard';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';

export default function HomeRoutes() {
	return (
		<Routes>
			<Route path='profile' element={<Profile />}></Route>
			<Route path='/' element={<DashBoard />}></Route>
			<Route path='*' element={<NotFound />}></Route>
		</Routes>
	);
}
