import {lineParser, Value} from '../../src';

describe('Line Parser Function', () => {
	test('it should parse a line with element only', () => {
		expect(lineParser('element')).toEqual({
			element: 'element',
			value: undefined,
		});
	});

	test('it should parse a line with element and value of boolean True', () => {
		expect(lineParser(`element (True)`)).toEqual({
			element: 'element',
			value: true,
		});
	});

	test('it should parse a line with element and value of boolean False', () => {
		expect(lineParser(`element (False)`)).toEqual({
			element: 'element',
			value: false,
		});
	});

	test('it should parse a line with element and value of string number', () => {
		const value = 123;

		expect(lineParser(`element (${value})`)).toEqual({
			element: 'element',
			value: value,
		});
	});

	test('it should parse a line with element and value of string', () => {
		const value = 'value';

		expect(lineParser(`element ("${value}")`)).toEqual({
			element: 'element',
			value: value,
		});
	});

	test('it should parse a line with element and value of character', () => {
		const character = 'c';

		expect(lineParser(`element ('${character}')`)).toEqual({
			element: 'element',
			value: character,
		});
	});

	test('it should parse a line with element and value of empty array', () => {
		const array: Value[] = [];

		expect(lineParser(`element ([${array.join(',')}])`)).toEqual({
			element: 'element',
			value: array,
		});
	});

	test('it should parse a line with element and value of array', () => {
		const array: Value[] = [123, true, 'value'];

		expect(lineParser(`element ([123, True, "value"])`)).toEqual({
			element: 'element',
			value: array,
		});
	});

	test('it should parse a line with element and value of multi array', () => {
		const array: Value[] = [123, true, 'value', [123, true, 'value']];

		expect(
			lineParser(`element ([123, True, "value", [123, True, "value"]])`)
		).toEqual({
			element: 'element',
			value: array,
		});
	});

	test('it should parse a line with element and attribute of boolean True', () => {
		expect(lineParser(`element key(True)`)).toEqual({
			element: 'element',
			value: undefined,
			key: true,
		});
	});

	test('it should parse a line with element and attribute of boolean False', () => {
		expect(lineParser(`element key(False)`)).toEqual({
			element: 'element',
			value: undefined,
			key: false,
		});
	});

	test('it should parse a line with element and attribute of string number', () => {
		const value = 123;

		expect(lineParser(`element key(${value})`)).toEqual({
			element: 'element',
			value: undefined,
			key: value,
		});
	});

	test('it should parse a line with element and attribute of string', () => {
		const value = 'value';

		expect(lineParser(`element key("${value}")`)).toEqual({
			element: 'element',
			value: undefined,
			key: value,
		});
	});

	test('it should parse a line with element and attribute of character', () => {
		const character = 'c';

		expect(lineParser(`element key('${character}')`)).toEqual({
			element: 'element',
			value: undefined,
			key: character,
		});
	});

	test('it should parse a line with element and attribute of empty array', () => {
		const array: Value[] = [];

		expect(lineParser(`element key([])`)).toEqual({
			element: 'element',
			value: undefined,
			key: array,
		});
	});

	test('it should parse a line with element and attribute of array', () => {
		const array: Value[] = [123, true, 'value'];

		expect(lineParser(`element key([123, True, "value"])`)).toEqual({
			element: 'element',
			value: undefined,
			key: array,
		});
	});

	test('it should parse a line with element and attribute of multi array', () => {
		const array: Value[] = [123, true, 'value', [123, true, 'value']];

		expect(
			lineParser(`element key([123, True, "value", [123, True, "value"]])`)
		).toEqual({
			element: 'element',
			value: undefined,
			key: array,
		});
	});
});
