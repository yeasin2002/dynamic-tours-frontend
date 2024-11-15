import Nav from "@/app/components/Header/nav";
import Hero from "@/app/components/LandingPage/hero";
import Destination from "@/app/components/LandingPage/destination";
import Unleash from "@/app/components/LandingPage/unleash";
import About from "@/app/components/LandingPage/about";
import Discover from "@/app/components/LandingPage/discover";
import Reviews from "@/app/components/LandingPage/reviews";
import Explore from "@/app/components/LandingPage/explore";
import Footer from "@/app/components/LandingPage/footer";
import Container from "@/app/components/Extra/container";

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
