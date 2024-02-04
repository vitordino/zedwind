import { readdirSync, readFileSync } from 'node:fs'

export type ThemeStyleProperty = string | number | null
export interface ThemeStyle {
	[key: string]: ThemeStyleProperty | ThemeStyle
}

export type ThemeEntryStyle = Record<string, string | Record<string, string>>

export type ThemeEntry = {
	appearance: string
	name: string
	style: ThemeEntryStyle
}

export type ThemeFile = {
	name: string
	author: string
	themes: ThemeEntry[]
}

export const SEPARATOR = '--'

export type GetThemeStyleColors = (
	themeStyle: ThemeEntryStyle,
	prefix?: string,
) => Record<string, string>

export const getThemeStyleColorVariables: GetThemeStyleColors = (
	themeStyle,
	prefix = '--zw-',
) =>
	Object.entries(themeStyle).reduce<Record<string, string>>((acc, [k, v]) => {
		const key = [prefix, k]
			.join(SEPARATOR)
			.replaceAll('.', SEPARATOR)
			.replaceAll('_', '-')
		if (typeof v === 'string' && v.startsWith('#')) return { ...acc, [key]: v }
		if (v && typeof v === 'object')
			return { ...acc, ...getThemeStyleColorVariables(v, key) }
		return acc
	}, {})

export const getColorKeys = (themes: ThemeEntry[]) => [
	...new Set(
		themes.flatMap((theme) =>
			Object.keys(getThemeStyleColorVariables(theme.style)),
		),
	),
]

// unfortunately tailwind doesn’t support a promise return for it’s plugins
// so we need to use sync fs calls, wake me up when this feature gets released:
// https://github.com/tailwindlabs/tailwindcss/issues/11655
export const readTheme = (name: string) =>
	readFileSync(`./src/themes/${name}/${name}.json`, {
		encoding: 'utf8',
	})

// same as above: need to use sync fs calls
export const getZedThemes = (): ThemeEntry[] =>
	readdirSync('./src/themes', { withFileTypes: true })
		.filter((x) => x.isDirectory())
		.flatMap(({ name }) => JSON.parse(readTheme(name)).themes)

export const mapToBaseEntries = (themes: ThemeEntry[]) =>
	themes.map(
		({ name, style }) =>
			[
				`html[data-theme="${name}"]`,
				getThemeStyleColorVariables(style),
			] as const,
	)
