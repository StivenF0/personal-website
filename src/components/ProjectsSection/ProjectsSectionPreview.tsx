import Image from "next/image";
import projects from "@/app/data/projects";

function ProjectsSectionPreview({ selected }: { selected: 0 | 1 | 2 }) {
  return (
    <div className="lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-4 self-center">
      <div className="flex flex-col col-start-2 col-end-2 row-start-1 row-end-4 mr-[15%] my-[8%] self-center border-2 border-slate-100 aspect-video max-lg:row-start-2 max-lg:row-end-3 max-lg:col-start-1 max-lg:col-end-2 max-lg:mx-auto max-lg:h-[95%] max-lg:max-w-[95%] max-lg:object-contain max-lg:my-auto">
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
    </div>
  );
}

export default ProjectsSectionPreview;
