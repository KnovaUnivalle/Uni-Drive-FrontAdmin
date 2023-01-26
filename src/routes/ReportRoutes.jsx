import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Principal from '../pages/reports/Principal';

export default function ReportRoutes() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='principal' element={<Principal />} />
		</Routes>
	);
}
