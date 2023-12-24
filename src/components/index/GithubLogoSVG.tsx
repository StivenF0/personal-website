import { PropsWithChildren } from "react";

interface GithubLogoSVGProps extends PropsWithChildren {
  className?: string
}

const GithubLogoSVG = ({ className }: GithubLogoSVGProps) => {
  return (
    <svg className={className} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3_11)">
        <path fillRule="evenodd" clipRule="evenodd" d="M34.8957 0C15.5993 0 0 16.0417 0 35.8874C0 51.7511 9.995 65.1795 23.8607 69.9322C25.5943 70.2895 26.2293 69.16 26.2293 68.2099C26.2293 67.3779 26.1721 64.5261 26.1721 61.5548C16.465 63.6942 14.4436 57.2768 14.4436 57.2768C12.8836 53.1176 10.5721 52.0486 10.5721 52.0486C7.395 49.8502 10.8036 49.8502 10.8036 49.8502C14.3279 50.0879 16.1771 53.534 16.1771 53.534C19.2964 58.9998 24.3229 57.4554 26.345 56.5046C26.6336 54.1873 27.5586 52.5831 28.5407 51.6921C20.7986 50.8601 12.6529 47.7706 12.6529 33.9857C12.6529 30.0643 14.0386 26.8559 16.2343 24.3607C15.8879 23.4697 14.6743 19.7852 16.5814 14.8539C16.5814 14.8539 19.5279 13.903 26.1714 18.5376C29.0158 17.752 31.9491 17.3524 34.8957 17.3491C37.8421 17.3491 40.8457 17.7654 43.6193 18.5376C50.2636 13.903 53.21 14.8539 53.21 14.8539C55.1171 19.7852 53.9029 23.4697 53.5564 24.3607C55.81 26.8559 57.1386 30.0643 57.1386 33.9857C57.1386 47.7706 48.9929 50.8003 41.1929 51.6921C42.4643 52.8208 43.5614 54.9595 43.5614 58.3465C43.5614 63.159 43.5043 67.0214 43.5043 68.2092C43.5043 69.16 44.14 70.2895 45.8729 69.9329C59.7386 65.1787 69.7336 51.7511 69.7336 35.8874C69.7907 16.0417 54.1343 0 34.8957 0Z" fill="#D9D9D9" />
      </g>
      <defs>
        <clipPath id="clip0_3_11">
          <rect width="70" height="70.0003" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

export default GithubLogoSVG