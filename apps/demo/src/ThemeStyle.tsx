import { ThemeStyleProperty } from './App'

export type ThemeStyle = Record<
	string,
	| ThemeStyleProperty
	| Record<string, ThemeStyleProperty>
	| Record<
			string,
			| Record<string, ThemeStyleProperty>
			| Record<string, Record<string, Record<string, ThemeStyleProperty>>>
	  >
>
