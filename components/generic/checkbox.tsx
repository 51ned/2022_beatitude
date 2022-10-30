import style from './checkbox.module.css'


interface CheckboxProps {
  id: string;
  labelText: string
}


export function Checkbox(pr: CheckboxProps) {
  return (
    <div className={style.wrap}>
      <input
        className={style.input}
        id={pr.id}
        type='checkbox'
      />

      <label className={style.label} htmlFor={pr.id}>
        { pr.labelText }
      </label>
    </div>
  )
}
