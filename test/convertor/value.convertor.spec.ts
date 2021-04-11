import {Boolean, Value, valueConvertor} from '../../src';

describe('Value Convertor Function', () => {
	test('it should return empty string for undefined input', () => {
		expect(valueConvertor(undefined)).toEqual('');
	});

	test('it should return string number for number input', () => {
		const number1 = 1;
		const number2 = 123;

		expect(valueConvertor(number1)).toEqual(number1.toString());
		expect(valueConvertor(number2)).toEqual(number2.toString());
	});

	test('it should return string with double quotes for string input', () => {
		const string1 = '';
		const string2 = 's';
		const string3 = 'string';

		expect(valueConvertor(string1)).toEqual(`"${string1}"`);
		expect(valueConvertor(string2)).toEqual(`"${string2}"`);
		expect(valueConvertor(string3)).toEqual(`"${string3}"`);
	});

	test('it should return False for boolean false input', () => {
		expect(valueConvertor(false)).toEqual(Boolean.FALSE);
	});

	test('it should return True for boolean true input', () => {
		expect(valueConvertor(true)).toEqual(Boolean.TRUE);
	});

	test('it should return stringify array for array input', () => {
		const array1: Value[] = [];
		const array2: Value[] = [123, 'string', false];
		const array3: Value[] = [123, 'string', false, [123, 'string', false]];

		const array1Result = '[]';
		const array2Result = '[123, "string", False]';
		const array3Result = '[123, "string", False, [123, "string", False]]';

		expect(valueConvertor(array1)).toEqual(array1Result);
		expect(valueConvertor(array2)).toEqual(array2Result);
		expect(valueConvertor(array3)).toEqual(array3Result);
	});
});
