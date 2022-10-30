import style from './button.module.css'


interface ButtonProps {
  children: React.ReactNode
}


export function Button(pr: ButtonProps) {
  return (
    <button
      className={`${style.button}`}
      role='button'
    >
      { pr.children }
    </button>
  )
}
