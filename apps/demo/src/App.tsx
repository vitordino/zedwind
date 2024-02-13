import { useEffect, useState } from 'react'
import * as Ariakit from '@ariakit/react'
import { ALL_THEMES } from 'zedwind/constants'
import { colors } from './constants'

const isValidTheme = (t: string): t is (typeof ALL_THEMES)[number] =>
	ALL_THEMES.includes(t as (typeof ALL_THEMES)[number])

const setDocumentTheme = (theme: string) => {
	if (!isValidTheme(theme)) return
	document.documentElement.setAttribute('data-theme', theme)
}

const App = () => {
	const [theme, setTheme] = useState<string>(ALL_THEMES[0])

	useEffect(() => setDocumentTheme(theme), [theme])
	return (
		<main>
			{/* <div className='fixed top-0 left-0 right-0 bottom-0 opacity-50 pointer-events-none' /> */}
			<Ariakit.ComboboxProvider open value={theme} setValue={setTheme}>
				<Ariakit.Combobox
					placeholder='e.g., Apple'
					autoFocus
					className='fixed left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 border border-border appearance-none outline-none'
					onBlur={async (x) => {
						requestIdleCallback(() => x.target.focus())
					}}
				/>
				<Ariakit.ComboboxPopover
					gutter={4}
					sameWidth
					className='max-h-[50vh] overflow-auto'
				>
					{ALL_THEMES.map((theme) => (
						<Ariakit.ComboboxItem
							className='bg-element-background text-text data-[active-item]:bg-element-selected'
							value={theme}
						>
							{theme}
						</Ariakit.ComboboxItem>
					))}
				</Ariakit.ComboboxPopover>
			</Ariakit.ComboboxProvider>

			{/* </Ariakit.Dialog> */}
			<div className='flex flex-wrap'>
				{colors.map((x) => (
					<div className={'min-w-8 min-h-8 ' + `bg-${x}`} />
				))}
			</div>
		</main>
	)
}

export default App
