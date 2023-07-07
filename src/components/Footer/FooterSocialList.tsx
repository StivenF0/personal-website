import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import FooterSocialItem from "./FooterSocialItem";

export default function FooterSocialList() {
  const items = [
    {
      href: "/Curriculum.pdf",
      icon: HiDocumentText,
      download: true,
    },
    {
      href: "https://github.com/StivenF0",
      icon: AiFillGithub,
      download: false,
    },
    {
      href: "https://www.linkedin.com/in/stiven-felipe-c%C3%A2mara-fons%C3%AAca-a40317230",
      icon: AiFillLinkedin,
      download: false,
    },
    {
      href: "https://www.instagram.com/stivenfelipe/",
      icon: AiFillInstagram,
      download: false,
    },
  ];

  return (
    <div className="flex text-zinc-50 text-4xl gap-3">
      {items.map((item) => (
        <FooterSocialItem {...item} />
      ))}
    </div>
  );
}
