import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="h-24 bg-zinc-800 flex justify-between items-center px-12">
      <div className="text-zinc-400 font-semibold">
        Um projeto de Stiven Felipe
      </div>
      <div className="flex text-zinc-50 text-4xl gap-3">
        <a
          className="cursor-pointer hover:scale-110 transition-all"
          href="#"
          target="_blank"
        >
          <HiDocumentText />
        </a>
        <a
          className="cursor-pointer hover:scale-110 transition-all"
          href="https://github.com/StivenF0"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <a
          className="cursor-pointer hover:scale-110 transition-all"
          href="https://www.linkedin.com/in/stiven-felipe-c%C3%A2mara-fons%C3%AAca-a40317230"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="cursor-pointer hover:scale-110 transition-all"
          href="https://www.instagram.com/stivenfelipe/"
          target="_blank"
        >
          <AiFillInstagram />
        </a>
      </div>
    </footer>
  );
}
