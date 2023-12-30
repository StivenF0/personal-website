import GithubLogoSVG from "../svgs/GithubLogoSVG"
import InstagramLogoSVG from "../svgs/InstagramLogoSVG"
import LinkedInLogoSVG from "../svgs/LinkedInLogoSVG"
import socials from "../socialUrls"

const SocialLinks = () => {
  return (
    <>
      <a href={socials.github} target="_blank"><GithubLogoSVG className="text-lightgray w-10" /></a>
      <a href={socials.linkedin} target="_blank"><LinkedInLogoSVG className="text-lightgray w-10" /></a>
      <a href={socials.instagram} target="_blank"><InstagramLogoSVG className="text-lightgray w-10" /></a>
    </>
  )
}

export default SocialLinks