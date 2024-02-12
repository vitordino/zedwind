import { THEME_MAP } from './constants'
import { ThemeEntry, ThemeStyle } from './types'

export const SEPARATOR = '--'

export type GetThemeStyleColors = (
	themeStyle: ThemeStyle,
	prefix?: string,
) => Record<string, string>

const isColor = (v: unknown): v is string =>
	!!v && typeof v === 'string' && v.startsWith('#')

const isTheme = (v: unknown): v is ThemeStyle =>
	!!v && typeof v === 'object' && 'name' in v

export const getThemeStyleColorVariables: GetThemeStyleColors = (
	themeStyle,
	prefix = '--zw-',
) =>
	Object.entries(themeStyle).reduce<Record<string, string>>((acc, [k, v]) => {
		if (!v) return acc
		const key = [prefix, k]
			.join(SEPARATOR)
			.replaceAll('.', SEPARATOR)
			.replaceAll('_', '-')

		if (isColor(v)) return { ...acc, [key]: v }
		if (isTheme(v)) return { ...acc, ...getThemeStyleColorVariables(v, key) }
		return acc
	}, {})

export const getColorKeys = (themes: ThemeEntry[]) => [
	...new Set(
		themes.flatMap((theme) =>
			Object.keys(getThemeStyleColorVariables(theme.style)),
		),
	),
]

export const getZedThemes = (): ThemeEntry[] =>
	Object.values(THEME_MAP).reduce<ThemeEntry[]>((acc, curr) => {
		if (!curr.themes.length) return acc
		return [...acc, ...curr.themes]
	}, [])

export const mapToBaseEntries = (themes: ThemeEntry[]) =>
	themes.map(
		({ name, style }) =>
			[
				`html[data-theme="${name}"]`,
				getThemeStyleColorVariables(style),
			] as const,
	)
