
interface RootProps {
  children: any
}

const Root = ({ children }: RootProps) => {
  return (
    <section className="h-screen bg-slate-700 pt-[2rem] px-[20%] flex flex-col" id="projectsSection">
      {children}
    </section>
  )
}

export default Root