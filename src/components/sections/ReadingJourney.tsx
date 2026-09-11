import ReadingJourneyFeatures from "../ui/ReadingJourneyFeatures";

export default function ReadingJourney() {
  return (
    <section className="px-4 md:px-8 lg:px-33.75 container mx-auto">
      {/** Inner section space within the background image */}
      <div
        className="py-16 px-4 bg-light-salmon-50 rounded-xl md:px-8 md:py-20 relative overflow-hidden"
        id="ReadingJourney"
      >
        {/** Glow effect */}
        <div
          aria-hidden="true"
          className="absolute bg-glow right-[-495.5px] bottom-[-382.078px] md:-right-69.75 md:bottom-[-282.527px] lg:-right-78 lg:bottom-[-389.978px] blur-[100px] w-171 h-171 opacity-40 rounded-full"
        ></div>

        <div className="space-y-8 md:space-y-12">
          <h2 className="text-34 leading-130 tracking-tight-3 font-semibold font-martian text-neutral-900 md:text-50 lg:max-w-xl lg:mx-auto lg:text-center">
            Your tech reading journey
          </h2>

          <ReadingJourneyFeatures
            features={[
              "Choose your membership tier",
              "Get your monthly book selection",
              "Join our discussion forums",
              "Attend exclusive meetups",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
