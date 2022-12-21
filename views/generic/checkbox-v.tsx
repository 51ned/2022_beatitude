import { observer } from 'mobx-react-lite'

import { checkboxStore } from '@/stores/checkbox-s'

import style from './checkbox.module.css'


interface CheckboxProps {
  isReversed?: boolean,
  id: string,
  labelText: string,
  name: string
}


export const Checkbox = observer(function Checkbox(pr: CheckboxProps) {
  const dir = pr.isReversed ? `${style.reversed}` : ''
  const {reg, checked, setChecked} = checkboxStore

  reg(pr)

  return (
    <div className={`${style.container} ${dir}`}>
      <input
        className={style.input}
        defaultChecked={checked}
        id={pr.id}
        name={pr.name}
        onChange={() => setChecked(pr.name)}
        type='checkbox'
      />

      <label className={style.label} htmlFor={pr.id}>
        { pr.labelText }
      </label>
    </div>
  )
})
