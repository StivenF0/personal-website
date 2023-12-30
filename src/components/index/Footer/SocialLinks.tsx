import GithubLogoSVG from "../svgs/GithubLogoSVG"
import InstagramLogoSVG from "../svgs/InstagramLogoSVG"
import LinkedInLogoSVG from "../svgs/LinkedInLogoSVG"

const SocialLinks = () => {
  return (
    <>
      <a href="#"><GithubLogoSVG className="text-lightgray w-10" /></a>
      <a href="#"><InstagramLogoSVG className="text-lightgray w-10" /></a>
      <a href="#"><LinkedInLogoSVG className="text-lightgray w-10" /></a>
    </>
  )
}

export default SocialLinks