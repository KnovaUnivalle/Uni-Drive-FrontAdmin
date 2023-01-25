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
import { useState } from 'react';

const fillFalseOneTrue = (length, index) => {
	const arr = Array(length).fill(false);
	arr[index] = true;
	return arr;
};

export default function NavDrawer({ objectElements }) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.up('md'));
	const navigate = useNavigate();
	const lengthObjectElements = Object.keys(objectElements).length;
	const [mark, setMark] = useState(fillFalseOneTrue(lengthObjectElements, 0));

	return (
		<Drawer variant='permanent' open={isMobile} style={{ zIndex: '0' }}>
			<NavBarHeader />
			<List>
				{Object.keys(objectElements).map((element, index) => (
					<ListItem
						key={element}
						sx={{
							display: 'block',
							background: mark[index] ? '#CECDCD' : null,
						}}
						disablePadding
					>
						<ListItemButton
							onClick={() => {
								navigate(objectElements[element].url);
								setMark(fillFalseOneTrue(lengthObjectElements, index));
							}}
							sx={{
								minHeight: 52,
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
