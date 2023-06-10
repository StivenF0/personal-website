import TypewritterTitle from "@/components/TypewriterTitle";

export default function Home() {
  return (
    <main>
      <section className="bg-slate-200 w-full h-screen grid place-content-center text-4xl font-bold text-slate-900">
        <div className="">Olá, sou Stiven!</div>
        <div className="">
          Programador{" "}
          <TypewritterTitle
            className="w-32"
            words={["Frontend", "Backend", "Fullstack"]}
          />
        </div>
      </section>
    </main>
  );
}
