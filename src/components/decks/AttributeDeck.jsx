import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import NotFound from '../../pages/NotFound';
import BackFlatButton from '../buttons/BackFlatButton';
import AttributeCard from '../cards/AttributeCard';
import AddAttributeDialog from '../dialogs/AddAttributeDialog';
import SearchAttributeDialog from '../dialogs/SearchAttributeDialog';
import { attributeRoutes } from '../../utils/RoutesNotFound';
import Load from '../tools/Load';

export default function AttributeDeck({ route, routeNotFound = [] }) {
	const { get } = useFetch();
	const routesNotFound = attributeRoutes.concat(routeNotFound);
	const searchParams = useLocation().search;
	const [attributes, setAttributes] = useState([]);
	const [charging, setCharging] = useState(true);
	const [notElements, setNotElements] = useState(false);

	const loadAttributes = async () => {
		setCharging(true);
		const res = await get(route + searchParams);
		if (res.status === 404) {
			setCharging(false);
			setNotElements(true);
		} else {
			setCharging(false);
			setAttributes(await res.json());
		}
	};

	const setNewBrand = data => {
		setAttributes([...attributes, data]);
	};

	useEffect(() => {
		setNotElements(false);
		loadAttributes();
	}, [searchParams]);

	if (notElements) {
		return (
			<NotFound routes={routesNotFound} title={'Elementos no encontrados'} />
		);
	}

	if (charging) {
		return <Load />;
	}

	return (
		<>
			<div style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{attributes.map(attribute => (
					<AttributeCard
						attribute={attribute}
						key={attribute.id}
						route={route}
					/>
				))}
			</div>
			{searchParams ? <BackFlatButton route={route} /> : null}
			<SearchAttributeDialog route={route} />
			<AddAttributeDialog route={route} addFunction={setNewBrand} />
		</>
	);
}
