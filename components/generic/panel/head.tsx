import { Text } from '@/components/generic'

import style from './head.module.css'


interface HeadProps {
  children?: React.ReactNode,
  headBg: string,
  headTitle: string,
  withDivider?: boolean
}


export function Head(pr: HeadProps) {
  const align = pr.children ? `${style.justyfied}` : `${style.centered}`
  const divide = pr.withDivider ? `${style.divided}` : ''

  return (
    <div className={`${style.container} ${align} ${divide}`}>
      <Text
        bg={pr.headBg}
        bold
        style='smaller'
        tag='span'
      >
        { pr.headTitle }
      </Text>

      { pr.children }
    </div>
  )
}
