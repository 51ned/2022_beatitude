import style from './range.module.css'


interface RangeProps {
  id: string,
  onDarkBg?: boolean,
  optTextFirst: string,
  optTextSecond: string,
  optTextThird: string
}


export function Range(pr: RangeProps) {
  let bg
  let color

  if (pr.onDarkBg) {
    bg = `${style.input_light}`
    color = `${style.opt_light}`
  } else {
    bg = `${style.input_dark}`
    color = ''
  }
 
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <input
          className={bg}
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
          className={`${style.opt} ${color}`}
          label={pr.optTextFirst}
          value='1'
        />

        <option
          className={`${style.opt} ${color}`}
          label={pr.optTextSecond}
          value='2'
        />

        <option
          className={`${style.opt} ${color}`}
          label={pr.optTextThird}
          value='3'
        />
      </datalist>
    </div>
  )
}
