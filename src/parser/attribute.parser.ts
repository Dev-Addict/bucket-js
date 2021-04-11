import {Element} from '../types';
import {valueParser} from './value.parser';

export const attributeParser = (element: Element, attribute: string) => {
	attribute = attribute.trim();

	if (!attribute) return;

	if (attribute.startsWith('('))
		element.value = valueParser(attribute.substring(1, attribute.length - 1));
	else {
		const value = /\(.*?\)$/.exec(attribute)![0];

		element[attribute.substring(0, attribute.indexOf('('))] = valueParser(
			value.substring(1, value.length - 1)
		);
	}
};
