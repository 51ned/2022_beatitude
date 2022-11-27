import { Button, Counter } from '@/components/generic'

import style from './textarea.module.css'


interface TextareaProps {
  isInOsc?: boolean,
  placeholderText: string,
  withBg?: string
}


export function Textarea(pr: TextareaProps) {
  const bg = pr.withBg ? `${pr.withBg}_pale_bg` : ''
  const radius = pr.isInOsc ? `${style.in_osc}` : `${style.in_result}`

  return (
    <div className={`${style.textarea} ${`${pr.withBg}_pale_bg`}`}>
      <textarea
        className={`${style.input} ${bg} ${radius}`}
        placeholder={pr.placeholderText}
      />
      
      {pr.isInOsc && 
        <div className={`${style.controlls} ${`${pr.withBg}_pale_bg`}`}>
          <div className={style.button}>
            <Button text='Submit' withBg={pr.withBg} />
          </div>

          <div className={style.counter}>
            <Counter textSize='smaller' />
          </div>
        </div>
      }
    </div>
  )
}
