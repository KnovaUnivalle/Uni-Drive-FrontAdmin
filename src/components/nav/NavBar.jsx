import {
	AppBar,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import AccountButton from '../buttons/AccountButton';

const pages = [
	'Pasajeros',
	'Conductores',
	'Vehiculos',
	'Atributos',
	'Informes',
];

export default function NavBar() {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const navigate = useNavigate();

	const pagesUrl = {
		Pasajeros: '/home/rider',
		Conductores: '/home/bidder',
		Vehiculos: '/home/vehicle',
		Informes: '/home/report',
		Atributos: '/home/attribute',
	};

	const handleOpenNavMenu = e => {
		setAnchorElNav(e.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position='fixed' color='inherit'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Button
						sx={{
							color: 'black',
							display: { xs: 'none', md: 'flex' },
						}}
						onClick={() => navigate('/home/')}
					>
						<Typography
							variant='h6'
							noWrap
							sx={{
								mr: 3,
								fontWeight: 700,
							}}
						>
							UniDrive Manager
						</Typography>
					</Button>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map(page => (
								<MenuItem
									key={page}
									onClose={handleCloseNavMenu}
									onClick={() => {
										navigate(pagesUrl[page], { replace: true });
										handleCloseNavMenu();
									}}
								>
									<Typography textAlign='center'>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Button
						sx={{
							color: 'black',
							display: { xs: 'flex', md: 'none' },
							justifyContent: 'initial',
							flexGrow: 1,
						}}
						onClick={() => navigate('/home')}
					>
						<Typography
							variant='h6'
							noWrap
							sx={{
								mr: 2,
								fontWeight: 700,
							}}
						>
							UniDrive Manager
						</Typography>
					</Button>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => (
							<Button
								key={page}
								onClose={handleCloseNavMenu}
								onClick={() => navigate(pagesUrl[page], { replace: true })}
								sx={{ my: 2, color: 'black', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>
					<AccountButton />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
