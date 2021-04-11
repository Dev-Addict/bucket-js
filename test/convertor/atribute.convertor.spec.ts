import {Boolean, attributeConvertor, Value} from '../../src';

describe('Attribute Convertor Function', () => {
	test('it should add attribute to result with undefined value', () => {
		const prevResult = '';
		const key = 'key';
		const value = undefined;
		const result = `${prevResult} ${key}()`;

		expect(attributeConvertor(prevResult, key, value)).toEqual(result);
	});

	test('it should add attribute to result with number value', () => {
		const prevResult = '';
		const key = 'key';
		const value = 123;
		const result = `${prevResult} ${key}(${value})`;

		expect(attributeConvertor(prevResult, key, value)).toEqual(result);
	});

	test('it should add attribute to result with string value', () => {
		const prevResult = '';
		const key = 'key';
		const value = 'value';
		const result = `${prevResult} ${key}("${value}")`;

		expect(attributeConvertor(prevResult, key, value)).toEqual(result);
	});

	test('it should add attribute to result with boolean true value', () => {
		const prevResult = '';
		const key = 'key';
		const value = true;
		const result = `${prevResult} ${key}(${Boolean.TRUE})`;

		expect(attributeConvertor(prevResult, key, value)).toEqual(result);
	});

	test('it should add attribute to result with boolean false value', () => {
		const prevResult = '';
		const key = 'key';
		const value = false;
		const result = `${prevResult} ${key}(${Boolean.FALSE})`;

		expect(attributeConvertor(prevResult, key, value)).toEqual(result);
	});

	test('it should add attribute to result with boolean array value', () => {
		const prevResult = '';
		const key = 'key';
		const value: Value[] = [123, 'string', false, [123, 'string', false]];
		const stringifyValue = '[123, "string", False, [123, "string", False]]';
		const result = `${prevResult} ${key}(${stringifyValue})`;

		expect(attributeConvertor(prevResult, key, value)).toEqual(result);
	});
});
