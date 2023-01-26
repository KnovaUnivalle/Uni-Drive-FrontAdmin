import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import AttributesReport from '../pages/reports/AttributesReport';
import BidderReport from '../pages/reports/BidderReport';
import Principal from '../pages/reports/Principal';
import RiderReport from '../pages/reports/RiderReport';
import TripReport from '../pages/reports/TripReport';
import VehicleReport from '../pages/reports/VehicleReport';

export default function ReportRoutes() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Principal />} />
			<Route path='bidder' element={<BidderReport />} />
			<Route path='rider' element={<RiderReport />} />
			<Route path='vehicle' element={<VehicleReport />} />
			<Route path='attributes' element={<AttributesReport />} />
			<Route path='trip' element={<TripReport />} />
		</Routes>
	);
}
