import ReadTogether from "./components/sections/ReadTogether";
import MembershipOptions from "./components/sections/MembershipOptions";
import Testimonial from "./components/sections/Testimonial";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <header className="mb-10">
        <h1>Header section</h1>
      </header>

      <main className="space-y-16 my-16 md:space-y-20 md:my-20 lg:my-30 lg:space-y-30 bg-neutral-0">
        <ReadTogether />

        <section className="bg-lime-500">
          <h2>Not Your Average Book Club Section</h2>
        </section>

        <section className="bg-blue-500">
          <h2>Reading Journey Section</h2>
        </section>

        <MembershipOptions />

        <Testimonial />
      </main>

      <Footer />
    </>
  );
}
