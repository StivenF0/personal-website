import colors from "tailwindcss/colors";

export default function ExperienceSection() {
  return (
    <section className="w-full h-[110vh] bg-amber-300 flex justify-center relative">
      <div
        className="absolute top-0 left-0 h-[2vh] w-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${colors.slate[900]}, transparent)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-[1vh] w-full"
        style={{
          backgroundImage: `linear-gradient(to top, ${colors.zinc[800]}, transparent)`,
        }}
      />
      {/* Content */}
      <div className="max-w-4xl w-[70vw] text-slate-800 flex flex-col gap-4 justify-center">
        <h2 className="text-5xl font-extrabold mx-auto">Formação</h2>
        <div className="flex gap-8">
          <div className="h-44 w-44 bg-white/50 rounded-[50%] grid place-content-center text-6xl">
            👨‍🎓
          </div>
          <div className="flex-1 text-5xl font-extrabold flex justify-center flex-col">
            Técnico em Informática
            <div className="text-slate-700 text-3xl">IFRN - Campus Mossoró</div>
          </div>
        </div>
        <hr className={`border-slate-800`} />
        <h2 className="text-5xl font-extrabold mx-auto mt-8">Experiência</h2>
        <div className="flex gap-8">
          <div className="h-44 w-44 bg-white/50 rounded-[50%] grid place-content-center text-6xl">
            🔧
          </div>
          <div className="flex-1 text-5xl font-extrabold flex justify-center flex-col">
            Projeto de pesquisa
            <div className="text-slate-700 text-3xl">IFSC - Oficinas 4.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}
