import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import PresentationSection from "@/components/PresentationSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <PresentationSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
