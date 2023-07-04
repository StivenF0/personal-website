import colors from "tailwindcss/colors";

export default function ExperienceSection() {
  return (
    <section className="w-full h-[110vh] bg-amber-300 flex justify-center">
      <div
        className="absolute top-0 left-0 h-[2vh] w-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${colors.slate[900]}, transparent)`,
        }}
      />
      {/* Content */}
      <div className="max-w-4xl w-[70vw] pt-8">
        <div className="h-44 w-44 bg-white/50 rounded-[50%] grid place-content-center text-6xl">
          👨‍🎓
        </div>
      </div>
    </section>
  );
}
