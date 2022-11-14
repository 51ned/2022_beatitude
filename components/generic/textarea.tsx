import React, { ChangeEventHandler } from 'react'

import style from './textarea.module.css'


interface TextareaProps {
  isAble: boolean,
  getValue: ChangeEventHandler<HTMLTextAreaElement>,
  placeholderText: string,
  withBg?: string
}


export function Textarea(pr: TextareaProps) {
  let bg

  if (pr.withBg === 'yellow') {
    bg = `${style.bg_yellow}`
  } else if (pr.withBg === 'blue') {
    bg = `${style.bg_blue}`
  } else if (pr.withBg === 'green') {
    bg = `${style.bg_green}`
  } else if (pr.withBg === 'purple') {
    bg = `${style.bg_purple}`
  }  else {
    bg = ''
  }

  return (
    <textarea
      className={`${style.input} ${bg}`}
      disabled={pr.isAble}
      onChange={pr.getValue}
      placeholder={pr.placeholderText}
    />
  )
}