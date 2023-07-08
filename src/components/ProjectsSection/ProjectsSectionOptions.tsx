import Image from "next/image";

interface ProjectsSectionOptionsProps {
  setSelected: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
}

export default function ProjectsSectionOptions({
  setSelected,
}: ProjectsSectionOptionsProps) {
  const projectImgClassName =
    "bg-slate-100 aspect-square rounded-[50%] self-center w-[80%] mx-auto grid place-content-center max-lg:row-start-1 max-lg:row-end-2";
  const projectTitleClassName =
    "h-24 mr-6 border-2 border-slate-100 rounded-lg bg-[rgba(241,245,249,0.05)] pl-4 flex items-center transition-all hover:bg-[rgba(241,245,249,0.15)] cursor-pointer self-center";

  return (
    <div className="col-start-1 col-end-1 row-start-2 row-end-2 grid justify-center grid-cols-[8rem,1fr] p-12 grid-rows-3 relative text-2xl max-lg:row-start-3 max-lg:row-end-4 max-lg:grid-cols-[repeat(3,3fr_6fr)] max-lg:grid-rows-1">
      <div
        className={`${projectImgClassName} max-lg:col-start-1 max-lg:col-end-2`}
      >
        <Image
          src="/CloneGPT_icon.png"
          alt="CloneGPTIcon"
          width={150}
          height={150}
          className="w-16 max-lg:w-[70%] m-auto"
        />
      </div>
      <div className={projectTitleClassName} onClick={() => setSelected(0)}>
        CloneGPT
      </div>
      <div
        className={`${projectImgClassName} max-lg:col-start-3 max-lg:col-end-4`}
      >
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
      <div
        className={`${projectImgClassName} max-lg:col-start-5 max-lg:col-end-6`}
      >
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
  );
}
