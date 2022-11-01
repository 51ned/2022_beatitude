import { Arc, Knob, Pointer, Value } from 'rc-knob'

import style from './knob.module.css'


export function CustomKnob() {
  return (
    <Knob 
      angleOffset={220} 
      angleRange={280}
      max={100}
      min={1}
      size={52}
      value={50}
    >
      <Arc 
        arcWidth={2}
        color='#000'
        radius={24}
      />

      <Pointer 
        color='#000'
        radius={18}
        type='circle'
        width={4}
      />

      <Value 
        className={style.value}
        marginBottom={20}
      />
    </Knob>
  )
}
