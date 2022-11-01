import style from './textarea.module.css'


interface TextareaProps {
  placeholderText: string,
}


export function Textarea(pr: TextareaProps) {
  return (
    <textarea
      className={`${style.input} ${style.inner}`}
      placeholder={pr.placeholderText}
    />
  )
}