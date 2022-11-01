import { Osc } from './osc'

import style from './synth.module.css'


interface SynthProps {}


export function Synth(pr: SynthProps) {
  return (
    <form>
      <fieldset className={style.oscs}>
        <Osc/>
        <Osc/>
        <Osc/>
      </fieldset>
    </form>
  )
}