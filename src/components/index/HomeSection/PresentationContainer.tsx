
interface PresentationContainerProps {
  children: any
}


const PresentationContainer = ({ children }: PresentationContainerProps) => {
  return (
    <div className="flex-1 grid grid-cols-[5.6rem,1fr] mx-[3.2rem]">
      {children}
    </div>
  )
}

export default PresentationContainer