import { Text } from '@/components/generic/text'


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
