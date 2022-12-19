import { Route, Routes } from 'react-router-dom';
import { RouteGuard } from '../components/tools/RouteGuard';
import Home from '../pages/Home';
import Initial from '../pages/Initial';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Initial />} />
			<Route
				path='home/*'
				element={
					<RouteGuard>
						<Home />
					</RouteGuard>
				}
			></Route>
			<Route path='/login' element={<Login />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}
