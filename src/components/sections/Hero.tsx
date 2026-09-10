import TechBookClubLogo from "../../assets/images/logo.svg";
import AvatarImage from "../../assets/images/image-avatars.webp";
import HeroDesktopImage from "../../assets/images/image-hero-desktop.webp";
import HeroTabletImage from "../../assets/images/image-hero-tablet.webp";
import HeroMobileImage from "../../assets/images/image-hero-mobile.webp";

import ArrowDownIcon from "../icons/ArrowDownIcon";
import StarIcon from "../icons/StarIcon";

export default function Hero() {
  const scrollToMembershipOptions = () => {
    document.getElementById("MembershipOptions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="px-4 pt-6 pb-20 space-y-12 bg-light-salmon-50 md:px-8 md:pt-8 lg:px-33.75 lg:space-y-20 relative overflow-hidden "
      id="hero"
    >
      {/** Larger screen wrapper */}
      <div className="container mx-auto">
        {/** Glow effect */}
        <div
          aria-hidden="true"
          className="absolute bg-glow -right-183.75 bottom-[-300.078px] md:-right-85.5 md:bottom-[-299.956px] lg:-right-118 lg:-bottom-56.5 blur-[100px] w-171 h-171 opacity-50"
        ></div>
        {/** Company Logo */}
        <img src={TechBookClubLogo} alt="Tech Book Club Logo" />

        <div className="space-y-16 lg:space-y-0 lg:flex lg:items-center lg:gap-x-16">
          {/** Desktop Left hand column  */}
          <div className="space-y-8">
            {/** Heading content */}
            <div className="space-y-6">
              <h1 className="font-martian font-bold text-38 leading-120 tracking-tight-3 md:text-62 md:pr-10 lg:pr-0 text-transparent bg-clip-text">
                Join the ultimate tech book club
              </h1>
              <p className="text-neutral-700 text-xl leading-140 tracking-tight-1 lg:text-balance">
                Turn your reading time into learning time with fellow tech enthusiasts. Get curated
                recommendations, join vibrant discussions, and level up your skills one chapter at a time.
              </p>
            </div>

            {/** CTA button and Testimonials */}
            <div className="space-y-5">
              <button
                onClick={scrollToMembershipOptions}
                type="button"
                className="bg-light-salmon-50 border-2 rounded-lg px-6 py-5 flex items-center gap-x-3 uppercase text-neutral-900 font-martian font-semibold leading-130 tracking-tight-2 cursor-pointer transition-colors ease-in-out duration-500 hover:bg-linear-to-r hover:from-light-salmon-100 hover:to-light-salmon-50 focus-visible:outline-2 focus-visible:outline-offset-4 "
              >
                <span>review membership options</span>
                <ArrowDownIcon className="size-6 shrink-0" />
              </button>

              <div className="flex items-center gap-x-3">
                <img
                  src={AvatarImage}
                  alt="3 person avatars"
                  height="40"
                  width="110"
                  loading="lazy"
                  decoding="async"
                />

                <div>
                  {/* Rating Wrapper */}
                  <div className="flex items-center" aria-label="Rated 5 out of 5" role="img">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="size-7" />
                    ))}
                  </div>

                  {/** Testimonials text */}
                  <p className="font-martian text-sm leading-120 tracking-tight-2 text-neutral-700">
                    200+ developers joined already
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/** Desktop Right hand column */}
          <picture>
            <source srcSet={HeroDesktopImage} media="(min-width: 1024px)" />
            <source srcSet={HeroTabletImage} media="(min-width: 768px)" />
            <img
              height="385"
              width="343"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              src={HeroMobileImage}
              alt="People reading at Tech Book Club"
              className="rounded-2xl object-cover w-full relative z-10"
            />
          </picture>
        </div>
      </div>
    </header>
  );
}
