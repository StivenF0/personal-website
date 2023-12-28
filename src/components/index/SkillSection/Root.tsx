
interface RootProps {
  children: any
}


const Root = ({ children }: RootProps) => {
  return (
    <section className="h-screen bg-neutral-700 flex" id="skillsSection">
      {children}
    </section>
  )
}

export default Root