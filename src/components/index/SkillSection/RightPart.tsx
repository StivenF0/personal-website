
interface RightPartProps {
  children: any
}


const RightPart = ({ children }: RightPartProps) => {
  return (
    <div className="flex-1 grid auto-rows-fr pl-14 py-14">
      {children}
    </div>
  )
}

export default RightPart