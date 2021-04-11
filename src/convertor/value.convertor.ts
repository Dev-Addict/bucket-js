import {Boolean, Value} from '../types';

export const valueConvertor = (value: Value): string => {
	if (value === undefined) return '';
	if (typeof value === 'number') return `${value}`;
	if (typeof value === 'string') return `"${value}"`;
	if (typeof value === 'boolean')
		return `${value ? Boolean.TRUE : Boolean.FALSE}`;
	return `[${value.map((value) => valueConvertor(value)).join(', ')}]`;
};
