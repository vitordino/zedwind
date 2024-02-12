export type ThemeStyleProperty = string | number | null | {}
export interface ThemeStyle {
	[key: string]: ThemeStyleProperty | ThemeStyle
}

export type ThemeEntryStyle = Record<string, string | number | null | {}>

export type ThemeEntry = {
	appearance: string
	name: string
	style: ThemeStyle
}

export type ThemeFile = {
	name: string
	author: string
	themes: ThemeEntry[]
}
