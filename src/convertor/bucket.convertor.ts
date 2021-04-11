import {Element} from '../types';
import {elementConvertor} from './element.convertor';

export const bucketConvertor = (elements: Element[]) => {
	return elements.map((element) => elementConvertor(element)).join('\n');
};
