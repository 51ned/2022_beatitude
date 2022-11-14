import { useState } from 'react'

import { Body, Head, Footer, Panel } from '@/components/generic/panel'
import { Button, Checkbox, Range, Switch, Textarea } from '@/components/generic'
import { Knob } from './knob'

import style from './osc.module.css'


interface OscProps {
  oscMode?: string,
  oscNum: number,
  panelBg: string
}


export function Osc(pr: OscProps) {
  const [value, setValue] = useState(.25) // temp!

  return (
    <Panel withBg={pr.panelBg}>
      <Head headBg='light' headTitle={`OSC # ${pr.oscNum}`}>
        {pr.oscMode &&
          <Checkbox
            id={`osc-${pr.oscNum}-mode`}
            labelText={pr.oscMode}
            isReversed
          />
        }
      </Head>

      <Textarea
        withBg={pr.panelBg}
        placeholderText='Paste your text here'
      />

      <Body isColumn>
        <div className={style.mode_section}>
          <Checkbox
            id={`osc-${pr.oscNum}-bypass`}
            labelText='Bypass'
          />
        </div>

        <div className={style.length_section}>
          <Switch
            id={`osc-${pr.oscNum}-switch-1`}
            labelTextFirst='Fixed'
            labelTextSecond='Float'
          />

          <Knob value={value} onChange={setValue} />
          
          <Switch
            id={`osc-${pr.oscNum}-switch-2`}
            labelTextFirst='Sent.'
            labelTextSecond='Symb.'
            isReversed
          />
        </div>

        <div className={style.trigger_section}>
          <Range 
            id={`osc-${pr.oscNum}-range`}
            optTextFirst='Dots'
            optTextSecond='Punctuation marks'
            optTextThird='Functional words'
          />
        </div>
      </Body>
      
      <Footer>
        <Button text='Clear' withBorder />
      </Footer>
    </Panel>
  )
}
  