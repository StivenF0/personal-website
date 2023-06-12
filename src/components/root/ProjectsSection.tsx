import EarthSVG from "@/../../public/earth.svg";
import Image from "next/image";

interface ProjectsSectionProps {
  children?: React.ReactNode;
}

function ProjectsSection({ children }: ProjectsSectionProps) {
  return (
    <section className="w-full h-[110vh] text-5xl font-bold bg-slate-900 text-slate-100 pt-[calc(10vh+2rem)] px-8 pb-6 grid grid-cols-[40%,60%] grid-rows-[4rem,1fr] overflow-hidden relative">
      <h1 className="w-full h-full grid place-items-center">Meus Projetos</h1>
      <div className="col-start-1 col-end-1 row-start-2 row-end-2 grid justify-center grid-cols-[8rem,1fr] p-12 grid-rows-3 relative text-xl">
        <div className="bg-slate-100 aspect-square rounded-[50%] self-center w-3/4 mx-auto"></div>
        <div
          className={`my-6 mr-6 border-2 border-slate-100 rounded-lg bg-[rgba(241,245,249,0.05)] pl-4 flex items-center`}
        >
          Clone GPT
        </div>
        <div className="bg-slate-100 aspect-square rounded-[50%] self-center w-3/4 mx-auto"></div>
        <div
          className={`my-6 mr-6 border-2 border-slate-100 rounded-lg bg-[rgba(241,245,249,0.05)] pl-4 flex items-center`}
        >
          Oficina 4.0
        </div>
        <div className="bg-slate-100 aspect-square rounded-[50%] self-center w-3/4 mx-auto"></div>
        <div
          className={`my-6 mr-6 border-2 border-slate-100 rounded-lg bg-[rgba(241,245,249,0.05)] pl-4 flex items-center`}
        >
          College Newsletter
        </div>
        <div className="bg-slate-100 col-start-1 col-end-1 row-start-1 row-end-4 absolute left-1/2 top-1/2 self-center mx-auto w-4 h-64 -translate-x-1/2 -translate-y-1/2"></div>
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
