import TypewriterTitle from "@/components/TypewriterTitle";
import colors from "tailwindcss/colors";

export default function Home() {
  const gradientObj = {
    color: colors.emerald[100],
    lines: colors.gray[400],
    gradient() {
      return `
        radial-gradient(
          ${this.color} 30%, 
          ${this.color} 60%, 
          transparent
        ),
        repeating-linear-gradient(
          to right,
          transparent,
          transparent 149px,
          ${this.lines} 151px,
          ${this.lines} 151px
        ),
        repeating-linear-gradient(
          to bottom,
          transparent,
          transparent 149px,
          ${this.lines} 151px,
          ${this.lines} 151px
        )
      `;
    },
  };

  return (
    <main>
      <section
        className="w-full h-screen grid place-content-center text-5xl font-bold text-slate-900 bg-gradient-radial"
        style={{ background: gradientObj.gradient() }}
      >
        <div className="">Olá, sou Stiven! 👋</div>
        <div className="">
          Programador <TypewriterTitle />
        </div>
      </section>
    </main>
  );
}
