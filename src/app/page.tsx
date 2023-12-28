
/*
  Colors:
  - neutral.700 = 404040
  - lightgray = d9d9d9
  - stone.200 = e7e5e4
  - slate.400 = 94a3b8
  - slate.700 = 334155
  - amber.300 = fcd34d
*/

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