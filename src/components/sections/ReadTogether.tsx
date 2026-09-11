import ReadingTogetherMobileImage from "../../assets/images/image-read-together-mobile.webp";
import ReadingTogetherDesktopImage from "../../assets/images/image-read-together-desktop.webp";
import ReadingTogetherTabletImage from "../../assets/images/image-read-together-tablet.webp";

import CheckedBoxIcon from "../icons/CheckedBoxIcon";

export default function ReadTogether() {
  return (
    <section className="px-4 space-y-10 md:px-8 lg:flex lg:items-center lg:gap-x-20 lg:space-y-0 lg:px-0 lg:max-w-292.5 container mx-auto">
      {/** On desktop right hand column - stacked on mobile, tablet & desktop */}
      <div className="space-y-6 md:space-y-8.5 lg:order-2">
        <h2 className="text-neutral-900 font-martian font-semibold text-34 leading-130 tracking-tight-2 md:text-50 md:text-balance lg:text-pretty">
          Read together, grow together
        </h2>

        <ul className="space-y-4 md:space-y-6 lg:w-130 lg:pr-24.75">
          <li className="readTogetherListItem">
            <CheckedBoxIcon className="size-6 shrink-0" />
            <span>Monthly curated tech reads selected by industry experts</span>
          </li>
          <li className="readTogetherListItem text-balance lg:text-pretty">
            <CheckedBoxIcon className="size-6 shrink-0" />
            <span>Virtual and in-person meetups for deep-dive discussions</span>
          </li>
          <li className="readTogetherListItem">
            <CheckedBoxIcon className="size-6 shrink-0" />
            <span>Early access to new tech book releases</span>
          </li>
          <li className="readTogetherListItem">
            <CheckedBoxIcon className="size-6 shrink-0" />
            <span>Author Q&A sessions with tech thought leaders</span>
          </li>
        </ul>
      </div>

      {/** On mobile left hand column */}
      <picture className="lg:order-1">
        <source srcSet={ReadingTogetherDesktopImage} media="(min-width: 1024px)" />
        <source srcSet={ReadingTogetherTabletImage} media="(min-width: 768px)" />

        <img
          height="319"
          width="343"
          loading="lazy"
          decoding="async"
          className="rounded-2xl w-full object-cover aspect-14/13"
          src={ReadingTogetherMobileImage}
          alt="People reading together"
        />
      </picture>
    </section>
  );
}
