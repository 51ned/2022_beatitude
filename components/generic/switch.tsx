import style from './switch.module.css'


interface SwitchProps {
  id: string,
  isReversed?: boolean,
  labelTextFirst: string,
  labelTextSecond: string
}


export const Switch: React.FC<SwitchProps> = ({
  id,
  isReversed,
  labelTextFirst,
  labelTextSecond
}) => {

  const dir = isReversed ? `${style.reversed}` : ''

  return (
    <div className={`${style.wrap} ${dir}`}>
      <input
        className={style.input}
        id={id}
        role='switch'
        type='checkbox'
      />

      <div className={style.labels}>
        <label className={style.label} htmlFor={id}>
          { labelTextFirst }
        </label>

        <label className={style.label} htmlFor={id}>
          { labelTextSecond }
        </label>
      </div>
    </div>
  )
}
