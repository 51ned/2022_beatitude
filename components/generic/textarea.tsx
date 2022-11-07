import style from './textarea.module.css'


interface TextareaProps {
  withBg?: string,
  placeholderText: string,
  isOuter?: boolean
}


export function Textarea(pr: TextareaProps) {
  const border = pr.isOuter ? `${style.outer}` : `${style.inner}`

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
      className={`${style.input} ${border} ${bg}`}
      placeholder={pr.placeholderText}
    />
  )
}