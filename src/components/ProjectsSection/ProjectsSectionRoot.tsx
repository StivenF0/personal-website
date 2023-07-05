interface ProjectsSectionRootProps {
  children: React.ReactNode;
}

export default function ProjectsSectionRoot({
  children,
}: ProjectsSectionRootProps) {
  return (
    <section className="w-full h-[110vh] text-5xl font-bold bg-slate-900 text-slate-100 pt-[10vh] px-8 pb-6 grid grid-cols-[40%,60%] grid-rows-[4rem,1fr] overflow-hidden relative">
      {children}
    </section>
  );
}
