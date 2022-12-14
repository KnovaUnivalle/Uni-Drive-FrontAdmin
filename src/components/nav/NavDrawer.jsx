import { useTheme } from '@mui/material/styles';
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
	useMediaQuery,
} from '@mui/material';
import NavBarHeader from '../tools/NavBarHeader';
import { useNavigate } from 'react-router-dom';
import Drawer from '../tools/Drawer';

export default function NavDrawer({ elements, objectElements }) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.up('md'));
	const navigate = useNavigate();
	return (
		<Drawer variant='permanent' open={isMobile} style={{ zIndex: '0' }} disa>
			<NavBarHeader />
			<List>
				{elements.map(element => (
					<ListItem key={element} sx={{ display: 'block' }} disablePadding>
						<ListItemButton
							onClick={() => navigate(objectElements[element].url)}
							sx={{
								minHeight: 52,
								justifyContent: !isMobile ? 'initial' : 'center',
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
								}}
							>
								<Tooltip title={element}>
									{objectElements[element].icon}
								</Tooltip>
							</ListItemIcon>
							<ListItemText
								primary={element}
								sx={{ opacity: isMobile ? 1 : 0 }}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}
