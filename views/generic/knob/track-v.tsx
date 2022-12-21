import style from './track.module.css'


interface TrackProps {}


export function Track(pr: TrackProps) {
  return (
    <circle className={style.circle} cx='32' cy='32' r='32' />
  )
}
