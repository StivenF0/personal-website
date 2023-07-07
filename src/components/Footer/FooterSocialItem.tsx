import { type IconType } from "react-icons";

interface FooterSocialItemProps {
  href: string;
  icon: IconType;
  download: boolean;
}

export default function FooterSocialItem({
  href,
  icon: Icon,
  download,
}: FooterSocialItemProps) {
  return (
    <a
      className="cursor-pointer hover:scale-110 transition-all"
      href={href}
      target="_blank"
      download={download}
    >
      <Icon />
    </a>
  );
}
