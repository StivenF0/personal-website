import colors from "tailwindcss/colors";

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
      <div className="translate-y-[-10vh]">{children}</div>
      <div
        className="absolute bottom-2 left-0 h-5 w-full"
        style={{
          backgroundImage: `
          repeating-linear-gradient(
            to right,
            transparent,
            transparent 18px,
            ${colors.slate[900]} 18px,
            ${colors.slate[900]} 36px
          )
        `,
        }}
      ></div>
      <div
        className="absolute bottom-9 left-0 h-4 w-full"
        style={{
          backgroundImage: `
          repeating-linear-gradient(
            to right,
            transparent,
            transparent 33px,
            ${colors.slate[900]} 33px,
            ${colors.slate[900]} 50px
          )
        `,
        }}
      ></div>
    </section>
  );
}

export default PresentationSection;
