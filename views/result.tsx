import { Body, Faceplate, Head } from '@/views/generic/faceplate'
import { Textarea } from '@/views/generic'


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