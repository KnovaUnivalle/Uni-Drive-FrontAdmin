import AttributeDeck from '../../components/decks/AttributeDeck';

const route = 'attribute/color';
const routeNotFound = [{ link: '/home/attribute/color', name: 'COLORES' }];

export default function Color() {
	return <AttributeDeck route={route} routeNotFound={routeNotFound} />;
}
