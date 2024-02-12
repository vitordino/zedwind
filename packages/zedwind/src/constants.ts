import type { ThemeFile } from './types'

import andromeda from './themes/andromeda/andromeda.json'
import atelier from './themes/atelier/atelier.json'
import ayu from './themes/ayu/ayu.json'
import gruvbox from './themes/gruvbox/gruvbox.json'
import one from './themes/one/one.json'
import rose_pine from './themes/rose_pine/rose_pine.json'
import sandcastle from './themes/sandcastle/sandcastle.json'
import solarized from './themes/solarized/solarized.json'
import summercamp from './themes/summercamp/summercamp.json'

export const THEME_MAP: Record<string, ThemeFile> = {
	andromeda,
	atelier,
	ayu,
	gruvbox,
	one,
	rose_pine,
	sandcastle,
	solarized,
	summercamp,
} as const

export const ALL_THEMES = [
	'Atelier Cave Dark',
	'Atelier Cave Light',
	'Atelier Dune Dark',
	'Atelier Dune Light',
	'Atelier Estuary Dark',
	'Atelier Estuary Light',
	'Atelier Forest Dark',
	'Atelier Forest Light',
	'Atelier Heath Dark',
	'Atelier Heath Light',
	'Atelier Lakeside Dark',
	'Atelier Lakeside Light',
	'Atelier Plateau Dark',
	'Atelier Plateau Light',
	'Atelier Savanna Dark',
	'Atelier Savanna Light',
	'Atelier Seaside Dark',
	'Atelier Seaside Light',
	'Atelier Sulphurpool Dark',
	'Atelier Sulphurpool Light',
	'Summercamp',
	'Andromeda',
	'Sandcastle',
	'Solarized Dark',
	'Solarized Light',
	'Rosé Pine',
	'Rosé Pine Dawn',
	'Rosé Pine Moon',
	'One Dark',
	'One Light',
	'Ayu Dark',
	'Ayu Light',
	'Ayu Mirage',
	'Gruvbox Dark',
	'Gruvbox Dark Hard',
	'Gruvbox Dark Soft',
	'Gruvbox Light',
	'Gruvbox Light Hard',
	'Gruvbox Light Soft',
] as const

export type Theme = (typeof ALL_THEMES)[number]
