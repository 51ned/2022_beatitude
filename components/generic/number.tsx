import style from './number.module.css'


interface NumberProps {
  withBg: string
}


export function Number(pr: NumberProps) {
  let button_bg
  let textarea_bg

  if (pr.withBg === 'yellow') {
    button_bg = `${style.button_bg_yellow}`
    textarea_bg = `${style.textarea_bg_yellow}`
  } else if (pr.withBg === 'blue') {
    button_bg = `${style.button_bg_blue}`
    textarea_bg = `${style.textarea_bg_blue}`
  } else {
    button_bg = `${style.button_bg_green}`
    textarea_bg = `${style.textarea_bg_green}`
  }

  return (
    <div className={style.container}>
      <button className={`${button_bg} ${style.button} `}>
        <svg height='16px' width='16px' viewBox='0 0 16 16'>
          <polygon points='7,0 9,0 9,7 16,7 16,9 9,9 9,16 7,16 7,9 0,9 0,7 7,7' />
        </svg>
      </button>

      <input className={`${style.input} ${textarea_bg}`} type='number' />

      <button className={`${style.button} ${button_bg}`}>
        <svg height='16px' width='16px' viewBox='0 0 16 16'>
          <rect width='16' height='2' />
        </svg>
      </button>
    </div>
  )
}
