import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Fab,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Tooltip,
} from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const kinds = { id: 'ID', description: 'Descripción' };

export default function SearchAttributeDialog({ route }) {
	const [openDialog, setOpenDialog] = useState(false);
	const [kind, setKind] = useState('id');
	const [search, setSearch] = useState('');

	const handleClickOpenDialog = () => {
		setOpenDialog(true);
	};

	const handleChangeText = e => {
		const { value } = e.target;
		const capitalize = value.charAt(0).toUpperCase() + value.slice(1);
		setSearch(capitalize);
	};

	const handleChangeSelect = e => {
		const { value } = e.target;
		setSearch('');
		setKind(value);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	const handleSubmit = async e => {};

	return (
		<>
			<Tooltip title='Buscar'>
				<Fab
					onClick={handleClickOpenDialog}
					sx={{ position: 'fixed', bottom: 88, right: 16 }}
				>
					<SearchIcon />
				</Fab>
			</Tooltip>
			<Dialog open={openDialog} onClose={handleCloseDialog}>
				<DialogTitle>Buscar Elemento</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Para buscar un elemento proporcione una descripción ó su id.
					</DialogContentText>
					<form onSubmit={handleSubmit}>
						<div
							style={{
								display: 'flex',
							}}
						>
							<TextField
								autoFocus
								margin='dense'
								name={kind}
								label={kinds[kind]}
								variant='standard'
								fullWidth
								value={search}
								type={kind === 'id' ? 'number' : 'search'}
								onChange={handleChangeText}
							/>
							<FormControl
								sx={{ m: 1.35, minWidth: 110 }}
								size='small'
								variant='standard'
							>
								<InputLabel id='topicLabel'>Buscar por</InputLabel>
								<Select
									value={kind}
									autoWidth
									onChange={handleChangeSelect}
									labelId='topicLabel'
								>
									{Object.keys(kinds).map(elem => (
										<MenuItem key={elem} value={elem}>
											{kinds[elem]}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
						<DialogActions style={{ paddingBottom: '0' }}>
							<Button color='error' onClick={handleCloseDialog}>
								Cancelar
							</Button>
							<Button type='submit'>Buscar</Button>
						</DialogActions>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
}
