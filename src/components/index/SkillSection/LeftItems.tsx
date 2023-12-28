import CSSLogoSVG from "./svgs/CSSLogoSVG"
import HTMLLogoSVG from "./svgs/HTMLLogoSVG"
import JavascriptLogoSVG from "./svgs/JavascriptLogoSVG"
import PythonLogoSVG from "./svgs/PythonLogoSVG"
import ReactLogoSVG from "./svgs/ReactLogoSVG"

const LeftItems = () => {
  return (
    <>
      <div className="flex items-center justify-end gap-4 pr-6">
        <HTMLLogoSVG className="w-12" />
        <CSSLogoSVG className="w-12" />
        <JavascriptLogoSVG className="w-12" />
      </div>
      <div className="flex items-center justify-end pr-14">
        <ReactLogoSVG className="w-20" />
      </div>
      <div className="flex items-center justify-end pr-14">
        <PythonLogoSVG className="w-20" />
      </div>
    </>
  )
}

export default LeftItems