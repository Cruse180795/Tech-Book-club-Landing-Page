import StarIcon from "../icons/StarIcon";

export default function Testimonial() {
  return (
    <section className="px-4 space-y-8 md:px-8 lg:px-0 lg:max-w-242.5 container mx-auto">
      {/** Stars */}
      <div className="flex items-center gap-x-1.5 lg:justify-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="size-7" />
        ))}
      </div>

      <blockquote className="space-y-8 lg:text-center">
        <p className="font-martian font-semibold text-2xl leading-110 tracking-tight-2 text-neutral-900 md:text-34 md:leading-130">
          This book club transformed my technical reading from a solitary activity into an enriching
          community experience. The discussions are gold!
        </p>

        <footer>
          <cite className="not-italic text-neutral-700 text-xl leading-140 tracking-tight-1">
            Sarah Chen, Software Architect
          </cite>
        </footer>
      </blockquote>
    </section>
  );
}
