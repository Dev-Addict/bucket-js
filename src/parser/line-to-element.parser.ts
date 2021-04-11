import {Element} from '../types';
import {attributeParser} from './attribute.parser';

export const lineToElementParser = (line: string): Element => {
	const result: Element = {
		element: '',
		value: undefined,
	};

	const indexOfSpace = line.indexOf(' ');
	const element = line.substring(0, indexOfSpace);
	line = line.substring(indexOfSpace);
	result.element = element;

	line
		.replace(/([([])\s+|\s+([)\]])|([([])\s+([)\]])/g, '$1$2')
		.replace(/,\s+"/g, ',"')
		.split(/[ ](?=[^)]*?(?:\(|$))/)
		.map(attributeParser.bind(this, result));

	return result;
};
