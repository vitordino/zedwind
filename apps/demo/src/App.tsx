import { useEffect, useState } from 'react'
import { THEMES } from 'zedwind/constants'
import { colors } from './constants'

const setDocumentTheme = (theme: string) =>
	document.documentElement.setAttribute('data-theme', theme)

const App = () => {
	const [theme, setTheme] = useState<string>(THEMES[0])
	useEffect(() => setDocumentTheme(theme), [theme])
	return (
		<main>
			<select value={theme} onChange={(x) => setTheme(x.target.value)}>
				{THEMES.map((theme) => (
					<option value={theme}>{theme}</option>
				))}
			</select>
			<div className='flex flex-wrap'>
				{colors.map((x) => (
					<div className={'min-w-8 min-h-8 ' + `bg-${x}`} />
				))}
			</div>
		</main>
	)
}

export default App
