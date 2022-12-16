import { Box } from '@mui/material';
import AttributeCard from '../../components/cards/AttributeCard';

export default function Color() {
	const example = [
		{ id: 1, name: 'red', active: false },
		{ id: 2, name: 'red', active: true },
		{ id: 3, name: 'red', active: false },
	];
	return (
		<>
			<Box style={{ display: 'flex', flexWrap: 'wrap', margin: '0.5rem' }}>
				{example.map(exam => (
					<AttributeCard attribute={exam} key={exam.id} />
				))}
			</Box>
		</>
	);
}
