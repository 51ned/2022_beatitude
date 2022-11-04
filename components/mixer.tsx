import { Panel, Range, Switch, Text } from './generic'
import Knob from './generic/knob-light'

import style from './mixer.module.css'


interface MixerProps {}


export const Mixer: React.FC<MixerProps> = ({

}) => {

  return (
    <Panel
      withBackground='transparent'
      isBordered
    >
      
      <div className={style.head}>
        <Text
          bg='dark'
          bold
          style='smaller'
          tag='span'
        >
          MIXER
        </Text>
      </div>
      
      <div className={style.body}>
        <div className={style.order_section}>
          <Range 
            id='order-range-1'
            onDarkBg
            optTextFirst="Save osc's order"
            optTextSecond="Mix all osc's"
            optTextThird='Choose what to mix'
          />

          <Range 
            id='order-range-2'
            onDarkBg
            optTextFirst='Osc # 1 & Osc # 2'
            optTextSecond='Osc # 1 & Osc # 3'
            optTextThird='Osc # 2 & Osc # 3'
          />
        </div>

        <div className={style.divider} />

        <div className={style.length_section}>
          <div className={style.switchs}>
            <Switch
              id='length-switch-1'
              labelTextFirst='Floating'
              labelTextSecond='Fixed'
              onDarkBg
            />

            <Switch
              id='length-switch-2'
              labelTextFirst='Symbols'
              labelTextSecond='Sentences'
              onDarkBg
            />
          </div>

          <Knob />
        </div>

        <div className={style.divider} />

        <Range 
          id='trigger-range'
          onDarkBg
          optTextFirst='Dots'
          optTextSecond='Punctuation marks'
          optTextThird='Functional words'
        />
      </div>
    </Panel>
  )
}
