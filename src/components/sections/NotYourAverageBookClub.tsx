import NotYourAverageBookClubMobileImage from "../../assets/images/image-not-average-mobile.webp";
import NotYourAverageBookClubTabletImage from "../../assets/images/image-not-average-tablet.webp";
import NotYourAverageBookClubDesktopImage from "../../assets/images/image-not-average-desktop.webp";
import CicelPattern from "../../assets/images/pattern-circle.png";
import TechLogos from "../../assets/images/logos-tech.svg";

export default function NotYourAverageBookClub() {
  return (
    <section className="px-4 md:px-8 lg:px-33.75 container mx-auto space-y-10 lg:flex lg:space-y-0 lg:items-center lg:gap-x-20">
      {/** Left Hand Desktop Column */}
      <div className="space-y-6 lg:max-w-132.5">
        <h2 className="text-neutral-900 font-martian font-semibold text-34 leading-130 tracking-tight-3 md:text-50 md:pr-10 lg:pr-0 relative">
          Not your average book {""}
          <span className="relative">
            club
            <span className="absolute bottom-0.5 -left-1 ">
              <img src={CicelPattern} alt="" className="w-full" />
            </span>
          </span>
        </h2>
        <p className="text-xl leading-140 tracking-tight-1 text-neutral-700 lg:pr-5 ">
          Connect with a community that speaks your language - from
          <span className="font-semibold"> Python</span> to
          <span className="font-semibold"> TypeScript</span> and everything in between. Our discussions
          blend technical depth with practical applications.
        </p>
      </div>

      {/** Right Hand Desktop Column */}
      <div className="md:relative">
        <img
          width="120"
          height="138"
          src={TechLogos}
          alt=""
          className="hidden md:block md:absolute md:bottom-10 md:right-10 lg:-left-20 lg:bottom-14"
          loading="lazy"
          decoding="async"
        />
        <picture>
          <source srcSet={NotYourAverageBookClubDesktopImage} media="(min-width: 1024px)" />
          <source srcSet={NotYourAverageBookClubTabletImage} media="(min-width: 768px)" />
          <img
            width="343"
            height="319"
            loading="lazy"
            decoding="async"
            src={NotYourAverageBookClubMobileImage}
            alt="People discussing books"
            className="rounded-2xl w-full object-cover aspect-14/13"
          />
        </picture>
      </div>
    </section>
  );
}
