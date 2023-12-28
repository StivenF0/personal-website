
interface LeftPartProps {
  children: any
}


const LeftPart = ({ children }: LeftPartProps) => {
  return (
    <div className="bg-lightgray h-full w-80 grid auto-rows-fr py-14">
      {children}
    </div>
  )
}

export default LeftPart