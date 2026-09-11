import Hero from "./components/sections/Hero";
import ReadTogether from "./components/sections/ReadTogether";
import NotYourAverageBookClub from "./components/sections/NotYourAverageBookClub";
import ReadingJourney from "./components/sections/ReadingJourney";
import MembershipOptions from "./components/sections/MembershipOptions";
import Testimonial from "./components/sections/Testimonial";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <Hero />

      <main className="space-y-16 my-16 md:space-y-20 md:my-20 lg:my-30 lg:space-y-30 bg-neutral-0">
        <ReadTogether />

        <NotYourAverageBookClub />

        <ReadingJourney />

        <MembershipOptions />

        <Testimonial />
      </main>

      <Footer />
    </>
  );
}
