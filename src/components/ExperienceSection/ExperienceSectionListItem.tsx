interface ExperienceSectionListItemProps {
  subject: string;
  icon: string;
  title: string;
  subtitle: string;
}

export default function ExperienceSectionListItem(
  props: ExperienceSectionListItemProps
) {
  return (
    <div className="flex flex-col pt-3">
      <h2 className="text-5xl font-extrabold mx-auto">{props.subject}</h2>
      <div className="flex gap-8">
        <div className="h-44 w-44 bg-white/50 rounded-[50%] grid place-content-center text-6xl">
          {props.icon}
        </div>
        <div className="flex-1 text-5xl font-extrabold flex justify-center flex-col">
          {props.title}
          <div className="text-slate-700 text-3xl">{props.subtitle}</div>
        </div>
      </div>
    </div>
  );
}
