import { useEffect, useState } from 'react';
import AddAttribute from '../../components/dialogs/AddAttribute';
import AttributeCard from '../../components/cards/AttributeCard';
import { useFetch } from '../../hooks/useFetch';

const route = 'vehicle/brand';

export default function Brand() {
	const { get } = useFetch();
	const [brands, setBrands] = useState([]);

	const loadBrands = async () => {
		const res = await get(route);
		setBrands(res);
	};

	const setNewBrand = data => {
		setBrands([...brands, data]);
	};

	useEffect(() => {
		loadBrands();
	}, []);

	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{brands.map(brand => (
					<AttributeCard attribute={brand} key={brand.id} route={route} />
				))}
			</div>
			<AddAttribute route={route} addFunction={setNewBrand} />
		</>
	);
}
