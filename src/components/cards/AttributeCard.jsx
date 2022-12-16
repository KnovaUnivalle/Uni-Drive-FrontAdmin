import {
	Button,
	Card,
	CardContent,
	Switch,
	TextField,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

export default function AttributeCard({ attribute }) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [edit, setEdit] = useState(true);
	const [change, setChange] = useState({
		active: true,
		name: true,
	});
	const [data, setData] = useState(attribute);

	const handleChangeSwitch = e => {
		const { checked } = e.target;
		setData({
			...data,
			active: checked,
		});
		if (checked === attribute.active) {
			setChange({ ...change, active: true });
		} else {
			setChange({ ...change, active: false });
		}
	};

	const handleChangeText = e => {
		const { value } = e.target;
		setData({
			...data,
			name: value,
		});
		if (value === attribute.name) {
			setChange({ ...change, name: true });
		} else {
			setChange({ ...change, name: false });
		}
	};

	const handleEditButton = e => {
		setEdit(!edit);
		setData(attribute);
	};

	const handleSubmitButton = e => {
		console.log('send');
		setEdit(true);
		setChange({
			active: true,
			name: true,
		});
	};

	return (
		<Card
			sx={{
				margin: '0.8rem',
				minWidth: '15rem',
				flex: isMobile ? '1 1 auto' : '0 1 30%',
			}}
		>
			<CardContent>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Typography>ID: {attribute.id}</Typography>
				</div>
				<form
					onSubmit={handleSubmitButton}
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label={'Nombre'}
						name={'name'}
						value={data.name}
						onChange={handleChangeText}
						style={{
							width: isMobile ? '65%' : '70%',
						}}
						disabled={edit}
					/>
					<div style={{ display: 'block' }}>
						<Switch
							checked={data.active}
							onChange={handleChangeSwitch}
							name={'active'}
							disabled={edit}
						/>
						<Typography align='center'>
							{data.active ? 'Activo' : 'Inactivo'}
						</Typography>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							marginTop: '0.5rem',
						}}
					>
						<Button
							variant='contained'
							size='small'
							color={edit ? 'primary' : 'error'}
							onClick={handleEditButton}
						>
							{edit ? 'Editar' : 'Cancelar'}
						</Button>
						<Button
							variant='contained'
							onClick={handleSubmitButton}
							color='success'
							size='small'
							disabled={change.name && change.active}
						>
							Guardar
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
