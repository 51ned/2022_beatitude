import { Text } from '@/views/generic/text-v'


interface CounterProps {
  sentences?: string,
  symbols?: string,
  textSize: string
}


export function Counter(pr: CounterProps) {
  return (
    <Text tag='span' size={pr.textSize}>
      {`${pr.sentences ?? '---'} / ${pr.symbols ?? '---'}`}
    </Text>
  )
}
