import Image from "next/image";
import MainPage from "./components/Main";
import FeaturedVideo from "./components/FeaturedVideo";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <MainPage />
      <div className="h-screen"></div>
      <FeaturedVideo />
      <Testimonials />
    </main>
  );
}
