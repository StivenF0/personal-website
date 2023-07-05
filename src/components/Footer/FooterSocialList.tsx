import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import FooterSocialItem from "./FooterSocialItem";

export default function FooterSocialList() {
  const items = [
    {
      href: "#",
      icon: HiDocumentText,
    },
    {
      href: "https://github.com/StivenF0",
      icon: AiFillGithub,
    },
    {
      href: "https://www.linkedin.com/in/stiven-felipe-c%C3%A2mara-fons%C3%AAca-a40317230",
      icon: AiFillLinkedin,
    },
    {
      href: "https://www.instagram.com/stivenfelipe/",
      icon: AiFillInstagram,
    },
  ];

  return (
    <div className="flex text-zinc-50 text-4xl gap-3">
      {items.map((item) => (
        <FooterSocialItem key={item.href} {...item} />
      ))}
    </div>
  );
}
