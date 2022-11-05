import { Body, Head, Footer, Panel } from '@/components/generic/panel'
import { Button, Checkbox, Range, Switch, Textarea } from '@/components/generic'

import Knob from '@/components/generic/knob'

import style from './osc.module.css'


interface OscProps {
  oscMode?: string,
  oscNum: number,
  panelBg: string
}


export function Osc(pr: OscProps) {
  function getFooterData() {
    if (pr.oscNum === 1) {
      return (
        <>
          <Button text='Submit' withBg='red' />
          <Button text='Clear' withBorder />
        </>
      )
    }

    return (
      <Button text='Clear' withBorder />
    )
  }

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

      <Body>
        <Textarea
          background={pr.panelBg}
          placeholderText='Paste your text here'
        />

        <div className={style.mode_section}>
          <Checkbox
            id={`osc-${pr.oscNum}-bypass`}
            labelText='Bypass'
          />
        </div>

        <div className={style.length_section}>
          <Switch
            id={`osc-${pr.oscNum}-switch-1`}
            labelTextFirst='Floating'
            labelTextSecond='Fixed'
          />

          <Knob />

          <Switch
            id={`osc-${pr.oscNum}-switch-2`}
            labelTextFirst='Symbols'
            labelTextSecond='Sentences'
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
        { getFooterData() }
      </Footer>
    </Panel>
  )
}

  

  