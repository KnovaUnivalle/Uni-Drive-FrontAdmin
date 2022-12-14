import { Route, Routes } from 'react-router-dom';
import NavDrawer from '../components/nav/NavDrawer';
import DashBoard from '../pages/DashBoard';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';

export default function HomeRoutes() {
	return (
		<Routes>
			<Route path='profile' element={<Profile />}></Route>
			<Route path='/' element={<DashBoard />}></Route>
			<Route path='*' element={<NotFound />}></Route>
			<Route path='attributes' element={<NavDrawer />}></Route>
		</Routes>
	);
}
