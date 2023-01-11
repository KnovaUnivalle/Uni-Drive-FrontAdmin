import AttributeDeck from '../../components/decks/AttributeDeck';

const route = 'attribute/year';
const routeNotFound = [{ link: '/home/attribute/year', name: 'MODELOS' }];

export default function Year() {
	return <AttributeDeck route={route} routeNotFound={routeNotFound} />;
}
