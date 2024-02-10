import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Unleash from "./components/Unleash";
import About from "./components/About";
import Discover from "./components/Discover";
import Reviews from "./components/Reviews";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

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
        <section className=" py-10 container">
          <About />
        </section>
        <section className=" py-10 container">
          <Discover />
        </section>
        <section className=" py-10 container">
          <Reviews />
        </section>
        <section className=" py-10 container">
          <Explore />
        </section>
      </main>
      <footer className=" pt-10  bg-offWhite">
        <Footer />
      </footer>
    </>
  );
}
