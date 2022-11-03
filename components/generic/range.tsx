import style from './range.module.css'


interface RangeProps {
  id: string
  optTextFirst: string
  optTextSecond: string
  optTextThird: string
}


export function Range(pr: RangeProps) {
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <input
          className={style.input}
          id={pr.id}
          list='options'
          type='range'
          max='3'
          min='1'
          step='1'
          defaultValue={3}
        />
      </div>

      <datalist className={style.opt_list} id='options'>
        <option
          className={style.opt}
          label={pr.optTextFirst}
          value='1'
        />

        <option
          className={style.opt}
          label={pr.optTextSecond}
          value='2'
        />

        <option
          className={style.opt}
          label={pr.optTextThird}
          value='3'
        />
      </datalist>
    </div>
  )
}
