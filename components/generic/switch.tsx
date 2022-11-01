import style from './switch.module.css'


interface SwitchProps {
  id: string,
  labelTextFirst: string,
  labelTextSecond: string
}


export function Switch(pr: SwitchProps) {
  return (
    <div className={style.wrap}>
      <input
        className={style.input}
        id={pr.id}
        role='switch'
        type='checkbox'
      />

      <div className={style.labels}>
        <label className={style.label} htmlFor={pr.id}>
          { pr.labelTextFirst }
        </label>

        <label className={style.label} htmlFor={pr.id}>
          { pr.labelTextSecond }
        </label>
      </div>
    </div>
  )
}
