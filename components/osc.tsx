import { Button, Checkbox, Panel, Range, Switch, Textarea, Text } from './generic'
import Knob from './generic/knob'

import style from './osc.module.css'


interface OscProps {
  oscMode?: string,
  oscNumber: number,
  panelBackground: string
}


export const Osc: React.FC<OscProps> = ({
  oscMode,
  oscNumber,
  panelBackground
}) => {

  let oscHeadStyle

  if (oscMode) {
    oscHeadStyle = `${style.head_spaced}`
  } else {
    oscHeadStyle = `${style.head_centered}`
  }

  return (
    <Panel withBackground={panelBackground}>
      <div className={`${style.head} ${oscHeadStyle}`}>
        <Text bold style='smaller' tag='span'>
          OSC # {oscNumber}
        </Text>

        {oscMode &&
          <Checkbox
            id={`osc-${oscNumber}-mode`}
            labelText={oscMode}
            isReversed
          />
        }
      </div>

      <Textarea
        background={panelBackground}
        placeholderText='Paste your text here...'
      />

      <div className={style.mode_section}>
        <Checkbox
          id={`osc-${oscNumber}-bypass`}
          labelText='Bypass'
        />
      </div>

      <div className={style.length_section}>
        <Switch
          id={`osc-${oscNumber}-switch-1`}
          labelTextFirst='Floating'
          labelTextSecond='Fixed'
        />

        <div>
          <Knob />
        </div>

        <Switch
          id={`osc-${oscNumber}-switch-2`}
          labelTextFirst='Symbols'
          labelTextSecond='Sentences'
          isReversed
        />
      </div>

      <div className={style.trigger_section}>
        <Range 
          id={`osc-${oscNumber}-range`}
          optTextFirst='Dots'
          optTextSecond='Punctuation marks'
          optTextThird='Functional words'
        />
      </div>

      <Button isStripped>
        Clear
      </Button>
    </Panel>
  )
}
