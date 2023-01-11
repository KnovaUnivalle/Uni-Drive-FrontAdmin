import AttributeDeck from '../../components/decks/AttributeDeck';

const route = 'attribute/brand';
const routeNotFound = [{ link: '/home/attribute/brand', name: 'MARCAS' }];

export default function Brand() {
	return <AttributeDeck route={route} routeNotFound={routeNotFound} />;
}
