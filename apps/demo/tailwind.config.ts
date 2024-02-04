import type { Config } from 'tailwindcss'
import zedwindPlugin, { THEMES } from 'zedwind'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	plugins: [zedwindPlugin({ themes: THEMES })],
}

export default config
