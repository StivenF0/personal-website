import { PropsWithChildren } from "react";

interface LinkedInLogoSVGProps extends PropsWithChildren {
  className?: string
}

const LinkedInLogoSVG = ({ className }: LinkedInLogoSVGProps) => {
  return (
    <svg className={className} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3_19)">
        <path d="M61.6667 0H8.33333C3.73333 0 0 3.73333 0 8.33333V61.6667C0 66.2667 3.73333 70 8.33333 70H61.6667C66.2667 70 70 66.2667 70 61.6667V8.33333C70 3.73333 66.2667 0 61.6667 0ZM21.6667 26.6667V58.3333H11.6667V26.6667H21.6667ZM11.6667 17.45C11.6667 15.1167 13.6667 13.3333 16.6667 13.3333C19.6667 13.3333 21.55 15.1167 21.6667 17.45C21.6667 19.7833 19.8 21.6667 16.6667 21.6667C13.6667 21.6667 11.6667 19.7833 11.6667 17.45ZM58.3333 58.3333H48.3333C48.3333 58.3333 48.3333 42.9 48.3333 41.6667C48.3333 38.3333 46.6667 35 42.5 34.9333H42.3667C38.3333 34.9333 36.6667 38.3667 36.6667 41.6667C36.6667 43.1833 36.6667 58.3333 36.6667 58.3333H26.6667V26.6667H36.6667V30.9333C36.6667 30.9333 39.8833 26.6667 46.35 26.6667C52.9667 26.6667 58.3333 31.2167 58.3333 40.4333V58.3333Z" fill="#D9D9D9" />
      </g>
      <defs>
        <clipPath id="clip0_3_19">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LinkedInLogoSVG