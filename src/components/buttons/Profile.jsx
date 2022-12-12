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

export default function Profile() {
	const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenUserMenu = e => {
		setAnchorElUser(e.target);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Open settings'>
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
				{settings.map(setting => (
					<MenuItem key={setting} onClose={handleCloseUserMenu}>
						<Typography>{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}
