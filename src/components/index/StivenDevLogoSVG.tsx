import { PropsWithChildren } from "react";

interface StivenDevLogoSVGProps extends PropsWithChildren {
  className?: string
}

const StivenDevLogoSVG = ({ className }: StivenDevLogoSVGProps) => {
  return (
    <svg className={className} width="86" height="91" viewBox="0 0 86 91" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_12_2)">
        <path d="M54.057 0H31.943L43 15.75H65.1143L54.057 0Z" fill="#00AEFF" />
        <path d="M31.943 0L0 45.5H22.1143L43 15.75L31.943 0Z" fill="#006BCB" />
        <path d="M22.1143 45.5H0L15.1524 67.0833L27.8477 53.6667L22.1143 45.5Z" fill="#00AEFF" />
        <path d="M63.8857 45.5H86L70.8477 23.9167H48.7334L58.1523 37.3333L63.8857 45.5Z" fill="#00AEFF" />
        <path d="M31.943 91H54.057L43 75.25H20.8857L31.943 91Z" fill="#00AEFF" />
        <path d="M58.1523 37.3333L48.7334 23.9167L27.8477 53.6667L15.1524 67.0833H37.2666L58.1523 37.3333Z" fill="#006BCB" />
        <path d="M54.057 91L86 45.5H63.8857L43 75.25L54.057 91Z" fill="#006BCB" />
      </g>
      <defs>
        <clipPath id="clip0_12_2">
          <rect width="86" height="91" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default StivenDevLogoSVG