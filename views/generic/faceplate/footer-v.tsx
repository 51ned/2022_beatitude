import style from './footer.module.css'


interface FooterProps { children: React.ReactNode }


export function Footer(pr: FooterProps) {
  return (
    <div className={style.container}>
      { pr.children }
    </div>
  )
}