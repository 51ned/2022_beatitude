import style from './textarea.module.css'


interface TextareaProps {
  background?: string,
  placeholderText: string,
  isOuter?: boolean
}


export function Textarea(pr: TextareaProps) {
  const border = pr.isOuter ? `${style.outer}` : `${style.inner}`

  let bg

  if (pr.background === 'yellow') {
    bg = `${style.background_yellow}`
  } else if (pr.background === 'blue') {
    bg = `${style.background_blue}`
  } else {
    bg = `${style.background_green}`
  }

  return (
    <textarea
      className={`${style.input} ${border} ${bg}`}
      placeholder={pr.placeholderText}
    />
  )
}