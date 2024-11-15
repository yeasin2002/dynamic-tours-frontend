import Nav from "@components/Header/nav";
import Hero from "@components/LandingPage/hero";
import Destination from "@components/LandingPage/destination";
import Unleash from "@components/LandingPage/unleash";
import About from "@components/LandingPage/about";
import Discover from "@components/LandingPage/discover";
import Reviews from "@components/LandingPage/reviews";
import Explore from "@components/LandingPage/explore";
import Footer from "@components/LandingPage/footer";
import Container from "@components/Extra/container";

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
        <Container>
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
        </Container>
      </main>
      <footer className=" pt-10  bg-offWhite">
        <Container>
          <Footer />
        </Container>
      </footer>
    </>
  );
}
