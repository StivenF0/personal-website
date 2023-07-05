import gradientObj from "./gradientObject";
import colors from "tailwindcss/colors";
import TypewriterTitle from "./TypewriterTitle";

interface PresentationSectionRootProps {
  children: React.ReactNode;
}

export default function PresentationSectionRoot({
  children,
}: PresentationSectionRootProps) {
  return (
    <section
      className="w-full h-[110vh] grid place-content-center text-5xl font-bold text-slate-900 relative"
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
