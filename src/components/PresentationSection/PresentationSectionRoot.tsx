import gradientObj from "./gradientObject";
import colors from "tailwindcss/colors";

interface PresentationSectionRootProps {
  children: React.ReactNode;
}

export default function PresentationSectionRoot({
  children,
}: PresentationSectionRootProps) {
  return (
    <section
      className="w-full h-[110vh] flex items-center justify-center text-5xl font-bold text-slate-900 relative"
      style={{ background: gradientObj.gradient() }}
    >
      {children}
      <div
        className="absolute bottom-0 left-0 h-[2vh] w-full"
        style={{
          backgroundImage: `linear-gradient(to top, ${colors.slate[900]}, transparent)`,
        }}
      />
    </section>
  );
}
