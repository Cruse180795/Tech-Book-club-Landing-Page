import MembershipCardTitle from "../ui/MembershipCardTitle";
import MembershipCardPrice from "../ui/MembershipCardPrice";
import MembershipCardFeatures from "../ui/MembershipCardFeatures";
import MembershipCardButton from "../ui/MembershipCardButton";

export default function MembershipOptions() {
  return (
    <section
      className="px-4 space-y-6 md:space-y-10 lg:space-y-16 md:px-8 lg:px-0 lg:max-w-242.5 container mx-auto"
      id="MembershipOptions"
    >
      {/** Stacked on mobile, wraps on tablet, in a row on desktop */}
      <h2 className="text-neutral-900 font-martian font-semibold text-34 leading-130 tracking-tight-2 md:text-50 lg:text-center">
        Membership options
      </h2>

      {/** Cards wrapper */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-center">
        {/** Card  Starter*/}
        <div className="space-y-6 p-6 border rounded-lg border-neutral-200 shadow-sm">
          <header className="space-y-6">
            <MembershipCardTitle title="Starter" />
            <MembershipCardPrice price="$19" hasPerMonth />
          </header>

          <hr className="border-t border-neutral-200" />
          {/** Membership features + button */}
          <div className="space-y-8">
            <MembershipCardFeatures features={["1 book/month", "Online forums"]} />

            {/** Does Nothing */}
            <MembershipCardButton label="Subscrbe now" />
          </div>
        </div>

        {/** Card  Pro*/}
        <div className="space-y-6 p-6 border rounded-lg border-neutral-200 shadow-sm bg-light-salmon-50 relative overflow-hidden lg:py-10">
          {/** Glow effect */}
          <div
            aria-hidden="true"
            className="absolute bg-glow -right-92 -bottom-135 blur-[200px] w-171 h-171 opacity-40"
          ></div>
          <header className="space-y-6">
            <MembershipCardTitle title="Pro" />
            <MembershipCardPrice price="$29" hasPerMonth />
          </header>

          <hr className="border-t border-neutral-200" />
          {/** Membership features + button */}

          <div className="space-y-8">
            <MembershipCardFeatures features={["2 books/month", "Virtual meetups"]} />

            {/** Does Nothing */}
            <MembershipCardButton label="Subscrbe now" className="relative z-10" />
          </div>
        </div>

        {/** Card  Enterprise*/}
        <div className="space-y-6 p-6 border rounded-lg border-neutral-200 shadow-sm">
          <header className="space-y-6">
            <MembershipCardTitle title="Enterprise" />
            <MembershipCardPrice price="Custom" />
          </header>

          <hr className="border-t border-neutral-200" />
          {/** Membership features + button */}

          <div className="space-y-8">
            <MembershipCardFeatures features={["Team access", "Private sessions"]} />
            {/** Does Nothing */}
            <MembershipCardButton label="Talk to us" />
          </div>
        </div>
      </div>
    </section>
  );
}
