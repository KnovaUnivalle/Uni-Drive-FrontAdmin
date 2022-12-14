import { useTheme } from '@mui/material/styles';
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const lst = ['mango', 'pera', 'manzana'];
export default function NavDrawer() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.up('md'));
	return (
		<>
			<Drawer variant='permanent' open={!isMobile}>
				<List>
					{lst.map(elmt => (
						<ListItem key={elmt}>
							<ListItemButton>
								<ListItemIcon>
									<AcUnitIcon />
								</ListItemIcon>
								<ListItemText>{elmt}</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
}
