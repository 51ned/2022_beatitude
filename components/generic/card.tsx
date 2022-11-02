import style from './card.module.css'


interface CardProps {
  withBackground?: string,
  children: React.ReactNode,
  isBordered?: boolean
}


export const Card: React.FC<CardProps> = ({
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

  const border = isBordered ? `${style.bordered}` : ''

  return (
    <section className={`${style.wrap} ${background} ${border}`}>
      { children }
    </section>
  )
}
