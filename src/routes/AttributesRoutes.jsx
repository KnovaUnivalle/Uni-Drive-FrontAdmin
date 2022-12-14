import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
export default function AttributesRoutes() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}
