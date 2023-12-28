import { PropsWithChildren } from "react";

interface CSSLogoSVGProps extends PropsWithChildren {
  className?: string
}

const CSSLogoSVG = ({ className }: CSSLogoSVGProps) => {
  return (
    <svg className={className} width="84" height="94" viewBox="0 0 84 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5_4)">
        <path fillRule="evenodd" clipRule="evenodd" d="M84 0L76.5882 84L42 93.8824L7.41176 84L0 0H84ZM21.7431 54.3529H31.6255L31.8667 60.5294L42 63.9844L52.1333 60.5294L52.8667 49.4118H31.1333L30.6314 39.5294H53.3686L54.102 29.6471H20.0156L19.2725 19.7647H64.4862L63.2509 39.5294L61.5138 67.9412L42 74.3686L22.4862 67.9412L21.7431 54.3529Z" fill="#404040" />
      </g>
      <defs>
        <clipPath id="clip0_5_4">
          <rect width="84" height="93.8824" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

export default CSSLogoSVG