interface ProjectsSectionProps {
  children?: React.ReactNode;
}

function ProjectsSection({ children }: ProjectsSectionProps) {
  return (
    <section className="w-full h-[110vh] text-5xl font-bold bg-slate-900 grid place-content-center text-slate-100">
      <div className="">Hello World!</div>
    </section>
  );
}

export default ProjectsSection;
