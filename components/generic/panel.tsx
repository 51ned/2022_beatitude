import style from './panel.module.css'


interface PanelProps {
  withBackground?: string,
  children: React.ReactNode,
  isBordered?: boolean
}


export const Panel: React.FC<PanelProps> = ({
  withBackground = 'transparent', // or yellow / blue / green
  children,
  isBordered
}) => {

  let background

  if (withBackground === 'yellow') {
    background = `${style.background_yellow}`
  } else if (withBackground === 'blue') {
    background = `${style.background_blue}`
  } else if (withBackground === 'green') {
    background = `${style.background_green}`
  } else {
    background = ''
  }

  let border = isBordered ? `${style.bordered}` : ''

  return (
    <section className={`${style.wrap} ${background} ${border}`}>
      { children }
    </section>
  )
}
