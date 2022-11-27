import React, { ChangeEventHandler } from 'react'

import style from './checkbox.module.css'


interface CheckboxProps {
  isReversed?: boolean,
  id: string,
  labelText: string
}


export function Checkbox(pr: CheckboxProps) {
  const dir = pr.isReversed ? `${style.reversed}` : ''

  return (
    <div className={`${style.container} ${dir}`}>
      <input
        className={style.input}
        id={pr.id}
        type='checkbox'
      />

      <label className={style.label} htmlFor={pr.id}>
        { pr.labelText }
      </label>
    </div>
  )
}
