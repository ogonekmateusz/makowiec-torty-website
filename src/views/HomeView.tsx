import Navbar from "../components/HomePage/Navbar/Navbar";
import Hero from "../sections/HomePage/Hero";
import HomeLayout from "../layouts/HomeLayout";
import Gallery from "../sections/HomePage/Gallery";
import Contact from "../sections/HomePage/Contact";
import Footer from "../sections/HomePage/Footer";

export default function HomeView() {
  return (
    <HomeLayout>
      <Navbar />
      <Hero id="hero" />
      <Gallery id="gallery" />
      <Contact id="contact" />
      <Footer />
    </HomeLayout>
  );
}
