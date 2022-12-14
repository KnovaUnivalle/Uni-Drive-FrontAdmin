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
	const [data, setChecked] = useState({
		active: attribute.active,
		name: attribute.name,
	});

	const handleChangeSwitch = e => {
		setChecked({
			...data,
			active: e.target.checked,
		});
		console.log(data);
	};

	const handleChangeText = e => {
		setChecked({
			...data,
			name: e.target.value,
		});
	};

	return (
		<Card
			sx={{
				margin: '0.8rem',
				minWidth: '30rem',
				flex: isMobile ? '1 1 auto' : '0 1 32.96%',
			}}
		>
			<CardContent>
				<form
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Typography mt={2}>ID: {attribute.id}</Typography>
					<TextField
						label={'Nombre'}
						name={'name'}
						value={data.name}
						onChange={handleChangeText}
					/>
					<div style={{ display: 'block' }}>
						<Switch
							checked={data.active}
							onChange={handleChangeSwitch}
							name={'active'}
						/>
						<Typography align='center'>
							{data.active ? 'Activo' : 'Inactivo'}
						</Typography>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<Button variant='contained' size='small'>
							editar
						</Button>
						<Button
							variant='contained'
							type='submit'
							size='small'
							style={{ marginTop: '0.5rem' }}
						>
							Guardar
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
