import Navbar from "../components/HomePage/Navbar/Navbar";
import Hero from "../sections/HomePage/Hero";
import HomeLayout from "../layouts/HomeLayout";
import Gallery from "../sections/HomePage/Gallery";

export default function HomeView() {
  return (
    <HomeLayout>
      <Navbar />
      <Hero />
      <Gallery />
    </HomeLayout>
  );
}
