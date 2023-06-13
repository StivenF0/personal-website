import EarthSVG from "@/../../public/earth.svg";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface ProjectsSectionProps {
  children?: React.ReactNode;
}

function ProjectsSection({ children }: ProjectsSectionProps) {
  const projectImgClassName =
    "bg-slate-100 aspect-square rounded-[50%] self-center w-[80%] mx-auto";
  const projectTitleClassName =
    "my-10 mr-6 border-2 border-slate-100 rounded-lg bg-[rgba(241,245,249,0.05)] pl-4 flex items-center transition-all hover:bg-[rgba(241,245,249,0.15)] cursor-pointer";

  return (
    <section className="w-full h-[110vh] text-5xl font-bold bg-slate-900 text-slate-100 pt-[calc(10vh+2rem)] px-8 pb-6 grid grid-cols-[40%,60%] grid-rows-[4rem,1fr] overflow-hidden relative">
      <h1 className="w-full h-full grid place-items-center">Meus Projetos</h1>
      <div className="col-start-1 col-end-1 row-start-2 row-end-2 grid justify-center grid-cols-[8rem,1fr] p-12 grid-rows-3 relative text-2xl">
        <div className={projectImgClassName}></div>
        <div className={projectTitleClassName}>Clone GPT</div>
        <div className={projectImgClassName}></div>
        <div className={projectTitleClassName}>Oficina 4.0</div>
        <div className={projectImgClassName}></div>
        <div className={projectTitleClassName}>College Newsletter</div>
        <div className="bg-slate-100 col-start-1 col-end-1 row-start-1 row-end-4 absolute left-1/2 top-1/2 self-center mx-auto w-4 h-[60%] -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="col-start-2 col-end-2 row-start-1 row-end-4 mr-[20%] my-[8%] border-2 border-slate-100">
        <div className="h-12 border-b-2 bg-slate-950 border-slate-100 text-xl flex items-center pl-8">
          www.google.com
        </div>
      </div>
      <Image
        src={EarthSVG}
        alt="Earth"
        className="w-[40%] aspect-square absolute right-[-18%] bottom-[-22%] col-start-2 col-end-2 row-start-1 row-end-4  animate-[spin_20s_linear_infinite] hover:w-[42%]"
        style={{ transition: "all", transitionDuration: "150ms" }}
      />
    </section>
  );
}

export default ProjectsSection;
