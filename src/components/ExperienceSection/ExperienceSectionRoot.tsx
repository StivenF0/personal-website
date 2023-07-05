import colors from "tailwindcss/colors";

interface ExperienceSectionRootProps {
  children: React.ReactNode;
}

export default function ExperienceSectionRoot({
  children,
}: ExperienceSectionRootProps) {
  return (
    <section className="w-full h-[110vh] bg-amber-300 flex justify-center relative">
      {/* Gradient */}
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
      {children}
    </section>
  );
}
