import { ChangeEvent, useEffect, useState } from 'react'

import { useInterval } from '@/hooks/use-interval'

import style from './number.module.css'


interface NumberProps {
  onChange?: (value: number) => void,
  steps: number
}


export function Number({ steps, onChange }: NumberProps = { steps: 1 }) {
  const [value, setValue] = useState<number>(0)
  const [mouseDownDirection, setMouseDownDirection] = useState<'up' | 'down' | undefined>(undefined)
  const max = (num: number) => (num < 0 ? 4 : 3)

  const handleButtonChange = (direction?: 'up' | 'down') => {
    setValue(curr => {
      let next: number

      switch (direction) {
        case 'up':
          next = curr + (steps || 1)
          break
        case 'down':
          next = curr - (steps || 1)
          break
        default:
          next = curr
          break
      }

      return `${next}`.length <= max(curr) ? next : curr
    })
  }

  useInterval(() => handleButtonChange(mouseDownDirection), mouseDownDirection ? 100 : null)

  const handleChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(curr => {
      if (!Boolean(value)) { return 0 }

      const numeric = parseInt(value, 10)
      const maxLength = max(numeric)

      if (value.length > maxLength) {
        return curr
      }

      return (value.length <= maxLength ? numeric : curr)
    })
  }

  useEffect(() => {
    onChange && onChange(value);
  }, [value])

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => handleButtonChange('down')}
        onMouseDown={() => setMouseDownDirection('down')}
        onMouseOut={() => setMouseDownDirection(undefined)}
        onMouseUp={() => setMouseDownDirection(undefined)}
      >
        -
      </button>

      <input
        className={style.input}
        onChange={handleChange}
        step={steps}
        type='number'
        value={value}
      />

      <button
        className={style.button}
        onClick={() => handleButtonChange('up')}
        onMouseDown={() => setMouseDownDirection('up')}
        onMouseUp={() => setMouseDownDirection(undefined)}
        onMouseOut={() => setMouseDownDirection(undefined)}
      >
        +
      </button>
    </div>
  )
}