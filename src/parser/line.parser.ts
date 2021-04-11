import {attributeParser} from './attribute.parser';
import {splitSpaces} from '../utils';
import {Element} from '../types';

export const lineParser = (line: string): Element => {
	const result: Element = {
		element: '',
		value: undefined,
	};

	const indexOfSpace = line.indexOf(' ');
	const element = line.substring(
		0,
		indexOfSpace === -1 ? undefined : indexOfSpace
	);
	line = line.substring(indexOfSpace === -1 ? line.length : indexOfSpace);
	result.element = element;

	splitSpaces(
		line
			.replace(/([([])\s+|\s+([)\]])|([([])\s+([)\]])/g, '$1$2')
			.replace(/,\s+"/g, ',"')
	).map(attributeParser.bind(this, result));

	return result;
};
