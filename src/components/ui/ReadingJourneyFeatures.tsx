import ArrowPattern from "../../assets/images/pattern-arrow.svg";

type ReadingJourneyFeaturesProps = {
  features: string[];
};

export default function ReadingJourneyFeatures({ features }: ReadingJourneyFeaturesProps) {
  return (
    <ol className="space-y-8 md:space-y-10 lg:space-y-0 lg:flex lg:items-center lg:justify-center lg:gap-x-12">
      {features.map((feature, number) => (
        <li className="space-y-5 md:space-y-6" key={number}>
          {/*Number and arrow pointer container */}
          <div className="lg:flex lg:items-center lg:justify-between">
            <span className="border-2 px-3 py-1.5 text-neutral-900 border-neutral-900 rounded-sm font-martian font-semibold leading-130 tracking-tight-2 md:text-lg">
              {number + 1}
            </span>
            {/*Arrow Pattern */}
            {number !== features.length - 1 ? (
              <img
                loading="lazy"
                decoding="async"
                aria-hidden="true"
                src={ArrowPattern}
                alt=""
                height="20"
                width="76"
                className="hidden lg:block"
              />
            ) : null}
          </div>
          {/*Text content */}
          <p className="font-martian font-semibold leading-130 tracking-tight-2 md:text-lg">{feature}</p>
        </li>
      ))}
    </ol>
  );
}
