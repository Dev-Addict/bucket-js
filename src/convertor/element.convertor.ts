import {Element} from '../types';
import {attributeConvertor} from './attribute.convertor';
import {valueConvertor} from './value.convertor';

export const elementConvertor = ({element, value, ...attributes}: Element) => {
	let result = `${element}`;

	Object.entries(attributes).forEach(
		([key, value]) => value && (result = attributeConvertor(result, key, value))
	);

	if (value) result = `${result} (${valueConvertor(value)})`;

	return result;
};
