import Image from "next/image";
// Will be used soon

function ProjectPreview() {
  return (
    <div className="flex flex-col col-start-2 col-end-2 row-start-1 row-end-4 mr-[20%] my-[8%] border-2 border-slate-100">
      <div className="h-12 border-b-2 bg-slate-950 border-slate-100 text-xl flex items-center pl-8">
        https://www.google.com
        <div className="ml-auto mr-4 border-2 border-slate-100 py-1 px-2 rounded-md cursor-pointer">
          Visitar
        </div>
        <div className="mr-4 h-4 aspect-square bg-red-500 rounded-[50%] cursor-pointer"></div>
      </div>
      <div className="flex-1 overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src="https://placehold.co/1000"
          alt="Preview Image"
        />
      </div>
    </div>
  );
}

export default ProjectPreview;
