import { Circle, Checkbox, Range, Switch } from '@/components/generic'


export default function Home() {
  return (
    <>
      <Checkbox id='test' labelText='Test checkbox label' />

      <br />
      
      <Switch
        id='test'
        labelTextFirst='Test switch label # 1'
        labelTextSecond='Test switch label # 2'
      />

      <br />

      <Range
        id='test'
        optTextFirst='Test range opt # 1'
        optTextSecond='Test range opt # 2'
        optTextThird='Test range opt # 2'
      />

      <br />

      <Circle />
    </>
  )
}
