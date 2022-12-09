import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div>
			<h1>
				<b>Error 404</b>
			</h1>
			<h2>Página no encontrada</h2>
			<p>Enlaces que pueden ayudar:</p>
			<Link to='/'>Inicio</Link> <br />
			<Link to='/home'>Home</Link>
		</div>
	);
}
