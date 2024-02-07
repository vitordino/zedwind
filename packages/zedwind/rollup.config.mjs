import ts from 'rollup-plugin-ts'
import pkg from './package.json' assert { type: 'json' }

const isWatchMode = process.env.ROLLUP_WATCH === 'true'

const input = 'src/index.ts'
const constantsInput = 'src/constants.ts'
const plugins = [ts({ browserslist: false })]
const external = ['tailwindcss']
const sourcemap = isWatchMode ? false : true

/** @type {import('rollup').RollupOptions['watch']} */
const watch = { include: ['src/**'], clearScreen: false }

/** @type {import('rollup').RollupOptions} */
const cjs = {
	...{ input, watch, plugins, external },
	output: { file: pkg.main, format: 'cjs', sourcemap, esModule: false },
}

/** @type {import('rollup').RollupOptions} */
const cjsConstants = {
	...{ input: constantsInput, watch, plugins, external },
	output: {
		file: 'dist/constants.cjs',
		format: 'cjs',
		exports: 'named',
		sourcemap,
		esModule: false,
	},
}

/** @type {import('rollup').RollupOptions} */
const esm = {
	...{ input, watch, plugins, external },
	output: { file: pkg.module, format: 'esm', sourcemap, esModule: true },
}

/** @type {import('rollup').RollupOptions} */
const esmConstants = {
	...{ input: constantsInput, watch, plugins, external },
	output: {
		file: 'dist/constants.js',
		format: 'esm',
		exports: 'named',
		sourcemap,
		esModule: true,
	},
}

const config = isWatchMode
	? [esm, esmConstants]
	: [cjs, cjsConstants, esm, esmConstants]

export default config
