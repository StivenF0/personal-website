"use client";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";

function TypewritterTitle({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const [text] = useTypewriter({
    words,
    typeSpeed: 150,
    loop: 1,
  });

  return <span className={className}>{text}</span>;
}

export default TypewritterTitle;
