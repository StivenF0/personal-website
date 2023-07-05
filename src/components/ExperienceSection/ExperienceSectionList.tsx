import ExperienceSectionListItem from "./ExperienceSectionListItem";

export default function ExperienceSectionList() {
  const items = [
    {
      subject: "Formação",
      icon: "👨‍🎓",
      title: "Técnico em Informática",
      subtitle: "IFRN - Campus Mossoró",
    },
    {
      subject: "Experiência",
      icon: "🔧",
      title: "Projeto de pesquisa",
      subtitle: "IFSC - Oficinas 4.0",
    },
  ];

  return (
    <div className="max-w-4xl w-[70vw] text-slate-800 flex flex-col gap-6 justify-center divide-y divide-slate-800">
      {items.map((item) => (
        <ExperienceSectionListItem {...item} />
      ))}
    </div>
  );
}
