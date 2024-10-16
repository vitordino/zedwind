import { useEffect, useState } from 'react'
import * as Ariakit from '@ariakit/react/combobox'
import { ALL_THEMES, Theme } from 'zedwind/constants'

const isValidTheme = (t: string): t is Theme => ALL_THEMES.includes(t as Theme)

const setDocumentTheme = (theme: Theme) =>
	document.documentElement.setAttribute('data-theme', theme)

export const ThemeSelector = () => {
	const [theme, setTheme] = useState<Theme>('Ayu Dark')
	const setValue = (value: string) => isValidTheme(value) && setTheme(value)
	useEffect(() => setDocumentTheme(theme), [theme])
	return (
		<div className='p-2 absolute left-0 right-0 top-0 bottom-0'>
			<Ariakit.ComboboxProvider open setValue={setValue}>
				<Ariakit.Combobox
					autoFocus
					className='relative left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 border border-border appearance-none outline-none bg-background text-text rounded-t-md py-1 px-4 w-full max-w-96'
					onBlur={async (x) => {
						requestIdleCallback(() => x.target.focus())
					}}
				/>
				<Ariakit.ComboboxPopover
					sameWidth
					open
					alwaysVisible
					className='max-h-[50vh] overflow-auto scroll-p-2 border border-border border-t-0 p-2 bg-background rounded-b-md'
				>
					{ALL_THEMES.map((theme) => (
						<Ariakit.ComboboxItem
							className='text-text data-[active-item]:bg-element-selected rounded-sm px-2'
							value={theme}
						>
							{theme}
						</Ariakit.ComboboxItem>
					))}
				</Ariakit.ComboboxPopover>
			</Ariakit.ComboboxProvider>
		</div>
	)
}
