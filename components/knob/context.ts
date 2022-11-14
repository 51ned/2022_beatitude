import {
	createContext,
	useContext,
	Context as ReactContext,
	SetStateAction,
	Dispatch,
} from 'react'

import { Coordinates } from './utils'

export type KnobContext = {
	value: number
	radius: number
	center: Coordinates
	isFocused: boolean
	setFocused: Dispatch<SetStateAction<boolean>>
	onChange: (value: number) => void
	onChangeEnd: (value: number) => void
	getPointFromValue: (v?: number) => Coordinates | null
	getValueFromPointerEvent: (...args: Parameters<EventListener>) => number
}

const Context: ReactContext<KnobContext> = createContext(
	{} as KnobContext
)

export const KnobProvider = Context.Provider

export function useKnobContext(): KnobContext {
	const context = useContext(Context)
	
	return context as KnobContext
}
