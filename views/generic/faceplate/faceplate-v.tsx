import style from './faceplate.module.css'


interface FaceplateProps {
  children: React.ReactNode,
  withBg?: string,
  withBorder?: boolean
}


export function Faceplate(pr: FaceplateProps) {
  const bg = pr.withBg ? `${pr.withBg}_bg` : ''
  const border = pr.withBorder ? `${style.bordered}` : ''

  return (
    <section className={`${style.wrap} ${bg} ${border}`}>
      { pr.children }
    </section>
  )
}
