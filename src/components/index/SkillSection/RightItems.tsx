import ProgressBar from "./ProgressBar"

const RightItems = () => {
  return (
    <>
      <div />
      <div className="flex flex-col justify-center">
        <div className="text-4xl font-semibold text-lightgray">Desenvolvimento Web</div>
        <ProgressBar valuePercent={80} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-4xl font-semibold text-lightgray">React</div>
        <ProgressBar valuePercent={60} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-4xl font-semibold text-lightgray">Python</div>
        <ProgressBar valuePercent={100} />
      </div>
    </>
  )
}

export default RightItems