import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div>
			<h1>Error 404</h1>
			<h2>Página no encontrada</h2>
			<section>
				<p>Enlaces que pueden ayudar:</p>
				<Link to='/'>
					<p>INICIO</p>
				</Link>
				<Link to='/home'>
					<p>HOME</p>
				</Link>
			</section>
		</div>
	);
}
