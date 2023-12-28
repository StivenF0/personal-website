
interface RootProps {
  children: any
}


const Root = ({ children }: RootProps) => {
  return (
    <section className="h-screen bg-neutral-700 pt-6 flex flex-col">
      {children}
    </section>
  )
}

export default Root