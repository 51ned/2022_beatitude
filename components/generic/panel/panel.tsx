import style from './panel.module.css'


interface PanelProps {
  children: React.ReactNode,
  withBg?: string,
  withBorder?: boolean
}


export function Panel(pr: PanelProps) {
  let bg

  if (pr.withBg === 'yellow') {
    bg = `${style.bg_yellow}`
  } else if (pr.withBg === 'blue') {
    bg = `${style.bg_blue}`
  } else if (pr.withBg === 'green') {
    bg = `${style.bg_green}`
  } else if (pr.withBg === 'purple') {
    bg = `${style.bg_purple}`
  }  else {
    bg = ''
  }

  let bordered = pr.withBorder ? `${style.bordered}` : ''

  return (
    <section className={`${style.wrap} ${bg} ${bordered}`}>
      { pr.children }
    </section>
  )
}
