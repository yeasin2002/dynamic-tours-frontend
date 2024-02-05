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
        <section className=" py-10 bg-green-500 container">
          <Destination />
        </section>
      </main>
    </>
  );
}
