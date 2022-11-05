import { Head, Panel } from '@/components/generic/panel'
import { Button } from '@/components/generic'

import style from './output.module.css'


export function Output() {
  return (
    <Panel withBorder>
      <Head
        headBg='dark'
        headTitle='OUTPUT'
        withDivider
      />

      <div className={style.container}>
        <Button text='Submit' withBg='red' />
        <Button text='Copy' withBorder />
        <Button text='Clear' withBorder />
      </div>
    </Panel>
  )
}