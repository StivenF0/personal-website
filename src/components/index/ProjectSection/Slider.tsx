"use client";
import { useState } from "react"
import LeftArrowSVG from "./svgs/LeftArrowSVG";
import RightArrowSVG from "./svgs/RightArrowSVG";
import images from "./images";
import Image from "next/image";

interface SliderProps {
  className?: string
}

const Slider = ({ className }: SliderProps) => {
  const [idx, setIdx] = useState(0);

  const setImageIndex = (newIdx: number) => {
    if (newIdx >= images.length || newIdx < 0) return;
    setIdx(newIdx);
  }
  const reduceImageIndex = () => setImageIndex(idx - 1);
  const increaseImageIndex = () => setImageIndex(idx + 1);


  return (
    <div className={`${className} w-full aspect-video rounded-[3.2rem] overflow-hidden relative shadow-lg`}>
      <button
        onClick={reduceImageIndex}
        className={`absolute z-10 left-0 top-0 bottom-0 w-11 flex items-center justify-end transition-opacity ${idx !== 0 ? "opacity-100 cursor-pointer" : "opacity-0 cursor-default"}`}
      >
        <LeftArrowSVG className="w-6 text-black" />
      </button>

      <button
        onClick={increaseImageIndex}
        className={`absolute z-10 right-0 top-0 bottom-0 w-11 flex items-center justify-start transition-opacity ${idx !== images.length - 1 ? "opacity-100 cursor-pointer" : "opacity-0 cursor-default"}`}
      >
        <RightArrowSVG className="w-6 text-black" />
      </button>

      <div className="absolute h-8 z-10 bottom-0 right-0 left-0 flex items-center justify-center gap-4">
        {
          images.map((_, buttonIdx) =>
            <button key={buttonIdx} className={`w-4 h-4 rounded-[50%] ${idx == buttonIdx ? "bg-amber-300" : "bg-slate-700"}`} onClick={() => setImageIndex(buttonIdx)}></button>
          )
        }
      </div>

      <div className={`w-full h-full transition-all flex`} style={{ translate: `calc(${idx}*-100%) 0` }}>
        {images.map((image, indexNum) => <Image width={1280} height={720} key={indexNum} src={image.url} alt={indexNum.toString()} />)}
      </div>
    </div>
  )
}

export default Slider