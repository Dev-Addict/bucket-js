import {lineParser} from './line.parser';
import {Boolean, Value} from '../types';

export const valueParser = (value: string): Value => {
	if (value === Boolean.TRUE) return true;
	else if (value === Boolean.FALSE) return false;
	else if (+value) return +value;
	else if (value.startsWith('"') || value.startsWith("'"))
		return value.replace(/^["']|["']$/g, '');
	else if (value.startsWith('['))
		return value
			.replace(/^\[|]$/g, '')
			.split(/[,](?=[^\]]*?(?:\[|$))/)
			.map((item) => !!item && valueParser(item.trim()))
			.filter((item) => item);
	else if (value.length) return lineParser(value);
	return undefined;
};
