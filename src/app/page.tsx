import ContactSection from "@/components/index/ContactSection"
import HomeSection from "@/components/index/HomeSection"
import ProjectSection from "@/components/index/ProjectSection"
import SkillSection from "@/components/index/SkillSection"

const Home = () => {
  return (
    <main>
      <HomeSection.Root>
        <HomeSection.Nav>
          <HomeSection.NavLogo />
          <HomeSection.NavLinks />
        </HomeSection.Nav>
        <HomeSection.PresentationContainer>
          <HomeSection.SocialLinks />
          <HomeSection.MainPresentation />
        </HomeSection.PresentationContainer>
        <HomeSection.Footer />
      </HomeSection.Root>

      <ProjectSection.Root>
        <ProjectSection.Head />
        <ProjectSection.SliderContainer>
          <ProjectSection.Slider />
        </ProjectSection.SliderContainer>
      </ProjectSection.Root>

      <SkillSection.Root>
        <SkillSection.LeftPart>
          <SkillSection.LeftHead />
          <SkillSection.LeftItems />
        </SkillSection.LeftPart>
        <SkillSection.RightPart>
          <SkillSection.RightItems />
        </SkillSection.RightPart>
      </SkillSection.Root>

      <ContactSection.Root>
        <ContactSection.Form />
      </ContactSection.Root>
    </main>
  )
}

export default Home