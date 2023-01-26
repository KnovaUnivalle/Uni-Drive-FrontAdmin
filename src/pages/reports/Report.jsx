import { Box } from '@mui/material';
import NavDrawer from '../../components/nav/NavDrawer';
import ReportRoutes from '../../routes/ReportRoutes';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';

const objectItems = {
	Principal: {
		url: '/home/report/',
		icon: <HomeIcon />,
	},

	Conductores: {
		url: '/home/report/bidder',
		icon: <AirlineSeatReclineNormalIcon />,
	},
	Pasajeros: {
		url: '/home/report/rider',
		icon: <PeopleIcon />,
	},
	Vehiculos: {
		url: '/home/report/vehicle',
		icon: <DirectionsCarIcon />,
	},
	Attributos: {
		url: '/home/report/attributes',
		icon: <CategoryIcon />,
	},
	Viajes: {
		url: '/home/report/trip',
		icon: <FlightIcon />,
	},
};

export default function Report() {
	return (
		<Box style={{ display: 'flex' }}>
			<NavDrawer objectItems={objectItems} />
			<Box sx={{ flexGrow: 1, m: 0 }}>
				<ReportRoutes />
			</Box>
		</Box>
	);
}
