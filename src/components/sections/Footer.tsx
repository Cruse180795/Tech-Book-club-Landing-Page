import StarIcon from "../icons/StarIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import BlueskyIcon from "../icons/BlueskyIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import AvatarImage from "../../assets/images/image-avatars.webp";

import FooterSocialLink from "../ui/FooterSocialLink";

export default function Footer() {
  const scrollToMembershipOptions = () => {
    document.getElementById("MembershipOptions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="px-4 pt-12 space-y-16 rounded-t-2xl bg-neutral-900 md:px-8 md:pt-16 lg:px-33.75"
      id="footer"
    >
      {/** Top of footer */}
      <div className="space-y-10 lg:max-w-187.5 lg:mx-auto">
        <h2 className="font-semibold font-martian text-34 leading-130 tracking-tight-3 text-center text-neutral-100 md:text-50">
          Ready to debug your reading list?
        </h2>

        {/** Testimonials & button */}
        <div className="space-y-6">
          <button
            type="button"
            className="cursor-pointer transition-colors ease-in-out duration-500 px-6 py-5 rounded-lg border-2 border-neutral-0 flex items-center gap-x-3 md:mx-auto hover:bg-linear-to-r hover:from-neutral-700 hover:to-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-0"
            onClick={scrollToMembershipOptions}
          >
            <span className="font-semibold font-martian leading-130 tracking-tight-2 uppercase text-neutral-0 md:text-lg">
              Review membership options
            </span>
            <ArrowUpIcon className="size-6 shrink-0" />
          </button>

          {/** Testimonials */}
          <div className="flex items-center gap-x-3 md:justify-center">
            <img src={AvatarImage} alt="3 person avatars" height={40} width={110} />

            <div>
              {/* Rating Wrapper */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="size-7" />
                ))}
              </div>

              {/** Testimonials text */}
              <p className="font-martian text-sm leading-120 tracking-tight-2 text-neutral-0">
                200+ developers joined already
              </p>
            </div>
          </div>
        </div>
      </div>

      {/** Bottom of footer */}
      <div>
        <hr className="border-t border-t-neutral-700" />
        <div className="space-y-4 py-6 md:flex md:items-center md:justify-between md:space-y-0">
          <p className="font-martian text-sm leading-120 tracking-tight-2 text-neutral-0 text-center">
            © 2024 – Tech Book Club
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <FooterSocialLink href="https://bsky.app/" label="Visit our Bluesky profile">
              <BlueskyIcon className="size-5.5 text-neutral-0 transition-colors ease-in-out duration-500 hover:text-neutral-300 cursor-pointer" />
            </FooterSocialLink>
            <FooterSocialLink href="https://www.linkedin.com/feed/" label="Visit our LinkedIn profile">
              <LinkedinIcon className="size-5.5 text-neutral-0 transition-colors ease-in-out duration-500 hover:text-neutral-300 cursor-pointer" />
            </FooterSocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
