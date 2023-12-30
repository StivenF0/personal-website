
interface RootProps {
  children?: any
}


const Root = ({ children }: RootProps) => {
  return (
    <div className="w-full h-16 bg-neutral-700 flex items-center justify-center gap-8">
      {children}
    </div>
  )
}

export default Root