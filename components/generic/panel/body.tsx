import style from './body.module.css'


interface BodyProps {
  children: React.ReactNode
}


export function Body(pr: BodyProps) {
  return (
    <div className={style.container}>
      { pr.children }
    </div>
  )
}
