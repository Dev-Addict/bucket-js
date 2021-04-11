import {lineParser} from './line.parser';

export const bucketParser = (bucket: string) => {
	const lines: string[][] = [];

	for (const line of bucket.split('\n').filter((value) => value.trim()))
		if (line.startsWith(' ') || line.startsWith('\t'))
			lines[lines.length - 1].push(line);
		else lines.push([line]);

	return lines
		.map((lines) => lines.map((line) => line.trim()).join(' '))
		.map((element) => lineParser(element));
};
