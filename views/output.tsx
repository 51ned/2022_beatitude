import { Body, Faceplate, Head } from '@/views/generic/faceplate'
import { Button } from '@/views/generic'

import style from './output.module.css'


export function Output() {
  return (
    <Faceplate withBorder>
      <Head
        headBg='dark'
        headTitle='OUTPUT'
        withDivider
      />

      <Body isColumn>
        <Button text='Repeat' withBg='green' />
        <Button text='Copy' withBg='blue' />
        <Button text='Clear' withBg='yellow' />
      </Body>
    </Faceplate>
  )
}
