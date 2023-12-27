import { PropsWithChildren } from "react";

interface HTMLLogoSVGProps extends PropsWithChildren {
  className?: string
}

const HTMLLogoSVG = ({ className }: HTMLLogoSVGProps) => {
  return (
    <svg className={className} width="84" height="92" viewBox="0 0 84 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M82.5469 0.648438C82.1719 0.234376 81.6328 0 81.0703 0H2.92968C2.36718 0 1.82812 0.234376 1.45312 0.648438C1.0703 1.0625 0.882804 1.61719 0.937492 2.17969L7.97655 81.0312C8.04687 81.8594 8.62499 82.5469 9.42187 82.7812L41.4453 91.9219C41.6172 91.9766 41.8047 92 41.9922 92C42.1797 92 42.3594 91.9766 42.5391 91.9219L74.5859 82.7812C75.3828 82.5469 75.9531 81.8594 76.0312 81.0312L83.0625 2.17969C83.1172 1.61719 82.9297 1.0625 82.5469 0.648438ZM65.6953 27.8359H28.0703L28.9687 38.0156H64.7891L62.1016 68.1016L41.9844 74.1797L41.7891 74.1172L21.9062 68.0938L20.8203 55.8359H30.5625L30.9844 60.5938L42.1016 62.9219L53.0156 60.5938L54.1797 47.7188H20.0937L17.4453 18.1094H66.5625L65.6953 27.8359Z" fill="#404040" />
    </svg>
  )
}

export default HTMLLogoSVG