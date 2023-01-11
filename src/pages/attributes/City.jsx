import AttributeDeck from '../../components/decks/AttributeDeck';

const route = 'attribute/city';
const routeNotFound = [{ link: '/home/attribute/city', name: 'CIUDADES' }];

export default function City() {
	return <AttributeDeck route={route} routeNotFound={routeNotFound} />;
}
