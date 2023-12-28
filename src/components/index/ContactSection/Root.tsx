
interface RootProps {
  children: any
}


const Root = ({ children }: RootProps) => {
  return (
    <section className="h-screen bg-amber-300 flex items-center justify-center py-5" id="contactSection">
      {children}
    </section>
  )
}

export default Root