import GithubLogoSVG from "../svgs/GithubLogoSVG"
import InstagramLogoSVG from "../svgs/InstagramLogoSVG"
import LinkedInLogoSVG from "../svgs/LinkedInLogoSVG"
import socials from "../socialUrls"

const SocialLinks = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-9">
      <a href={socials.github} target="_blank" className="h-12 w-12"><GithubLogoSVG className="h-full w-full" /></a>
      <a href={socials.linkedin} target="_blank" className="h-12 w-12"><LinkedInLogoSVG className="h-full w-full" /></a>
      <a href={socials.instagram} target="_blank" className="h-12 w-12"><InstagramLogoSVG className="h-full w-full" /></a>
    </div>
  )
}

export default SocialLinks