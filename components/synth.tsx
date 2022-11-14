import { Mixer } from './mixer'
import { Osc } from './osc'
import { Output } from './output'
import { Result } from './result'

import style from './synth.module.css'


interface SynthProps {}


export function Synth(pr: SynthProps) {
  const oscData = [
    {
      bg: 'yellow',
      mode: 'Solo mode',
      num: 1
    },
    {
      bg: 'blue',
      mode: 'Dual mode',
      num: 2
    },
    {
      bg: 'green',
      mode: '',
      num: 3
    }
  ]

  return (
    <form className={style.synth}>
      <fieldset className={style.osc_wrap}>
        {oscData.map((item, index) => {
          return (
            <Osc
              key={index}
              oscMode={item.mode}
              oscNum={item.num}
              panelBg={item.bg}
            />
          )
        })}
      </fieldset>

      <fieldset className={style.mixer_wrap}>
        <div className={style.mixer_container}>
          <Mixer />
          <Result />
        </div>

        <Output />
      </fieldset>
    </form>
  )
}
