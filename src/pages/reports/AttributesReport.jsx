import { Box } from '@mui/material';
import BarFrequent from '../../components/charts/BarFrequent';
import PieActive from '../../components/charts/PieActive';

const routeColor = 'color';
const titleColor = 'Colores';

const routeBrand = 'brand';
const titleBrand = 'Marcas';

const routeType = 'type';
const titleType = 'Tipos';

const routeYear = 'year';
const titleYar = 'Modelo';

export default function AttributesReport() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			<BarFrequent route={routeColor} title={titleColor} />
			<PieActive
				route={routeColor}
				title={titleColor}
				colors={['#26bfbf', '#bf2626']}
			/>

			<BarFrequent route={routeBrand} title={titleBrand} color='#b4ae6f' />
			<PieActive
				route={routeBrand}
				title={titleBrand}
				colors={['#5F5EC2', '#C1C25E']}
			/>

			<BarFrequent route={routeType} title={titleType} color='#00447C' />
			<PieActive
				route={routeType}
				title={titleType}
				colors={['#f8f1fe', '#f7fef1']}
			/>

			<BarFrequent route={routeYear} title={titleYar} color='#6F75B4' />
			<PieActive
				route={routeYear}
				title={titleYar}
				colors={['#b1d6e1', '#e1bcb1']}
			/>
		</Box>
	);
}
