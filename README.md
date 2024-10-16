# [<sub><img src="docs/zedwind.png" width="64" height="64" /></sub>](https://zedwind.vitordino.com)&nbsp;<sup><sup><sup>zedwind</sup></sup></sup>

> use [zed](https://zed.dev) themes on [tailwindcss](https://tailwindcss.com/)

### usage

instal the package:

```bash
npm i -D zedwind
```

add `zedwind` as plugin and pass in an array of themes you would like it to bundle.
eg.:
`tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'
import zedwindPlugin from 'zedwind'

const config: Config = {
	// ... rest of configs
	plugins: [zedwindPlugin({ themes: ['Ayu Dark', 'Ayu Light'] })],
}

export default config
```

the `themes` prop is properly typed so you should get proper auto-complete for the theme names

---

if you want all themes, we also export an `ALL_THEMES` array with all the supported themes:
`tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'
import zedwindPlugin, { ALL_THEMES } from 'zedwind'

const config: Config = {
	// ... rest of configs
	plugins: [zedwindPlugin({ themes: ALL_THEMES })],
}

export default config
```
