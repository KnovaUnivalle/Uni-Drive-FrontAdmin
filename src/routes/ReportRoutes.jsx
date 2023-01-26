import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import BidderReport from '../pages/reports/BidderReport';
import Principal from '../pages/reports/Principal';

export default function ReportRoutes() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Principal />} />
			<Route path='bidder' element={<BidderReport />} />
		</Routes>
	);
}
