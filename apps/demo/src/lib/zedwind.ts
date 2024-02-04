export type ThemeStyleProperty = string | number | null
export interface ThemeStyle {
	[key: string]: ThemeStyleProperty | ThemeStyle
}

export type Theme = {
	appearance: string
	name: string
	style: Record<string, string | Record<string, string>>
}

export type ThemeFile = {
	name: string
	author: string
	themes: Theme[]
}

export const SEPARATOR = '--'

export type GetThemeStyleColors = (
	themeStyle: Theme['style'],
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

export const getColorKeys = (themes: Theme[]) => [
	...new Set(
		themes.flatMap((theme) =>
			Object.keys(getThemeStyleColorVariables(theme.style)),
		),
	),
]
