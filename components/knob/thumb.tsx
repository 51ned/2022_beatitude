import { useRef } from 'react'

import { useKnobContext, useDrag } from './'

export const Thumb = (props: JSX.IntrinsicElements['circle']) => {
	const { getPointFromValue, isFocused } = useKnobContext()
	const ref = useRef<SVGCircleElement | null>(null)
	const { isDragging } = useDrag(ref)

	const point = getPointFromValue()

	if (!point) return null

	const { x, y } = point

	return (
		<circle
			cx={x}
			cy={y}
			fill="#000000"
			{...props}
			r={8}
			ref={ref}
		/>
	)
}
