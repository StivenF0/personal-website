import Image from "next/image";

interface ProjectsSectionOptionsProps {
  setSelected: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
}

export default function ProjectsSectionOptions({
  setSelected,
}: ProjectsSectionOptionsProps) {
  const projectImgClassName =
    "bg-slate-100 aspect-square rounded-[50%] self-center w-[80%] mx-auto grid place-content-center";
  const projectTitleClassName =
    "h-24 mr-6 border-2 border-slate-100 rounded-lg bg-[rgba(241,245,249,0.05)] pl-4 flex items-center transition-all hover:bg-[rgba(241,245,249,0.15)] cursor-pointer self-center";

  return (
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
