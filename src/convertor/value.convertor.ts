import {Boolean, Value} from '../types';
import {elementConvertor} from './element.convertor';

export const valueConvertor = (value: Value): string => {
	if (value === undefined) return '';
	if (typeof value === 'number') return `${value}`;
	if (typeof value === 'string') return `"${value}"`;
	if (typeof value === 'boolean')
		return `${value ? Boolean.TRUE : Boolean.FALSE}`;
	if (value instanceof Array)
		return `[${value.map((value) => valueConvertor(value)).join(', ')}]`;
	return elementConvertor(value);
};
