import { Arc, Knob, Pointer, Value } from 'rc-knob'

import style from './knob.module.css'


export default function CustomKnob() {
  return (
    <Knob 
      angleOffset={220} 
      angleRange={280}
      max={100}
      min={1}
      size={72}
      value={50}
    >
      <Arc 
        arcWidth={1.5}
        color='#000'
        radius={32}
      />

      <Pointer 
        color='#000'
        radius={26}
        type='circle'
        width={4}
      />

      <Value 
        className={style.value}
        marginBottom={30}
      />
    </Knob>
  )
}
