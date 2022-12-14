import { Route, Routes } from 'react-router-dom';
import Brand from '../pages/attributes/Brand';
import Color from '../pages/attributes/Color';
import Type from '../pages/attributes/Type';
import Year from '../pages/attributes/Year';
import NotFound from '../pages/NotFound';
export default function AttributesRoutes() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='brand' element={<Brand />} />
			<Route path='color' element={<Color />} />
			<Route path='year' element={<Year />} />
			<Route path='type' element={<Type />} />
			<Route path='city' element={<Year />} />
		</Routes>
	);
}
