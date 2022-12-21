import style from './thumb.module.css'


interface ThumbProps {}


export function Thumb() {
  return (
    <circle
      className={style.circle}
      cx='8'
			cy='8'
      r='8'
		/>
  )
}