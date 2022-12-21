import { Body, Faceplate, Head, Footer } from '@/views/generic/faceplate'
import { Button, Checkbox, Knob, Range, Switch, Textarea } from '@/views/generic'

import style from './osc.module.css'


interface OscProps {
  oscMode?: string,
  oscNum: number,
  faceplateBg: string
}


export function Osc(pr: OscProps) {
  return (
    <Faceplate withBg={pr.faceplateBg}>
      <Head headBg='light' headTitle={`OSC # ${pr.oscNum}`}>
        {pr.oscMode &&
          <Checkbox
            id={`osc-${pr.oscNum}-mode`}
            isReversed
            labelText={pr.oscMode}
            name={`osc-${pr.oscNum}-mode`}
          />
        }
      </Head>

      <Textarea
        isInOsc
        placeholderText='Paste your text here'
        withBg={pr.faceplateBg}
      />
      
      <Body isColumn>
        <div className={style.mode_section}>
          <Checkbox
            id={`osc-${pr.oscNum}-bypass`}
            labelText='Bypass'
            name={`osc-${pr.oscNum}-bypass`}
          />

          <Checkbox
            id={`osc-${pr.oscNum}-tzara`}
            isReversed
            labelText='Tzara'
            name={`osc-${pr.oscNum}-tzara`}
          />
        </div>

        <div className={style.length_section}>
          <Switch
            id={`osc-${pr.oscNum}-switch-1`}
            labelTextFirst='Fixed'
            labelTextSecond='Float.'
          />

          <Knob radius={32} />
          
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
        <Button text='Clear' withBg='transparent' withBorder />
      </Footer>
    </Faceplate>
  )
}
  