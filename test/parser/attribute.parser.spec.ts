import {attributeParser, Element, Value} from '../../src';

describe('Attribute Parser Function', () => {
	let element: Element;

	beforeEach(() => {
		element = {
			element: 'element',
			value: undefined,
		};
	});

	test('it should add a boolean True attribute to element.', () => {
		attributeParser(element, 'key(True)');

		expect(element.key).toEqual(true);
	});

	test('it should add a boolean False attribute to element.', () => {
		attributeParser(element, 'key(False)');

		expect(element.key).toEqual(false);
	});

	test('it should add a string number attribute to element.', () => {
		const number = 123;
		attributeParser(element, `key(${number})`);

		expect(element.key).toEqual(number);
	});

	test('it should add a string attribute to element.', () => {
		const valueString = 'value';
		attributeParser(element, `key("${valueString}")`);

		expect(element.key).toEqual(valueString);
	});

	test('it should add a character attribute to element.', () => {
		const characterString = 'v';
		attributeParser(element, `key('${characterString}')`);

		expect(element.key).toEqual(characterString);
	});

	test('it should add a empty array attribute to element', () => {
		const valueArray: Value = [];
		attributeParser(element, 'key([])');

		expect(element.key).toEqual(valueArray);
	});

	test('it should add a array attribute to element', () => {
		const valueArray: Value = [123, 'value', true];
		attributeParser(element, 'key([123, "value", True])');

		expect(element.key).toEqual(valueArray);
	});

	test('it should add a multi array attribute to element', () => {
		const valueArray: Value = [123, 'value', true, [123, 'value', true]];
		attributeParser(element, 'key([123, "value", True, [123, "value", True]])');

		expect(element.key).toEqual(valueArray);
	});

	test('it should add a element attribute to element', () => {
		const valueElement: Value = {
			element: 'element',
			value: 'value',
		};
		attributeParser(element, 'key(element ("value"))');

		expect(element.key).toEqual(valueElement);
	});
});
