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
import { useLocation, useNavigate } from 'react-router-dom';
import Drawer from '../tools/Drawer';
import { useEffect, useState } from 'react';

/**
 * Create a list with a length fill with false and one true in a nindex
 * @param {Integer} length
 * @param {Integer} index
 * @returns
 */
const fillFalseOneTrue = (length, index) => {
	const arr = Array(length).fill(false);
	arr[index] = true;
	return arr;
};

/**
 * Find index of the key object to match with pathname
 * @param {String} path
 * @param {Object} object
 * @param {Integer[]} keys
 * @returns
 */

const findItem = (path, object, keys) => {
	const indexItem = keys.reduce((acc, cur, index) => {
		if (path === object[cur].url) {
			return index;
		}
		return acc;
	}, 0);
	return indexItem;
};

export default function NavDrawer({ objectItems }) {
	const { pathname } = useLocation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.up('md'));
	const keys = Object.keys(objectItems);
	const navigate = useNavigate();
	const lengthObjectItems = Object.keys(objectItems).length;
	const [mark, setMark] = useState([]);

	useEffect(() => {
		setMark(
			fillFalseOneTrue(lengthObjectItems, findItem(pathname, objectItems, keys))
		);
	}, [pathname]);

	return (
		<Drawer variant='permanent' open={isMobile} style={{ zIndex: '0' }}>
			<NavBarHeader />
			<List>
				{keys.map((element, index) => (
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
								navigate(objectItems[element].url);
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
								<Tooltip title={element}>{objectItems[element].icon}</Tooltip>
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
