import { Checkbox, Textarea, Text } from './generic'

import style from './osc.module.css'


interface OscProps {}


export function Osc(pr: OscProps) {
  return (
    <section>
      <div className={style.head}>
        <Text size='smaller'>
          OSC # 1
        </Text>

        <Checkbox id='test' labelText='Solo mode' />
      </div>

      <div className={style.textarea}>
        <Textarea placeholderText='Скопируйте ваш текст сюда' />
      </div>
    </section>
  )
}