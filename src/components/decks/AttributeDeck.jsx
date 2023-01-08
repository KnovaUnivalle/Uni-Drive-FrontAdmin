import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import BackFlatButton from '../buttons/BackFlatButton';
import AttributeCard from '../cards/AttributeCard';
import AddAttributeDialog from '../dialogs/AddAttributeDialog';
import SearchAttributeDialog from '../dialogs/SearchAttributeDialog';

export default function AttributeDeck({ route }) {
	const { get } = useFetch();
	const searchParams = useLocation().search;
	const [attributes, setAttributes] = useState([]);

	const loadAttributes = async () => {
		setAttributes([]);
		const res = await get(route + searchParams);
		setAttributes(res);
	};

	const setNewBrand = data => {
		setAttributes([...attributes, data]);
	};

	useEffect(() => {
		loadAttributes();
	}, [searchParams]);

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
