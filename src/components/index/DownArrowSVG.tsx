import { PropsWithChildren } from "react";

interface DownArrowSVGProps extends PropsWithChildren {
  className?: string
}

const DownArrowSVG = ({ className }: DownArrowSVGProps) => {
  return (
    <svg className={className} width="53" height="31" viewBox="0 0 53 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.5 31C25.9098 31 25.3491 30.8816 24.8179 30.6447C24.3064 30.4276 23.8146 30.0723 23.3424 29.5788L1.12138 6.80993C0.373791 6.04011 0 5.10252 0 3.99713C0 3.28653 0.177059 2.62528 0.531178 2.01337C0.8853 1.40146 1.35746 0.907991 1.94766 0.532951C2.53786 0.17765 3.20675 0 3.95434 0C5.03638 0 6.00037 0.414518 6.84632 1.24355L26.5 21.5253L46.1537 1.24355C46.98 0.414518 47.9439 0 49.0457 0C49.7736 0 50.4326 0.17765 51.0228 0.532951C51.6327 0.907991 52.1147 1.40146 52.4688 2.01337C52.8229 2.62528 53 3.28653 53 3.99713C53 5.10252 52.6262 6.04011 51.8786 6.80993L29.6576 29.5788C29.1854 30.0525 28.6936 30.4078 28.1821 30.6447C27.6706 30.8816 27.1099 31 26.5 31Z" fill="#D9D9D9" />
    </svg>
  )
}

export default DownArrowSVG