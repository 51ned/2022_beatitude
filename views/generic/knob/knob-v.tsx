import { RefObject, useRef } from 'react'

import { Thumb } from './thumb-v'
import { Track } from './track-v'

import style from './knob.module.css'


interface KnobProps {
  radius: number
}


export function Knob(pr: KnobProps) {
  const containerRef: RefObject<SVGSVGElement> = useRef(null)
  const size = pr.radius * 2

  return (
    <svg
      className={style.container}
      ref={containerRef}
      viewBox={`0 0 ${size} ${size}`}
    >
      <Track />
      <Thumb />
    </svg>
  )
}