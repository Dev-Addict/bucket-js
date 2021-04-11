import {bucketConvertor} from '../../src';

describe('Bucket Convertor Function', () => {
	test('it should return right bucket format from value', () => {
		const bucket =
			'element key("value") ("value")\nelement ("value")\nelement key("value")';

		expect(
			bucketConvertor([
				{
					element: 'element',
					value: 'value',
					key: 'value',
				},
				{
					element: 'element',
					value: 'value',
				},
				{
					element: 'element',
					value: undefined,
					key: 'value',
				},
			])
		).toEqual(bucket);
	});
});
