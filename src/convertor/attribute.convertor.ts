import {Value} from '../types';
import {valueConvertor} from './value.convertor';

export const attributeConvertor = (result: string, key: string, value: Value) =>
	`${result} ${key}(${valueConvertor(value)})`;
