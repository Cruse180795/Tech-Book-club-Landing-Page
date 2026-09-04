export default function App() {
  return (
    <>
      <header className="mb-10">
        <h1>Header section</h1>
      </header>

      <main className="space-y-16 my-16 md:space-y-20 md:my-20 lg:my-30 lg:space-y-30">
        <section className="bg-red-500">
          <h2>Read Together Section</h2>
        </section>

        <section className="bg-lime-500">
          <h2>Not Your Average Book Club Section</h2>
        </section>

        <section className="bg-blue-500">
          <h2>Reading Journey Section</h2>
        </section>

        <section className="bg-yellow-500">
          <h2>Membership Options Section</h2>
        </section>
      </main>

      <footer>Footer section</footer>
    </>
  );
}
