import { Body, Head, Panel } from '@/components/generic/panel'
import { Textarea } from '@/components/generic'


export function Result() {
  return (
    <Panel withBg='purple'>
      <Head headBg='light' headTitle='RESULT' />

      <Textarea
        withBg='purple'
        placeholderText='Result comes here'
      />
    </Panel>
  )
}