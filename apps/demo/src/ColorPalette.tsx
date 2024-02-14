import { COLORS, Color } from './constants'

type ColorItemProps = { color: Color }
export const ColorItem = ({ color }: ColorItemProps) => (
	<div className={`min-w-8 min-h-8 bg-${color}`} />
)

export const ColorPalette = () => (
	<div className='flex flex-wrap'>
		{COLORS.map((x) => (
			<ColorItem color={x} />
		))}
	</div>
)
