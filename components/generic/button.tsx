import style from './button.module.css'


interface ButtonProps {
  onDarkBg?: boolean,
  text: string,
  withBg?: string,
  withBorder?: boolean
}


export function Button(pr: ButtonProps) {
  const bordered = pr.withBorder ? `${style.bordered}` : ''
  const color = pr.onDarkBg ? `${style.light}` : ''

  return (
    <button
      className={`${style.button} ${`${pr.withBg}_bg`} ${bordered} ${color}`}
      role='button'
    >
      { pr.text }
    </button>
  )
}
