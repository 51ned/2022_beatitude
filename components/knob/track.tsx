import { useRef } from 'react'

import { useKnobContext } from './'
import { useDrag } from './useDrag'


export const Track = () => {
	const { radius, center } = useKnobContext()
	const ref = useRef<SVGCircleElement | null>(null)

	useDrag(ref)

	return (
		<circle
			cx={center.x}
			cy={center.y}
			fill='none'
			r={radius}
			ref={ref}
			stroke='#000000'
			strokeLinecap='round'
			strokeWidth={1.5}
		/>
	)
}
