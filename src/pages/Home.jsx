import NavBar from '../components/nav/NavBar';
import NavBarHeader from '../components/tools/NavBarHeader';
import HomeRoutes from '../routes/HomeRoutes';
export default function Home() {
	return (
		<>
			<NavBar />
			<NavBarHeader />
			<HomeRoutes />
		</>
	);
}
