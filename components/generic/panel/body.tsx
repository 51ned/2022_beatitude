import style from './body.module.css'


interface BodyProps {
  children: React.ReactNode,
  isColumn?: boolean,
  isExtraStyled?: string
}


export function Body(pr: BodyProps) {
  const dir = pr.isColumn ? `${style.dir_column}` : ''

  return (
    <div className={`${style.container} ${dir} ${pr.isExtraStyled}`}>
      { pr.children }
    </div>
  )
}
