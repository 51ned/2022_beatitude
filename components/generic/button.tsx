import style from './button.module.css'


interface ButtonProps {
  children: React.ReactNode,
  isStripped: boolean
}


export function Button(pr: ButtonProps) {
  let decoration

  if (pr.isStripped) {
    decoration = `${style.stripped}`
  }

  return (
    <button
      className={`${style.button} ${decoration}`}
      role='button'
    >
      { pr.children }
    </button>
  )
}
