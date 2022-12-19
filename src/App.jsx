import { AuthProvider } from './hooks/useAuth';
import { FetchProvider } from './hooks/useFetch';
import AppRoutes from './routes/AppRoutes';

function App() {
	return (
		<>
			<AuthProvider>
				<FetchProvider>
					<AppRoutes />
				</FetchProvider>
			</AuthProvider>
		</>
	);
}

export default App;
