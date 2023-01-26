import { validatePassword } from '../utils/Validate';

describe('validatePassword', () => {
	const object = 'Hola1234';
	test('validate a correct password, object => true', () => {
		expect(validatePassword(object)).toStrictEqual(true);
	});
});

describe('validatePassword', () => {
	const object = 'Pepito1234';
	test('validate a correct password, object => true', () => {
		expect(validatePassword(object)).toStrictEqual(true);
	});
});

describe('validatePassword', () => {
	const object = 'pepito1234';
	test('validate a correct password, object => false', () => {
		expect(validatePassword(object)).toStrictEqual(false);
	});
});

describe('validatePassword', () => {
	const object = 'Holasoypepito';
	test('validate a correct password, object => false', () => {
		expect(validatePassword(object)).toStrictEqual(false);
	});
});

describe('validatePassword', () => {
	const object = 'PEPITO1234';
	test('validate a correct password, object => false', () => {
		expect(validatePassword(object)).toStrictEqual(false);
	});
});
