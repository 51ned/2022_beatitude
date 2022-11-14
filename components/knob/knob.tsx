import React, {
	useRef,
	RefObject,
	useMemo,
	useCallback,
	useState,
	KeyboardEvent,
} from 'react'

import {
	Coordinates,
	polarToCartesian,
	valueToAngle,
	calculateNearestValueToPoint,
	getElementPosition,
	absPos,
} from './utils'

import { KnobContext, KnobProvider } from './context'
import { Track } from './track'
import { Thumb } from './thumb'

type DefaultHTMLProps = JSX.IntrinsicElements['svg']

type Props = Omit<DefaultHTMLProps, 'onChange'> & {
	value: number
	radius?: number
	onChange?: (value: number) => void
	onChangeEnd?: (value: number) => void
}

export function Knob({
	value = 0.25,
	radius = 32,
	onChange = () => {},
	onChangeEnd = () => {},
	tabIndex = 0,
	children,
	...props
}: Props) {
	const containerRef: RefObject<SVGSVGElement> = useRef(null)
	const size = radius * 2
	const center = useMemo(() => ({ x: radius, y: radius }), [radius])

	// Accessibility
	const [isFocused, setFocused] = useState(false)

	const handleFocus = useCallback(() => {
		setFocused(true)
	}, [])

	const handleBlur = useCallback(() => {
		setFocused(false)
	}, [])

	const handleKeyDown = useCallback(
		(e: KeyboardEvent<SVGSVGElement>) => {
			if (!isFocused) return
			const { keyCode } = e

			// arrow up, arrow right, page up, space
			const isIncrement =
				keyCode === 38 ||
				keyCode === 39 ||
				keyCode === 33 ||
				keyCode === 32

			// arrow down, arrow left, page down
			const isDecrement =
				keyCode === 40 || keyCode === 37 || keyCode === 34

			if (isIncrement) {
				onChange(Math.min(1, value + 0.1))
			}

			if (isDecrement) {
				onChange(Math.max(0, value - 0.1))
			}

			if (isIncrement || isDecrement) {
				e.preventDefault()
			}
		},
		[isFocused, onChange, value]
	)

	const accessibilityProps = {
		tabIndex,
		role: 'slider',
		onFocus: handleFocus,
		onBlur: handleBlur,
		onKeyDown: handleKeyDown,
	}

	// Geometry utilities

	const getPointFromValue = useCallback(
		(v) =>
			polarToCartesian({
				center,
				angle: valueToAngle(v || value),
				radius,
			}),
		[value, center, radius]
	)

	const getValueFromPointerEvent = useCallback(
		(e) =>
			calculateNearestValueToPoint({
				point: absPos(e),
				container: getElementPosition(
					containerRef.current
				) as Coordinates,
				value,
				center,
				radius,
			}),
		[value, center, radius]
	)

	// Context

	const context = useMemo(
		(): KnobContext => ({
			value,
			radius,
			center,
			isFocused,
			setFocused,
			onChange,
			onChangeEnd,
			getPointFromValue,
			getValueFromPointerEvent,
		}),
		[
			value,
			radius,
			center,
			onChange,
			onChangeEnd,
			isFocused,
			setFocused,
			getPointFromValue,
			getValueFromPointerEvent,
		]
	)

	const handleClick = useCallback(
		(e) => {
			const nearestValue = getValueFromPointerEvent(e)
			onChange(nearestValue)
			onChangeEnd(nearestValue)
		},
		[onChange, onChangeEnd, getValueFromPointerEvent]
	)

	const style = {
		overflow: 'visible',
		outline: 'none',
		...(props.style || {}),
		touchAction: 'manipulation',
		WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	}

	return (
		<KnobProvider value={context}>
			<svg
				{...props}
				ref={containerRef}
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				style={style}
				onClick={handleClick}
			>
				<Track />
				<Thumb />
			</svg>
		</KnobProvider>
	)
}
