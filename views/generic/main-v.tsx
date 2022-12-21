interface MainProps {
  children: React.ReactNode
}


export function Main(pr: MainProps) {
  return (
    <main>
      { pr.children }
    </main>
  )
}
