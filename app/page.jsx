import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <section className=" hero ">
          <Hero />
        </section>
      </main>
    </>
  );
}
