import { useEffect, useState } from 'react'
import * as Ariakit from '@ariakit/react'
import { ALL_THEMES } from 'zedwind/constants'
import { colors } from './constants'

const setDocumentTheme = (theme: string) =>
	document.documentElement.setAttribute('data-theme', theme)

const App = () => {
	const [theme, setTheme] = useState<string>(ALL_THEMES[0])
	useEffect(() => setDocumentTheme(theme), [theme])
	return (
		<main>
			<Ariakit.ComboboxProvider value={theme} setValue={setTheme}>
				<Ariakit.Combobox placeholder='e.g., Apple' />
				<Ariakit.ComboboxPopover gutter={4} sameWidth className='popover'>
					{ALL_THEMES.map((theme) => (
						<Ariakit.ComboboxItem className='combobox-item' value={theme}>
							{theme}
						</Ariakit.ComboboxItem>
					))}
				</Ariakit.ComboboxPopover>
			</Ariakit.ComboboxProvider>
			<div className='flex flex-wrap'>
				{colors.map((x) => (
					<div className={'min-w-8 min-h-8 ' + `bg-${x}`} />
				))}
			</div>
		</main>
	)
}

export default App
