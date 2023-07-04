import colors from "tailwindcss/colors";
import TypewriterTitle from "./TypewriterTitle";

interface PresentationSectionProps {
  children?: React.ReactNode;
}

function PresentationSection({ children }: PresentationSectionProps) {
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
    <section
      className="w-full h-[110vh] grid place-content-center text-5xl font-bold text-slate-900 relative"
      style={{ background: gradientObj.gradient() }}
    >
      <div className="translate-y-[-10vh]">
        <div>Olá, sou Stiven! 👋</div>
        <div>
          Programador <TypewriterTitle />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-[2vh] w-full"
        style={{
          backgroundImage: `
          linear-gradient(
            to top,
            ${colors.slate[900]},
            transparent
          )
        `,
        }}
      ></div>
    </section>
  );
}

export default PresentationSection;
