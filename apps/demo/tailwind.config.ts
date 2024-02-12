import type { Config } from 'tailwindcss'
import zedwindPlugin, { ALL_THEMES } from 'zedwind'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	plugins: [zedwindPlugin({ themes: ALL_THEMES })],
	// not needed, just for demo purposes
	safelist: [{ pattern: /bg/ }],
}

export default config
