export type Value = string | number | boolean | undefined | Element | Value[];

export interface Element {
	element: string;
	value: Value;

	[key: string]: Value;
}
