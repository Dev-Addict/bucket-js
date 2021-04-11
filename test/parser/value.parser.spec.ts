import {Boolean, Value, valueParser} from '../../src';

describe('Value Parser Function', () => {
	test('it should parse a boolean True value.', () => {
		expect(valueParser(Boolean.TRUE)).toEqual(true);
	});

	test('it should parse a boolean False value.', () => {
		expect(valueParser(Boolean.FALSE)).toEqual(false);
	});

	test('it should parse a string number value.', () => {
		const number = 123;

		expect(valueParser(number.toString())).toEqual(number);
	});

	test('it should parse a string value.', () => {
		const valueString = 'value';
		const value = `"${valueString}"`;

		expect(valueParser(value)).toEqual(valueString);
	});

	test('it should parse a character value.', () => {
		const characterString = 'v';
		const value = `'${characterString}'`;

		expect(valueParser(value)).toEqual(characterString);
	});

	test('it should parse a empty array value', () => {
		const valueArray: Value = [];
		const value = '[]';

		expect(valueParser(value)).toEqual(valueArray);
	});

	test('it should parse a array value', () => {
		const valueArray: Value = [123, 'value', true];
		const value = '[123, "value", True]';

		expect(valueParser(value)).toEqual(valueArray);
	});

	test('it should parse a multi array value', () => {
		const valueArray: Value = [123, 'value', true, [123, 'value', true]];
		const value = '[123, "value", True, [123, "value", True]]';

		expect(valueParser(value)).toEqual(valueArray);
	});

	test('it should parse a element value', () => {
		const element: Value = {
			element: 'element',
			value: 'value',
		};
		const value = 'element ("value")';

		expect(valueParser(value)).toEqual(element);
	});
});
