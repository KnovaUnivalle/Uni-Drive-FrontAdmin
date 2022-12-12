import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NavBarHeader from '../components/tools/NavBarHeader';
import NotFound from '../pages/NotFound';

const HomePageTest = () => (
	<div>
		<h1>This is the Home Page test</h1>
	</div>
);

export default function HomeRoutes() {
	return (
		<>
			<NavBar />
			<NavBarHeader />
			<Routes>
				<Route path='test' element={<HomePageTest />}></Route>
				<Route path='/' element={<HomePageTest />}></Route>
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</>
	);
}
