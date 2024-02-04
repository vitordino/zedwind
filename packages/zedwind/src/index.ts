import plugin from 'tailwindcss/plugin'
import type { Theme as BaseTheme } from './constants'
import { mapToBaseEntries, getZedThemes } from './lib'
export { THEMES } from './constants'

export type Theme = BaseTheme

const colors = mapToBaseEntries(getZedThemes()).reduce<Record<string, string>>(
	(acc, [_, v]) => {
		Object.keys(v).forEach((key) => {
			const variableKey = key.replace('--zw---', '').replace(/\-\-/g, '-')
			if (acc[variableKey]) return
			acc[variableKey] = `var(${key})`
		})
		return acc
	},
	{},
)

const zedwindPlugin = ({ themes }: { themes: readonly Theme[] }) =>
	plugin(
		({ addBase }) =>
			mapToBaseEntries(
				getZedThemes().filter(({ name }) => themes?.includes(name as Theme)),
			).forEach(([k, v]) => addBase({ [k]: v })),
		{ theme: { colors } },
	)

export default zedwindPlugin
