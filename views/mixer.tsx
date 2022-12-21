import { Body, Faceplate, Head } from '@/views/generic/faceplate'
import { Range, Switch } from '@/views/generic'

import style from './mixer.module.css'


export function Mixer() {
  return (
    <Faceplate withBorder>
      <Head
        headBg='dark'
        headTitle='MIXER'
        withDivider
      />

      <Body isExtraStyled={style.aligned}>
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
              labelTextFirst='Fixed'
              labelTextSecond='Float.'
              onDarkBg
            />

            <Switch
              id='length-switch-2'
              labelTextFirst='Sent.'
              labelTextSecond='Symb.'
              onDarkBg
            />
          </div>
        </div>

        <div className={style.divider} />

        <Range 
          id='trigger-range'
          onDarkBg
          optTextFirst='Dots'
          optTextSecond='Punctuation marks'
          optTextThird='Functional words'
        />
      </Body>
    </Faceplate>
  )
}
