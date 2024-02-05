import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Destination from "./components/Destination";

export default function Home() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <section>
          <Hero />
        </section>
        <section className=" py-8 bg-purple-400 container">
          <Destination />
        </section>
      </main>
    </>
  );
}
