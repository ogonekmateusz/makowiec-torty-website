import Navbar from "../components/HomePage/Navbar/Navbar";
import Hero from "../components/sections/HomePage/Hero";
import HomeLayout from "../layouts/HomeLayout";

export default function HomeView() {
  return (
    <HomeLayout>
      <Navbar />
      <Hero />
    </HomeLayout>
  );
}
