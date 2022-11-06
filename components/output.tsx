import { Body, Head, Panel } from '@/components/generic/panel'
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

      <Body isColumn>
        <Button text='Submit' withBg='red' />
        <Button text='Copy' withBorder onDarkBg />
        <Button text='Clear' withBorder onDarkBg />
      </Body>
    </Panel>
  )
}