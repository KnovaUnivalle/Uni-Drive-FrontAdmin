import { Box } from '@mui/material';
import NavDrawer from '../../components/nav/NavDrawer';
import ReportRoutes from '../../routes/ReportRoutes';

import ColorLensIcon from '@mui/icons-material/ColorLens';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DiamondIcon from '@mui/icons-material/Diamond';
import NumbersIcon from '@mui/icons-material/Numbers';

const objectItems = {
	Colores: { url: '/home/attribute/color', icon: <ColorLensIcon /> },
	Marcas: { url: '/home/attribute/brand', icon: <DiamondIcon /> },
	Modelos: { url: '/home/attribute/year', icon: <NumbersIcon /> },
	Tipos: { url: '/home/attribute/type', icon: <DirectionsCarIcon /> },
	Ciudades: { url: '/home/attribute/city', icon: <LocationCityIcon /> },
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
