export const splitSpaces = (string: string): string[] => {
	const result: string[] = [];
	let bracketLevel = 0;
	let current = '';

	for (const char of string) {
		if (char === '(') bracketLevel += 1;
		else if (char === ')') bracketLevel -= 1;
		if (char === ' ' && !bracketLevel) {
			result.push(current);
			current = '';
		} else current += char;
	}
	if (current) result.push(current);

	return result;
};
