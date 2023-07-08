"use client";
import { useState } from "react";
import ProjectsSectionOptions from "./ProjectsSectionOptions";
import ProjectsSectionPreview from "./ProjectsSectionPreview";
import EarthImage from "./EarthImage";
import ProjectsSectionRoot from "./ProjectsSectionRoot";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<0 | 1 | 2>(0);

  return (
    <ProjectsSectionRoot>
      {/* Title */}
      <h1 className="w-full h-full grid place-items-center max-lg:col-start-1 max-lg:col-end-2 max-lg:row-start1 max-lg:row-end-2">
        Meus Projetos
      </h1>

      {/* Options to chose the image on the preview */}
      <ProjectsSectionOptions setSelected={setSelected} />
      <ProjectsSectionPreview selected={selected} />

      {/* Earth image */}
      <EarthImage />
    </ProjectsSectionRoot>
  );
}
