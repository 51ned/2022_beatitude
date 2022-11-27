import { Body, Faceplate, Head } from '@/components/generic/faceplate'
import { Textarea } from '@/components/generic'


export function Result() {
  return (
    <Faceplate withBg='purple'>
      <Head headBg='light' headTitle='RESULT' />

      <Textarea
        withBg='purple'
        placeholderText='Result comes here'
      />
    </Faceplate>
  )
}