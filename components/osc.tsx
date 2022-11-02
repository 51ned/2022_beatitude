import { Checkbox, Range, Switch, Textarea, Text } from './generic'
import Knob from './generic/knob'

import style from './osc.module.css'


interface OscProps {}


export function Osc(pr: OscProps) {
  return (
    <section className={style.wrap}>
      <div className={style.head}>
        <Text bold size='smaller' tag='span'>
          OSC # 1
        </Text>

        <Checkbox id='' labelText='Solo mode' isReversed />
      </div>

      <div className={style.textarea}>
        <Textarea placeholderText='Скопируйте ваш текст сюда' />
      </div>

      <div className={style.mode}>
        <Checkbox id='' labelText='Bypass mode' />
      </div>

      <div className={style.length}>
        <Switch
          id=''
          labelTextFirst='From 1 to'
          labelTextSecond='Fixed'
        />

        <Knob />

        <Switch
          id=''
          labelTextFirst='Symbols'
          labelTextSecond='Sentences'
          isReversed
        />
      </div>

      <div className={style.trigger}>
        <Range 
          id=''
          optTextFirst='Dots'
          optTextSecond='Other punctuation marks'
          optTextThird='Functional words'
        />
      </div>

      <div className={style.footer} />
    </section>
  )
}