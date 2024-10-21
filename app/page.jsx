import Nav from "./components/header/Nav";
import Hero from "./components/landingPage/Hero";
import Destination from "./components/landingPage/Destination";
import Unleash from "./components/landingPage/Unleash";
import About from "./components/landingPage/About";
import Discover from "./components/landingPage/Discover";
import Reviews from "./components/landingPage/Reviews";
import Explore from "./components/landingPage/Explore";
import Footer from "./components/landingPage/Footer";

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
        <section id="about" className=" py-10 container">
          <About />
        </section>
        <section className=" py-10 container">
          <Discover />
        </section>
        <section className=" py-10 container 0">
          <Reviews />
        </section>
        <section className=" py-20 container">
          <Explore />
        </section>
      </main>
      <footer className=" pt-10  bg-offWhite">
        <Footer />
      </footer>
    </>
  );
}
