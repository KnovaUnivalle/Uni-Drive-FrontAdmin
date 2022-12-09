import { Route, Routes } from 'react-router-dom';
import { RouteGuard } from '../components/tools/RouteGuard';
import Login from '../pages/Login';
import HomeRoutes from './HomeRoutes';

const HomePage = () => (
	<div>
		<h1>This is the Home Page</h1>
	</div>
);

export function Local() {
	return (
		<div className='App'>
			<div>
				<a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
					<img src='/vite.svg' className='logo' alt='Vite logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />}></Route>
			<Route
				path='home/*'
				element={
					<RouteGuard>
						<HomeRoutes />
					</RouteGuard>
				}
			></Route>
			<Route path='/login' element={<Login />}></Route>
			<Route
				path='/local'
				element={
					<RouteGuard>
						<Local />
					</RouteGuard>
				}
			></Route>
		</Routes>
	);
}
