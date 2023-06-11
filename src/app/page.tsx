import TypewriterTitle from "@/components/TypewriterTitle";
import colors from "tailwindcss/colors";

export default function Home() {
  const gradient = ` 
    radial-gradient(${colors.emerald[100]} 30%, ${colors.emerald[100]} 60%, transparent),
    repeating-linear-gradient(
      to right,
      transparent,
      transparent 149px,
      ${colors.gray[300]} 151px,
      ${colors.gray[300]} 151px
    ),
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 149px,
      ${colors.gray[300]} 151px,
      ${colors.gray[300]} 151px
    )
  `;

  return (
    <main>
      <section
        className="w-full h-screen grid place-content-center text-5xl font-bold text-slate-900 bg-gradient-radial"
        style={{ background: gradient }}
      >
        <div className="">Olá, sou Stiven! 👋</div>
        <div className="">
          Programador <TypewriterTitle />
        </div>
      </section>
    </main>
  );
}
