import colors from "tailwindcss/colors";

export default function ExperienceSection() {
  return (
    <section className="w-full h-[110vh]b pt-[10vh] bg-amber-400 relative grid place-content-center">
      <div
        className="absolute top-0 left-0 h-[2vh] w-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${colors.slate[900]}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="bg-red-300 w-full h-10"></div>
    </section>
  );
}
