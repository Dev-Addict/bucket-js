import {bucketParser} from '../../src';

describe('Bucket Parser Function', () => {
	test('it should parse a line', () => {
		expect(bucketParser('element key("value") ("value")')).toEqual([
			{
				element: 'element',
				value: 'value',
				key: 'value',
			},
		]);
	});

	test('it should parse multi line', () => {
		expect(
			bucketParser(`
element key("value") ("value")

element key("value") ("value")
		`)
		).toEqual([
			{
				element: 'element',
				value: 'value',
				key: 'value',
			},
			{
				element: 'element',
				value: 'value',
				key: 'value',
			},
		]);
	});

	test('it should parse indent format line', () => {
		expect(
			bucketParser(`
element 
	key("value") 
	("value")
		`)
		).toEqual([
			{
				element: 'element',
				value: 'value',
				key: 'value',
			},
		]);
	});

	test('it should parse indent format multi line', () => {
		expect(
			bucketParser(`
element 
	key("value") 
	("value")

element 
	key("value") 
	("value")
		`)
		).toEqual([
			{
				element: 'element',
				value: 'value',
				key: 'value',
			},
			{
				element: 'element',
				value: 'value',
				key: 'value',
			},
		]);
	});

	test('it should parse with element value', () => {
		expect(
			bucketParser(`
element 
	key("value") 
	(element ("value"))
		`)
		).toEqual([
			{
				element: 'element',
				value: {
					element: 'element',
					value: 'value',
				},
				key: 'value',
			},
		]);
	});
});
