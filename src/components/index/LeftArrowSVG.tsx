import { PropsWithChildren } from "react";

interface LeftArrowSVGProps extends PropsWithChildren {
  className?: string
}

const LeftArrowSVG = ({ className }: LeftArrowSVGProps) => {
  return (
    <svg className={className} width="31" height="53" viewBox="0 0 31 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-1.90735e-06 26.5C-1.90735e-06 25.9098 0.118433 25.3491 0.355299 24.8179C0.572428 24.3064 0.927729 23.8146 1.4212 23.3424L24.1901 1.12138C24.9599 0.373791 25.8975 0 27.0029 0C27.7135 0 28.3747 0.177059 28.9866 0.531178C29.5985 0.8853 30.092 1.35746 30.467 1.94766C30.8223 2.53786 31 3.20675 31 3.95434C31 5.03638 30.5855 6.00037 29.7564 6.84632L9.47469 26.5L29.7564 46.1537C30.5855 46.98 31 47.9439 31 49.0457C31 49.7736 30.8223 50.4326 30.467 51.0228C30.092 51.6327 29.5985 52.1147 28.9866 52.4688C28.3747 52.8229 27.7135 53 27.0029 53C25.8975 53 24.9599 52.6262 24.1901 51.8786L1.4212 29.6576C0.947468 29.1854 0.592167 28.6936 0.355299 28.1821C0.118433 27.6706 -1.90735e-06 27.1099 -1.90735e-06 26.5Z" fill="black" />
    </svg>
  )
}

export default LeftArrowSVG