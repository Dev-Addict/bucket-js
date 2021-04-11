import {elementConvertor} from '../../src';

describe('Element Convertor Function', () => {
	test('it should return valid element from element data with only element name', () => {
		const element = 'element';

		expect(
			elementConvertor({
				element: 'element',
				value: undefined,
			})
		).toEqual(element);
	});

	test('it should return valid element from element data with element name and value', () => {
		const element = 'element ("value")';

		expect(
			elementConvertor({
				element: 'element',
				value: 'value',
			})
		).toEqual(element);
	});

	test('it should return valid element from element data with element name and attribute', () => {
		const element = 'element key("value")';

		expect(
			elementConvertor({
				element: 'element',
				value: undefined,
				key: 'value',
			})
		).toEqual(element);
	});

	test('it should return valid element from element data with element name and attribute and value', () => {
		const element = 'element key("value") ("value")';

		expect(
			elementConvertor({
				element: 'element',
				value: 'value',
				key: 'value',
			})
		).toEqual(element);
	});
});
