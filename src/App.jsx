import { AuthProvider } from './hooks/useAuth';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
	return (
		<>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</>
	);
}

export default App;
