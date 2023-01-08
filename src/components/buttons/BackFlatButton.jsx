import { Fab, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackFlatButton({ route }) {
	const navigate = useNavigate();

	const handleClick = e => {
		navigate('/home/' + route);
	};

	return (
		<>
			<Tooltip title='Volver'>
				<Fab
					onClick={handleClick}
					sx={{ position: 'fixed', bottom: 158, right: 16 }}
				>
					<ArrowBackIcon />
				</Fab>
			</Tooltip>
		</>
	);
}
