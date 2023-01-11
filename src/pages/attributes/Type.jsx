import AttributeDeck from '../../components/decks/AttributeDeck';

const route = 'attribute/type';
const routeNotFound = [
	{ link: '/home/attribute/type', name: 'TIPOS DE VEHICULO' },
];

export default function Type() {
	return <AttributeDeck route={route} routeNotFound={routeNotFound} />;
}
