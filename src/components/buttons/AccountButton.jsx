import {
	Avatar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const options = ['profile', 'home', 'logout'];

export default function AccountButton() {
	const [anchorElUser, setAnchorElUser] = useState(null);
	const navigate = useNavigate();
	const { logout } = useAuth();

	const handleOpenUserMenu = e => {
		setAnchorElUser(e.target);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const objectOption = {
		profile: {
			function: () => {
				setAnchorElUser(null);
				navigate('/home/profile');
			},
			name: 'Perfil',
		},
		home: {
			function: () => {
				setAnchorElUser(null);
				navigate('/home');
			},
			name: 'Página principal',
		},
		logout: { function: () => logout(), name: 'Cerrar sesión' },
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Abrir opciones'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{options.map(option => (
					<MenuItem
						key={option}
						onClose={handleCloseUserMenu}
						onClick={objectOption[option].function}
					>
						<Typography>{objectOption[option].name}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}
