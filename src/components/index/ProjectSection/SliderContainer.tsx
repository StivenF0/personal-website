
interface SliderContainerProps {
  children: any
}


const SliderContainer = ({ children }: SliderContainerProps) => {
  return (
    <div className="flex flex-1 items-center justify-center mt-0">
      {children}
    </div>
  )
}

export default SliderContainer