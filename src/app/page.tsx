import PresentationSection from "@/components/root/PresentationSection";
import ProjectsSection from "@/components/root/ProjectsSection";
import TypewriterTitle from "@/components/root/TypewriterTitle";

export default function Home() {
  return (
    <main>
      <PresentationSection>
        <div>Olá, sou Stiven! 👋</div>
        <div>
          Programador <TypewriterTitle />
        </div>
      </PresentationSection>
      <ProjectsSection />
    </main>
  );
}
