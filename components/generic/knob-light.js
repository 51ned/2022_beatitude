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
        color='#fff'
        radius={32}
      />

      <Pointer 
        color='#fff'
        height={8}
        radius={24}
        type='rect'
        width={1.5}
      />

      <Value 
        className={style.value_light}
        marginBottom={30}
      />
    </Knob>
  )
}
