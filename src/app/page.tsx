
/*
  Colors:
  - neutral.700 = 404040
  - lightgray = d9d9d9
  - stone.200 = e7e5e4
  - slate.400 = 94a3b8
  - slate.700 = 334155
  - amber.300 = fcd34d
*/

import DownArrowSVG from "@/components/index/DownArrowSVG"
import GithubLogoSVG from "@/components/index/GithubLogoSVG"
import InstagramLogoSVG from "@/components/index/InstagramLogoSVG"
import LinkedInLogoSVG from "@/components/index/LinkedInLogoSVG"
import ProjectsSlider from "@/components/index/ProjectsSlider"
import StivenDevLogoSVG from "@/components/index/StivenDevLogoSVG"

const Home = () => {
  return (
    <main>
      <section className="h-screen bg-neutral-700 pt-6 flex flex-col">
        <nav className="flex items-center justify-between mx-[3.2rem]">
          <div className="w-[5.6rem] h-[5.6rem] rounded-[50%] bg-lightgray flex items-center justify-center">
            <StivenDevLogoSVG className="h-3/4"/>
          </div>
          <div className="flex text-lightgray gap-9 underline text-xl">
            <a href="#">Home</a>
            <a href="#">Projetos</a>
            <a href="#">Habilidades</a>
            <a href="#">Contato</a>
          </div>
        </nav>
        <div className="flex-1 grid grid-cols-[5.6rem,1fr] mx-[3.2rem]">
          <div className="h-full w-full flex flex-col items-center justify-center gap-9">
            <a href="#" className="h-12 w-12"><GithubLogoSVG className="h-full w-full"/></a>
            <a href="#" className="h-12 w-12"><LinkedInLogoSVG className="h-full w-full"/></a>
            <a href="#" className="h-12 w-12"><InstagramLogoSVG className="h-full w-full"/></a>
          </div>
          <div className="h-full w-full pl-[3.3rem] flex flex-col justify-center">
            <div className="text-stone-200 text-6xl">
              <span className="text-slate-400">Oi, sou</span> Stiven Felipe <br />
              <span className="text-5xl">Desenvolvedor <span className="text-amber-300">Frontend</span></span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center pb-8">
          <DownArrowSVG className="w-6" />
        </div>
      </section>
      <section className="h-screen bg-slate-700 pt-[3.2rem] px-60 flex flex-col">
        <div className="flex justify-between">
          <div className="text-lightgray text-4xl underline">Meus projetos</div>
          {/* <div className="text-lightgray text-3xl opacity-80">Mais projetos...</div> */}
        </div>
        <div className="flex flex-1 items-center justify-center mt-0">
          <ProjectsSlider />
        </div>
      </section>
    </main>
  )
}

export default Home