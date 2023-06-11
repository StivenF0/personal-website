"use client";
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function TypewriterTitle() {
  const colors = [
    "#fbbf24", // yellow
    "#0ea5e9", // blue
    "#059669", // green
  ];
  const [color, setColor] = useState(colors[0]);
  const counter = useRef(0);

  const handleChangeColor = () => {
    if (counter.current >= 14) {
      setColor(colors[2]);
    } else if (counter.current >= 7) {
      setColor(colors[1]);
    }
    counter.current++;
  };

  return (
    <div className="inline-block w-[15.2rem]" style={{ color }}>
      <Typewriter
        words={["Frontend", "Backend", "Fullstack"]}
        loop={1}
        cursor={true}
        onDelete={handleChangeColor}
        delaySpeed={3000}
      />
    </div>
  );
}

export default TypewriterTitle;
