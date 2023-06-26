"use client";
import Image from "next/image";
import ProjectPreview from "./ProjectPreview";
import { useState } from "react";

interface ProjectsSectionProps {
  children?: React.ReactNode;
}

function ProjectsSection({ children }: ProjectsSectionProps) {
  const [selected, setSelected] = useState<0 | 1 | 2>(2);

  const projectImgClassName =
    "bg-slate-100 aspect-square rounded-[50%] self-center w-[80%] mx-auto grid place-content-center";
  const projectTitleClassName =
    "h-24 mr-6 border-2 border-slate-100 rounded-lg bg-[rgba(241,245,249,0.05)] pl-4 flex items-center transition-all hover:bg-[rgba(241,245,249,0.15)] cursor-pointer self-center";

  return (
    <section className="w-full h-[110vh] text-5xl font-bold bg-slate-900 text-slate-100 pt-[calc(10vh+2rem)] px-8 pb-6 grid grid-cols-[40%,60%] grid-rows-[4rem,1fr] overflow-hidden relative">
      <h1 className="w-full h-full grid place-items-center">Meus Projetos</h1>
      <div className="col-start-1 col-end-1 row-start-2 row-end-2 grid justify-center grid-cols-[8rem,1fr] p-12 grid-rows-3 relative text-2xl">
        <div className={projectImgClassName}>
          <Image
            src="/CloneGPT_icon.png"
            alt="CloneGPTIcon"
            width={150}
            height={150}
            className="w-16"
          />
        </div>
        <div className={projectTitleClassName} onClick={() => setSelected(0)}>
          CloneGPT
        </div>
        <div className={projectImgClassName}>
          <Image
            src="/Oficinas_icon.png"
            alt="OficinasIcon"
            width={150}
            height={150}
            className="w-26"
          />
        </div>
        <div className={projectTitleClassName} onClick={() => setSelected(1)}>
          Oficina 4.0
        </div>
        <div className={projectImgClassName}>
          {/* Change to Image later */}
          <Image
            src="/College_icon.png"
            alt="CollegeIcon2"
            key="College"
            width={150}
            height={150}
            className="w-26"
          />
        </div>
        <div className={projectTitleClassName} onClick={() => setSelected(2)}>
          College Newsletter
        </div>
      </div>
      <ProjectPreview selected={selected} />
      <Image
        src="/earth.svg"
        alt="Earth"
        className="w-[40%] aspect-square absolute right-[-20%] bottom-[-28%] col-start-2 col-end-2 row-start-1 row-end-4  animate-[spin_20s_linear_infinite] hover:w-[42%]"
        width={200}
        height={200}
        style={{ transition: "all", transitionDuration: "150ms" }}
      />
    </section>
  );
}

export default ProjectsSection;
