import { Box } from '@mui/material';
import NavDrawer from '../../components/nav/NavDrawer';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttributesRoutes from '../../routes/AttributesRoutes';

const elements = ['Colores', 'Marcas', 'Modelos', 'Tipos', 'Ciudades'];
const objectElements = {
	Colores: { url: '/home/attribute/color', icon: <ColorLensIcon /> },
	Marcas: { url: '/home/attribute/brand', icon: <ColorLensIcon /> },
	Modelos: { url: '/home/attribute/model', icon: <ColorLensIcon /> },
	Tipos: { url: '/home/attribute/type', icon: <DirectionsCarIcon /> },
	Ciudades: { url: '/home/attribute/city', icon: <LocationCityIcon /> },
};

export default function Attributes() {
	return (
		<Box style={{ display: 'flex' }}>
			<NavDrawer elements={elements} objectElements={objectElements} />
			<Box sx={{ flexGrow: 1, m: 0 }}>
				<AttributesRoutes />
			</Box>
		</Box>
	);
}
