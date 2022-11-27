import { Body, Faceplate, Head, Footer } from '@/components/generic/faceplate'
import { Button, Checkbox, Range, Switch, Textarea } from '@/components/generic'

import style from './osc.module.css'


interface OscProps {
  oscMode?: string,
  oscNum: number,
  panelBg: string
}


export function Osc(pr: OscProps) {
  return (
    <Faceplate withBg={pr.panelBg}>
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
        isInOsc
        placeholderText='Paste your text here'
        withBg={pr.panelBg}
      />
      
      <Body isColumn>
        <div className={style.mode_section}>
          <Checkbox
            id={`osc-${pr.oscNum}-bypass`}
            labelText='Bypass'
          />

          <Checkbox
            id={`osc-${pr.oscNum}-bypass`}
            isReversed
            labelText='Cthulhu'
          />
        </div>

        <div className={style.length_section}>
          <Switch
            id={`osc-${pr.oscNum}-switch-1`}
            labelTextFirst='Fixed'
            labelTextSecond='Float.'
          />
          
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
  