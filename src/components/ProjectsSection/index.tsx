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
      <h1 className="w-full h-full grid place-items-center">Meus Projetos</h1>

      {/* Options to chose the image on the preview */}
      <ProjectsSectionOptions setSelected={setSelected} />
      <ProjectsSectionPreview selected={selected} />

      {/* Earth image */}
      <EarthImage />
    </ProjectsSectionRoot>
  );
}
