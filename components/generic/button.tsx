import style from './button.module.css'


interface ButtonProps {
  onDarkBg?: boolean,
  text: string,
  withBg?: string,
  withBorder?: boolean
}


export function Button(pr: ButtonProps) {
  let bg

  if (pr.withBg === 'blue') {
    bg = `${style.bg_blue}`
  } else if (pr.withBg === 'green') {
    bg = `${style.bg_red}`
  } else if (pr.withBg === 'red') {
    bg = `${style.bg_red}`
  } else if (pr.withBg === 'yellow') {
    bg = `${style.bg_yellow}`
  } else {
    bg = ''
  }

  const bordered = pr.withBorder ? `${style.bordered}` : ''
  const color = pr.onDarkBg ? `${style.light}` : ''

  return (
    <button
      className={`${style.button} ${bg} ${bordered} ${color}`}
      role='button'
    >
      { pr.text }
    </button>
  )
}
