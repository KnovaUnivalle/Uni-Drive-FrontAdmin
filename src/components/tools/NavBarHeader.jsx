import { styled } from '@mui/material/styles';

const NavBarHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below nav bar
	...theme.mixins.toolbar,
}));

export default NavBarHeader;
