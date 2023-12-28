
interface ProgressBarProps {
  className?: string
  valuePercent: number
}


const ProgressBar = ({ className, valuePercent }: ProgressBarProps) => {

  const processNumber = 100 - valuePercent
  return (
    <div className={`${className} h-7 w-3/4 border-4 grid items-center justify-center relative`}>
      <div className="absolute h-3 bg-lightgray left-0 z-10 mx-1" style={{ right: `${processNumber}%` }}></div>
    </div>
  )
}

export default ProgressBar