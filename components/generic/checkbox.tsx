import style from './checkbox.module.css'


interface CheckboxProps {
  isReversed?: boolean,
  id: string,
  labelText: string
}


export const Checkbox: React.FC<CheckboxProps> = ({
  isReversed,
  id,
  labelText
}) => {
  
  const dir = isReversed ? `${style.reversed}` : ''

  return (
    <div className={`${style.wrap} ${dir}`}>
      <input
        className={style.input}
        id={id}
        type='checkbox'
      />

      <label className={style.label} htmlFor={id}>
        { labelText }
      </label>
    </div>
  )
}
