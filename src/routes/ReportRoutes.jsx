import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';

export default function ReportRoutes() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}
