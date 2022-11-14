import React, { ChangeEventHandler } from 'react'

import style from './checkbox.module.css'


interface CheckboxProps {
  actualValue: string,
  checkSelection: boolean,
  isReversed?: boolean,
  id: string,
  labelText: string,
  updateValue: ChangeEventHandler<HTMLInputElement>
}


export function Checkbox(pr: CheckboxProps) {
  const dir = pr.isReversed ? `${style.reversed}` : ''

  return (
    <div className={`${style.container} ${dir}`}>
      <input
        className={style.input}
        defaultChecked={pr.checkSelection}
        id={pr.id}
        onChange={pr.updateValue}
        type='checkbox'
        value={pr.actualValue}
      />

      <label className={style.label} htmlFor={pr.id}>
        { pr.labelText }
      </label>
    </div>
  )
}
