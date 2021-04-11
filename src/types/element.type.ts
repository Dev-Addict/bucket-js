export type Value = string | number | boolean | Value[] | undefined;

export interface Element {
	element: string;
	value: Value;

	[key: string]: Value;
}
