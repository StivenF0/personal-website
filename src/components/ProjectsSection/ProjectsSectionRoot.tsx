interface ProjectsSectionRootProps {
  children: React.ReactNode;
}

export default function ProjectsSectionRoot({
  children,
}: ProjectsSectionRootProps) {
  return (
    <section className="w-full h-[110vh] text-5xl font-bold bg-slate-900 text-slate-100 pt-[10vh] px-8 pb-6 grid grid-cols-[40%,60%] grid-rows-[4rem,1fr] overflow-hidden relative max-lg:grid-rows-[4rem,68%,1fr] max-lg:grid-cols-1 max-lg:pb-8">
      {children}
    </section>
  );
}
