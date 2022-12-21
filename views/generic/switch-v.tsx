import style from './switch.module.css'


interface SwitchProps {
  id: string,
  isReversed?: boolean,
  labelTextFirst: string,
  labelTextSecond: string,
  onDarkBg?: boolean,
}


export const Switch: React.FC<SwitchProps> = ({
  id,
  isReversed,
  labelTextFirst,
  labelTextSecond,
  onDarkBg
}) => {

  let dir = isReversed ? `${style.reversed}` : ''

  let bg
  let color

  if (onDarkBg) {
    bg = `${style.input_light}`
    color = `${style.label_light}`
  } else {
    bg = `${style.input_dark}`
    color = ''
  }

  return (
    <div className={`${style.wrap} ${dir}`}>
      <input
        className={bg}
        id={id}
        role='switch'
        type='checkbox'
      />

      <div className={style.labels}>
        <label className={`${style.label} ${color}`} htmlFor={id}>
          { labelTextFirst }
        </label>

        <label className={`${style.label} ${color}`} htmlFor={id}>
          { labelTextSecond }
        </label>
      </div>
    </div>
  )
}
