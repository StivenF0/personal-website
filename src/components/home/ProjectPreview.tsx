import Image from "next/image";
import projects from "@/app/data/projects";

function ProjectPreview({ selected }: { selected: 0 | 1 | 2 }) {
  return (
    <div className="flex flex-col col-start-2 col-end-2 row-start-1 row-end-4 mr-[15%] my-[8%] border-2 border-slate-100 aspect-video self-center">
      <div className="h-12 border-b-2 bg-slate-950 border-slate-100 text-xl grid grid-cols-3 items-center relative">
        <div className="h-4 aspect-square bg-red-500 rounded-[50%] cursor-pointer ml-4"></div>
        <a
          className="absolute left-1/2 -translate-x-1/2 text-lg cursor-pointer whitespace-nowrap"
          href={projects[selected].url}
          target="_blank"
        >
          {projects[selected].url.replace("https://", "")}
        </a>
        <a
          className="ml-auto mr-4 border-2 border-slate-100 py-1 px-2 rounded-md cursor-pointer col-start-3 col-end-3"
          href={projects[selected].url}
          target="_blank"
        >
          Visitar
        </a>
      </div>
      <div className="flex-1 overflow-hidden">
        <Image
          className="object-cover h-full w-full"
          src={projects[selected].image}
          alt="Preview Image"
        />
      </div>
    </div>
  );
}

export default ProjectPreview;
