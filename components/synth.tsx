import { Mixer } from './mixer'
import { Osc } from './osc'

import style from './synth.module.css'


interface SynthProps {}


export function Synth(pr: SynthProps) {
  const oscData = [
    {
      mode: 'Solo mode',
      num: 1,
      bg: 'yellow'
    },
    {
      mode: 'Dual mode',
      num: 2,
      bg: 'blue'
    },
    {
      mode: '',
      num: 3,
      bg: 'green'
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
              oscNumber={item.num}
              panelBackground={item.bg}
            />
          )
        })}
      </fieldset>

      <fieldset className={style.mixer_wrap}>
        <div>
          <Mixer />
        </div>
      </fieldset>
    </form>
  )
}