import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Unleash from "./components/Unleash";

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
        <section className=" py-10 container">
          <Destination />
        </section>
        <section className=" py-10 container">
          <Unleash />
        </section>
      </main>
    </>
  );
}
