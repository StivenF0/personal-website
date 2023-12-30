
interface PresentationContainerProps {
  children: any
}


const PresentationContainer = ({ children }: PresentationContainerProps) => {
  return (
    <div className="flex-1 grid grid-cols-[5.6rem,1fr] max-md:grid-cols-1 max-md:grid-rows-[1fr,5.6rem] max-md:pb-2 mx-[3.2rem]">
      {children}
    </div>
  )
}

export default PresentationContainer