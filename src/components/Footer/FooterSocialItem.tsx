import { type IconType } from "react-icons";

interface FooterSocialItemProps {
  href: string;
  icon: IconType;
}

export default function FooterSocialItem({
  href,
  icon: Icon,
}: FooterSocialItemProps) {
  return (
    <a
      className="cursor-pointer hover:scale-110 transition-all"
      href={href}
      target="_blank"
    >
      <Icon />
    </a>
  );
}
